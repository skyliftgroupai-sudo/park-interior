// Single source of truth for per-page SEO.
// Used by <Seo /> at runtime and by scripts/prerender.mjs at build time,
// so every URL ships its own title, description and self-canonical in raw HTML.

export const SITE_URL = "https://www.parkinteriorsvt.com";
export const BRAND = "Park Interiors";
export const PHONE = "+1-802-777-0951";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const city = (name, extra = "") => ({
  title: `Home Remodeling & Renovation Contractor in ${name}, VT | ${BRAND}`,
  description: `${BRAND} provides kitchen and bathroom remodeling, home renovations, additions, roofing, siding and painting in ${name}, VT${extra}. Local, licensed contractor. Call 802-777-0951 for a free quote.`,
  changefreq: "monthly",
  priority: 0.8,
});

export const routes = {
  "/": {
    title: `${BRAND} | Home Remodeling & Renovation Contractor in Chittenden County, VT`,
    description: `${BRAND} is a Vermont general contractor for kitchen and bathroom remodeling, home renovations, additions, roofing, siding and painting across Burlington, Essex, Jericho, Underhill and Chittenden County. Free quotes: 802-777-0951.`,
    changefreq: "weekly",
    priority: 1.0,
  },
  "/about-us": {
    title: `About ${BRAND} | Vermont Remodeling & Renovation Contractor`,
    description: `Meet ${BRAND}, a locally owned Vermont remodeling contractor delivering quality craftsmanship on kitchens, bathrooms, additions and exterior projects.`,
    priority: 0.6,
  },
  "/contact-us": {
    title: `Contact ${BRAND} | Free Remodeling Quote in Vermont`,
    description: `Request a free quote from ${BRAND} for remodeling, renovation, additions, roofing, siding or painting in Vermont. Call 802-777-0951 or send us a message.`,
    priority: 0.9,
  },
  "/gallery": {
    title: `Project Gallery | Remodeling & Renovation Work | ${BRAND}`,
    description: `See kitchen, bathroom, remodeling, roofing, siding and painting projects completed by ${BRAND} across Vermont.`,
    priority: 0.6,
  },
  "/faq": {
    title: `Remodeling FAQ | ${BRAND} Vermont`,
    description: `Answers to common questions about remodeling, renovation timelines, quotes, roofing, siding and painting with ${BRAND} in Vermont.`,
    priority: 0.5,
  },
  "/blog": {
    title: `Home Remodeling & Renovation Tips | ${BRAND} Blog`,
    description: `Expert tips on home remodeling, renovation and interior upgrades for Vermont homeowners from ${BRAND}.`,
    changefreq: "weekly",
    priority: 0.6,
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${BRAND}`,
    description: `How ${BRAND} collects, uses and protects your personal information, including SMS communications.`,
    priority: 0.2,
  },
  "/terms-and-conditions": {
    title: `Terms & Conditions | ${BRAND}`,
    description: `Terms of service for ${BRAND} remodeling, roofing, siding, painting and renovation work in Vermont.`,
    priority: 0.2,
  },

  // Services
  "/home-remodeling": {
    title: `Kitchen, Bathroom & Home Remodeling in Vermont | ${BRAND}`,
    description: `Kitchen remodeling, bathroom remodeling, basement finishing and custom cabinetry in Burlington and Chittenden County, VT. Quality craftsmanship from ${BRAND}. Free quote.`,
    priority: 0.9,
  },
  "/home-renovations": {
    title: `Home Renovation Contractor in Vermont | Drywall, Flooring & Repairs | ${BRAND}`,
    description: `Whole-home and interior renovations in Chittenden County, VT: drywall, flooring, rot repair, demolition and full remodels by ${BRAND}. Free quote.`,
    priority: 0.9,
  },
  "/home-addition": {
    title: `Home Additions in Vermont | Room, Second-Story & Garage Additions | ${BRAND}`,
    description: `Room additions, second-story additions and garage additions designed and built by ${BRAND} across Chittenden County, VT. Free quote.`,
    priority: 0.9,
  },
  "/roofing": {
    title: `Roofing Contractor in Vermont | Roof Repair & Replacement | ${BRAND}`,
    description: `Roof installation, repair and replacement built for Vermont weather. Licensed roofing from ${BRAND} in Burlington and Chittenden County. Free estimate.`,
    priority: 0.8,
  },
  "/siding": {
    title: `Siding Installation & Repair in Vermont | ${BRAND}`,
    description: `Vinyl and fiber cement siding installation and repair for Vermont homes. Energy-efficient, low-maintenance siding from ${BRAND}. Free quote.`,
    priority: 0.8,
  },
  "/painting": {
    title: `Interior & Exterior House Painting in Vermont | ${BRAND}`,
    description: `Interior and exterior house painting and cabinet painting in Burlington and Chittenden County, VT. Clean, durable finishes from ${BRAND}. Free quote.`,
    priority: 0.8,
  },

  // Service areas
  "/burlington-vt": city("Burlington"),
  "/south-burlington-vt": city("South Burlington"),
  "/milton-vt": city("Milton"),
  "/richmond-vt": city("Richmond"),
  "/hinesburg-vt": city("Hinesburg"),
  "/colchester-vt": city("Colchester"),
  "/fairfax-vt": city("Fairfax"),
  "/underhill-vt": city("Underhill"),
  "/jericho-vt": city("Jericho"),
  "/essex-vt": city("Essex", " and Essex Junction"),
  "/shelburne-vt": city("Shelburne"),
};

export const NOT_FOUND = {
  title: `Page Not Found | ${BRAND}`,
  description: "The page you're looking for doesn't exist or has been moved.",
  noindex: true,
};

export function canonicalFor(path) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
