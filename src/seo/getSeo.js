import { routes, NOT_FOUND, BRAND } from "./routes";
import blogs from "../Pages/Blog/blogData";

export function getSeo(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  if (routes[path]) return { ...routes[path], path };

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = blogs.find((b) => b.slug === blogMatch[1]);
    if (post) {
      return {
        path,
        title: post.seo?.metaTitle ? `${post.seo.metaTitle} | ${BRAND}` : `${post.title} | ${BRAND}`,
        description: post.seo?.metaDescription || post.excerpt || "",
        type: "article",
      };
    }
  }
  return { ...NOT_FOUND, path };
}
