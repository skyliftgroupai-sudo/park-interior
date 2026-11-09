// Single source of truth for per-page SEO.
// Used by <Seo /> at runtime and by scripts/prerender.mjs at build time,
// so every URL ships its own title, description and self-canonical in raw HTML.

export const SITE_URL = "https://www.parkinteriorsvt.com";
export const BRAND = "Park Interiors";
export const PHONE = "+1-802-777-0951";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const city = (name, extra = "") => ({
  title: `General Contractor in ${name}, VT | Additions & Remodeling | ${BRAND}`,
  description: `Licensed, insured general contractor in ${name}, VT${extra}: home additions, basement finishing, kitchen and bathroom remodels, framing, drywall and flooring. Free estimate: 802-777-0951.`,
  changefreq: "monthly",
  priority: 0.8,
});

export const routes = {
  "/": {
    title: `General Contractor in Burlington, VT | Additions, Kitchens & Basements | ${BRAND}`,
    description: `${BRAND} is a licensed, insured general contractor in Chittenden County, VT. Home additions, basement finishing, kitchen and bathroom remodels, framing, drywall and flooring in Burlington, Essex, Jericho and Underhill. Free estimates: 802-777-0951.`,
    changefreq: "weekly",
    priority: 1.0,
  },
  "/about-us": {
    title: `About ${BRAND} | Vermont Remodeling & Renovation Contractor`,
    description: `Meet ${BRAND}, a licensed and insured Vermont general contractor delivering quality craftsmanship on kitchens, bathrooms, additions and exterior projects.`,
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
  "/kitchen-remodeling": {
    title: `Kitchen Remodeling in Burlington, VT | ${BRAND}`,
    description: `Kitchen remodels in Burlington and Chittenden County, VT: layout changes, cabinets, counters, flooring and finishes from one licensed, insured contractor. Free estimate: 802-777-0951.`,
    priority: 0.9,
  },
  "/bathroom-remodeling": {
    title: `Bathroom Remodeling in Burlington, VT | Tile Showers & Tub Conversions | ${BRAND}`,
    description: `Bathroom remodels in Burlington and Chittenden County, VT: tile showers, tub-to-shower conversions, vanities and subfloor repair. Licensed and insured. Free estimate.`,
    priority: 0.9,
  },
  "/basement-finishing": {
    title: `Basement Finishing in Chittenden County, VT | ${BRAND}`,
    description: `Finish your basement in Burlington, Essex, Colchester or Jericho, VT: framing, insulation, egress windows, drywall and flooring done to code. Free estimate: 802-777-0951.`,
    priority: 0.9,
  },
  "/framing": {
    title: `Wood & Metal Stud Framing Contractor in Vermont | ${BRAND}`,
    description: `Wood and metal stud framing for additions, basements, remodels and light commercial interiors in Chittenden County, VT. Licensed, insured, inspection-ready. Free quote.`,
    priority: 0.8,
  },
  "/drywall": {
    title: `Drywall Installation & Repair in Burlington, VT | ${BRAND}`,
    description: `Drywall hanging, taping, finishing and repair, including water damage and plaster replacement, in Burlington and Chittenden County, VT. Free estimate.`,
    priority: 0.8,
  },
  "/flooring": {
    title: `Flooring Installation in Burlington, VT | LVP, Hardwood & Tile | ${BRAND}`,
    description: `LVP, hardwood, laminate and tile flooring installed over a properly prepped subfloor in Burlington and Chittenden County, VT. Free estimate: 802-777-0951.`,
    priority: 0.8,
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
