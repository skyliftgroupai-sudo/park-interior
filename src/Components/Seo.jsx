import { useLocation } from "react-router-dom";
import { BRAND, OG_IMAGE, canonicalFor } from "../seo/routes";
import { getSeo } from "../seo/getSeo";

// React 19 hoists these tags into <head> (on the server and in the browser),
// so each route gets its own title, description and self-referencing canonical.
export default function Seo() {
  const { pathname } = useLocation();
  const seo = getSeo(pathname);
  const url = canonicalFor(seo.path);

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={url} />
      )}
      <meta property="og:type" content={seo.type || "website"} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}
