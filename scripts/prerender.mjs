// Build-time prerender (static site generation).
// Renders every route to real HTML so Google gets unique content, title,
// description and a self-canonical for each URL without running JavaScript.
//
// Runs after:  vite build  &&  vite build --ssr src/entry-server.jsx --outDir dist-server
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

const { render, routes, blogSlugs } = await import(pathToFileURL(serverEntry).href);
const { SITE_URL } = await import(pathToFileURL(path.join(root, "src/seo/routes.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error('index.html template is missing <div id="root"></div>');
}

// React 19 emits hoistable <title>/<meta>/<link> tags at the start of the output.
const HOISTED = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)+/;

function page(url) {
  const html = render(url);
  const head = (html.match(HOISTED) || [""])[0];
  const body = html.slice(head.length);
  const taggedHead = head.replace(/<(title|meta|link)\b/g, "<$1 data-prerender");
  return template
    .replace("</head>", `${taggedHead}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

function write(file, contents) {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, contents);
}

const urls = [...Object.keys(routes), ...blogSlugs.map((s) => `/blog/${s}`)];
for (const url of urls) {
  const file = url === "/" ? "index.html" : `${url.slice(1)}.html`;
  const html = page(url);
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/) || [, ""])[1].replace(/<[^>]+>/g, "").trim();
  if (!h1) console.warn(`  ! no <h1> on ${url}`);
  write(file, html);
  console.log(`  prerendered ${url.padEnd(48)} h1: ${h1.slice(0, 60)}`);
}

// Real 404 page (Vercel serves dist/404.html with a 404 status for unknown URLs).
write("404.html", page("/__not-found__"));
console.log("  prerendered 404.html");

// Sitemap generated from the same route list, so it can never drift from the site.
const today = new Date().toISOString().slice(0, 10);
const entries = urls.map((url) => {
  const r = routes[url] || { changefreq: "monthly", priority: 0.5 };
  const loc = url === "/" ? `${SITE_URL}/` : `${SITE_URL}${url}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq || "monthly"}</changefreq>\n    <priority>${(r.priority ?? 0.7).toFixed(1)}</priority>\n  </url>`;
});
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`
);
console.log(`  sitemap.xml with ${urls.length} URLs`);

fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
