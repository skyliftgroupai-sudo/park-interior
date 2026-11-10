// Content for the core service pages. Rendered by src/Components/ServicePage.jsx.
// SEO titles/descriptions live in src/seo/routes.js.
import kitchenImg from "../assets/remodeling/kitchen.webp";
import bathroomImg from "../assets/remodeling/bathroom.webp";
import basementImg from "../assets/remodeling/basement.jpg";
import framingImg from "../assets/hero/hero1.webp";
import drywallImg from "../assets/painting/image1.webp";
import flooringImg from "../assets/hero/hero2.webp";

const consult = {
  title: "Free on-site estimate",
  text: "We walk the space with you, measure, look at what’s behind the walls where we can, and talk through how you’ll actually use the room.",
};
const quote = {
  title: "Written scope and quote",
  text: "You get a line-by-line scope so you know exactly what’s included, what’s an allowance, and what decisions are still yours to make.",
};
const permits = {
  title: "Permits and scheduling",
  text: "We pull the permits your town requires, line up inspections, and give you a start date and an honest timeline before demo day.",
};
const walkthrough = {
  title: "Final walkthrough",
  text: "We walk the finished space together, fix anything on the punch list, and leave the job site clean.",
};

export const servicePages = {
  "kitchen-remodeling": {
    slug: "kitchen-remodeling",
    serviceName: "Kitchen Remodeling",
    image: kitchenImg,
    h1: "Kitchen Remodeling in Burlington & Chittenden County, VT",
    intro:
      "From a cabinet and countertop refresh to a full gut-and-rebuild with a new layout, Park Interiors remodels kitchens across Burlington, Essex, Williston and the rest of Chittenden County. One licensed, insured contractor handles the framing, drywall, flooring and finish work, so your project doesn’t stall between trades.",
    offeringsTitle: "Kitchen Remodeling Services",
    offeringsIntro:
      "Every kitchen is different. These are the projects we take on most often for Vermont homeowners.",
    offerings: [
      { title: "Full kitchen remodels", text: "Down to the studs: new layout, cabinets, counters, flooring, lighting and finishes, coordinated as one project." },
      { title: "Layout changes & wall removal", text: "Opening a kitchen to the living room or moving the sink and range, including proper headers and beams where a wall carries load." },
      { title: "Cabinet installation", text: "Stock, semi-custom or custom cabinets installed level, plumb and tight to Vermont’s not-always-square older walls." },
      { title: "Countertops & backsplash", text: "Measuring, coordinating fabrication and installing quartz, granite, butcher block or laminate, plus tile backsplashes." },
      { title: "Kitchen flooring", text: "Tile, hardwood and luxury vinyl plank installed over a properly prepped, flat subfloor so it lasts." },
      { title: "Drywall, paint & trim", text: "Patch-free walls and ceilings after the rough-in work, finished and painted to match the rest of your home." },
    ],
    localTitle: "Remodeling a Kitchen in a Vermont Home",
    localBody: [
      "A lot of kitchens around Burlington, Winooski and the older parts of Essex sit in homes built long before modern codes. Opening walls often turns up undersized framing, old wiring or patched-in plumbing. We plan for that at the estimate instead of surprising you with it halfway through.",
      "If your home was built before 1978, painted surfaces may contain lead, and federal EPA rules require lead-safe work practices when those surfaces are disturbed. It’s one more reason to work with a contractor who plans demolition carefully.",
      "Most kitchen remodels in Burlington and the surrounding towns need a building permit, and some need separate electrical and plumbing permits. We handle the permit paperwork and inspections so the work is documented when you sell.",
    ],
    processNoun: "Kitchen Remodel",
    process: [consult, quote, { title: "Design & selections", text: "Cabinets, counters, flooring and fixtures get chosen and ordered early, so long-lead items don’t hold up the job." }, permits, { title: "Build", text: "Demo, framing, rough-ins, drywall, cabinets, counters, flooring and finish work, with one point of contact the whole way." }, walkthrough],
    costNoun: "a Kitchen Remodel",
    costIntro:
      "We price every kitchen from a written scope after seeing the space. The biggest drivers are:",
    costFactors: [
      "Whether the layout stays the same or the sink, range or walls move",
      "Cabinet line: stock, semi-custom or custom",
      "Countertop material and how many seams and cutouts it needs",
      "Condition of the subfloor, framing and wiring once walls are opened",
      "Flooring and backsplash material and square footage",
      "Permits and any electrical or plumbing upgrades the code requires",
    ],
    faqs: [
      { q: "How long does a kitchen remodel take?", a: "A cosmetic refresh can take a couple of weeks. A full remodel with layout changes usually takes several weeks of on-site work, plus lead time for cabinets and countertops. We give you a schedule in writing before we start." },
      { q: "Do I need a permit to remodel my kitchen in Burlington, VT?", a: "Most kitchen remodels that change walls, wiring or plumbing need permits from the City of Burlington’s Department of Permitting & Inspections, and other towns have their own rules. We pull the permits and schedule inspections for you." },
      { q: "Can you remove the wall between my kitchen and living room?", a: "Often, yes. If the wall is load-bearing it needs a properly sized beam and supports, and sometimes an engineer’s sign-off. We check during the estimate and include the structural work in the quote." },
      { q: "Can I keep using my kitchen during the remodel?", a: "For a full remodel, plan on setting up a temporary kitchen elsewhere in the house. For smaller projects we can often phase the work so you keep a working sink." },
      { q: "Do you do the plumbing and electrical?", a: "We coordinate licensed electricians and plumbers as part of the project, so you deal with one contractor and one schedule." },
      { q: "What areas do you serve?", a: "Burlington, South Burlington, Essex, Williston, Colchester, Shelburne, Jericho, Underhill, Milton, Richmond, Hinesburg and nearby towns in Chittenden County." },
    ],
    related: ["bathroom-remodeling", "flooring", "drywall", "home-addition"],
    ctaTitle: "Ready to Plan Your New Kitchen?",
  },

  "bathroom-remodeling": {
    slug: "bathroom-remodeling",
    serviceName: "Bathroom Remodeling",
    image: bathroomImg,
    h1: "Bathroom Remodeling in Burlington & Chittenden County, VT",
    intro:
      "Park Interiors remodels bathrooms across Burlington, South Burlington, Essex and the rest of Chittenden County, from a tired hall bath to a full primary-suite renovation. We take care of the waterproofing, ventilation and subfloor work you don’t see, then the tile, fixtures and finishes you do.",
    offeringsTitle: "Bathroom Remodeling Services",
    offeringsIntro: "Whether it’s a quick update or a full gut job, these are the bathroom projects we handle.",
    offerings: [
      { title: "Full bathroom remodels", text: "Complete tear-out and rebuild: layout, shower or tub, vanity, toilet, tile, lighting and ventilation." },
      { title: "Tub-to-shower conversions", text: "Replacing a dated tub with a walk-in or curbless shower, built on a properly sloped, waterproofed base." },
      { title: "Tile showers & floors", text: "Tile set over a waterproofing membrane, not just greenboard, so moisture stays out of your walls." },
      { title: "Vanities & fixtures", text: "Vanity, sink, faucet, toilet and mirror installation, including moving plumbing where the layout calls for it." },
      { title: "Accessibility upgrades", text: "Blocking for grab bars, wider doorways, low-threshold showers and comfort-height fixtures for aging in place." },
      { title: "Subfloor & rot repair", text: "Fixing soft floors and water-damaged framing around old toilets and tubs before new finishes go down." },
    ],
    localTitle: "Bathroom Remodeling in a Cold, Humid Climate",
    localBody: [
      "Vermont winters mean warm, moist bathroom air hitting cold exterior walls. Without a properly vented exhaust fan and a real waterproofing system behind the tile, that moisture ends up in the framing. We size and duct ventilation to the outside and waterproof wet areas before any tile goes on.",
      "In older homes around Burlington and Winooski we regularly find rotted subfloors under toilets and tubs. We open it up, repair the structure, and only then build the new bathroom on top of it.",
      "Moving or adding plumbing fixtures usually means a plumbing permit, and new circuits mean an electrical permit. We coordinate licensed trades and inspections so the work is done to code.",
    ],
    processNoun: "Bathroom Remodel",
    process: [consult, quote, { title: "Selections", text: "Tile, vanity, fixtures and fan get selected and ordered before demo, so the room isn’t out of service longer than it needs to be." }, permits, { title: "Build", text: "Demo, framing and subfloor repair, rough plumbing and electrical, waterproofing, tile, fixtures and paint." }, walkthrough],
    costNoun: "a Bathroom Remodel",
    costIntro: "Every bathroom gets a written, itemized quote after we see it. The main cost drivers are:",
    costFactors: [
      "Keeping the existing layout vs. moving the toilet, shower or vanity",
      "Tub, prefab shower or a custom tile shower",
      "Tile type and total square footage of tile",
      "Hidden damage: rot, mold or failing subfloor once demo starts",
      "Vanity, fixture and lighting selections",
      "Ventilation and electrical upgrades needed to meet code",
    ],
    faqs: [
      { q: "How long does a bathroom remodel take?", a: "A straightforward remodel that keeps the layout typically takes a few weeks of work on site. Custom tile showers and layout changes take longer. We give you a schedule before we start." },
      { q: "Do you build custom tile showers?", a: "Yes. We build tile showers on a sloped, fully waterproofed base and walls so the tile is a finish, not the only thing keeping water out." },
      { q: "Can you convert my tub into a walk-in shower?", a: "Yes. Tub-to-shower conversions are one of our most common projects, including low-threshold showers for easier access." },
      { q: "Will I need a permit for my bathroom remodel?", a: "If plumbing or wiring changes, you’ll usually need permits from your town. We handle the paperwork and inspections." },
      { q: "What if you find rot when the floor comes up?", a: "It happens often in older Vermont homes. We show you what we find, explain the repair, and price it before continuing." },
      { q: "Which towns do you serve?", a: "Burlington, South Burlington, Essex, Williston, Colchester, Shelburne, Jericho, Underhill and surrounding Chittenden County towns." },
    ],
    related: ["kitchen-remodeling", "basement-finishing", "flooring", "drywall"],
    ctaTitle: "Let’s Talk About Your Bathroom",
  },

  "basement-finishing": {
    slug: "basement-finishing",
    serviceName: "Basement Finishing",
    image: basementImg,
    h1: "Basement Finishing & Remodeling in Chittenden County, VT",
    intro:
      "Turn an unfinished Vermont basement into a family room, guest suite, home office or gym. Park Interiors frames, insulates, drywalls and finishes basements across Burlington, Essex, Colchester, Jericho and Underhill, and starts with the moisture and insulation details that make a basement comfortable year-round.",
    offeringsTitle: "Basement Finishing Services",
    offeringsIntro: "From a simple open rec room to a full suite with a bedroom and bath, here’s what we build.",
    offerings: [
      { title: "Full basement finishing", text: "Framing, insulation, drywall, ceilings, doors, trim, flooring and paint for a fully livable lower level." },
      { title: "Basement bedrooms", text: "Bedrooms built with code-compliant egress windows, smoke and CO alarms, and proper ceiling height." },
      { title: "Basement bathrooms", text: "Adding a full or half bath, coordinated with licensed plumbers for drains and venting." },
      { title: "Home offices & gyms", text: "Quiet, well-lit workspaces and durable gym floors, with sound insulation where you need it." },
      { title: "Wood or metal stud framing", text: "Walls framed with metal studs or treated wood, kept off the slab where moisture is a concern." },
      { title: "Basement remodels", text: "Updating a dated finished basement: new layout, drywall, ceilings, flooring and lighting." },
    ],
    localTitle: "Finishing a Basement in Vermont: Moisture, Radon and Cold",
    localBody: [
      "Spring snowmelt and mud season put a lot of water against Vermont foundations. Before we frame a single wall, we look for signs of water coming in. If there’s an active leak, it gets fixed first, because no finish holds up over a wet wall.",
      "Basement walls stay cold, so how they’re insulated matters. We use insulation and framing details that keep warm, humid air from condensing on the concrete behind your new walls. That’s what separates a basement that smells musty in three years from one that stays comfortable.",
      "The Vermont Department of Health recommends testing every home for radon, and finishing a basement is a good time to do it. If a bedroom is part of the plan, it needs an egress window big enough to climb out of. We build that in from the start.",
    ],
    processNoun: "Basement Project",
    process: [consult, quote, permits, { title: "Framing, insulation & rough-ins", text: "Walls framed and insulated, electrical, plumbing and HVAC roughed in, then inspected before anything gets covered." }, { title: "Drywall, flooring & finishes", text: "Drywall, ceilings, doors, trim, flooring and paint, finished to the same standard as the rest of your home." }, walkthrough],
    costNoun: "Finishing a Basement",
    costIntro: "Every basement gets an itemized quote after we inspect it. These are the factors that move the price most:",
    costFactors: [
      "Square footage you want finished",
      "Whether you add a bathroom, bedroom, wet bar or kitchenette",
      "Moisture issues that need fixing before finishing",
      "Egress window cutting and installation for a legal bedroom",
      "Ceiling type: drywall, drop ceiling or exposed and painted",
      "Flooring choice and any subfloor system over the slab",
    ],
    costLink: { to: "/blog/basement-finishing-cost-vermont", label: "How Much Does It Cost to Finish a Basement in Vermont?" },
    faqs: [
      { q: "How long does it take to finish a basement?", a: "A typical basement finish takes several weeks of on-site work, depending on size and whether a bathroom is involved. Inspections at the framing and rough-in stages add time, and we schedule around them." },
      { q: "Do I need a permit to finish my basement in Vermont?", a: "In most Chittenden County towns, yes, especially when you add bedrooms, bathrooms or new electrical circuits. We pull the permits and schedule inspections." },
      { q: "Can I add a bedroom in my basement?", a: "Yes, as long as it has a code-compliant egress window, proper ceiling height and smoke and CO alarms. We can cut and install egress windows as part of the project." },
      { q: "My basement gets damp in spring. Can it still be finished?", a: "Usually, once the source of the water is handled. We assess moisture first and won’t cover up an active leak." },
      { q: "Should basement walls be framed with wood or metal studs?", a: "Both work. Metal studs don’t rot or absorb moisture, which is helpful below grade. Wood is easier to hang things on. We’ll recommend what fits your basement." },
      { q: "Do you finish basements outside Burlington?", a: "Yes. We work throughout Chittenden County, including Essex, Colchester, Williston, Jericho, Underhill, Milton, Richmond and Hinesburg." },
    ],
    related: ["framing", "drywall", "flooring", "bathroom-remodeling"],
    ctaTitle: "Ready to Use Your Whole House?",
  },

  framing: {
    slug: "framing",
    serviceName: "Wood & Metal Framing",
    image: framingImg,
    h1: "Wood & Metal Stud Framing Contractor in Vermont",
    intro:
      "Framing is the skeleton of every addition, basement and remodel. Park Interiors frames with dimensional lumber and light-gauge metal studs for homes and light commercial interiors across Chittenden County, VT, then carry the job through drywall and finishes when you want one crew for the whole thing.",
    offeringsTitle: "Framing Services",
    offeringsIntro: "Structural and interior framing for residential and light commercial projects.",
    offerings: [
      { title: "Addition framing", text: "Floor systems, walls and roof framing for room additions, garages and second-story additions." },
      { title: "Interior wall framing", text: "New rooms, closets and layout changes framed straight and plumb, ready for drywall." },
      { title: "Metal stud framing", text: "Light-gauge steel studs for basements, commercial interiors and anywhere you want walls that won’t rot, warp or burn." },
      { title: "Load-bearing wall removal", text: "Removing or opening load-bearing walls with properly sized beams, posts and temporary shoring." },
      { title: "Basement framing", text: "Insulated perimeter walls and partitions, framed to keep moisture off the wood." },
      { title: "Soffits, bulkheads & ceilings", text: "Boxing in ducts and beams, and framing drop ceilings, so the finished space looks intentional." },
    ],
    localTitle: "Wood vs. Metal Studs: Which Is Right for Your Project?",
    localBody: [
      "Wood framing is the standard for most Vermont homes. It’s strong, easy to fasten into, and what most additions and structural work call for. Metal studs are lighter, perfectly straight, and won’t rot or absorb water. That makes them a strong choice for basements and commercial interiors.",
      "Plenty of projects use both: wood for structural walls and additions, metal for non-load-bearing partitions and below-grade walls. Because we frame with both, we’ll recommend what fits your space, not what’s easiest for us.",
      "Structural framing on additions has to handle Vermont’s snow loads and pass framing inspection before it’s covered. We frame to the plans and schedule the inspection so nothing gets closed up early.",
    ],
    processNoun: "Framing Project",
    process: [consult, quote, permits, { title: "Layout & framing", text: "Walls laid out from the plans, framed, braced and checked for plumb, level and square." }, { title: "Inspection & handoff", text: "Framing inspection passed, then we move on to insulation, drywall and finishes or hand off to your next trade." }],
    costNoun: "Framing",
    costIntro: "Framing is priced from the plans or a site measure. What changes the number:",
    costFactors: [
      "Structural vs. non-structural framing",
      "Wood vs. metal studs and current material prices",
      "Wall height, openings and soffits",
      "Beams, headers or engineered lumber required",
      "Access to the site and how much demo comes first",
      "Whether we’re also doing the drywall and finishes",
    ],
    costLink: { to: "/blog/home-addition-cost-vermont", label: "How Much Does a Home Addition Cost in Vermont?" },
    faqs: [
      { q: "Do you do metal stud framing for commercial spaces?", a: "Yes. We frame light commercial interiors with metal studs, including offices, retail fit-outs and tenant improvements, and can carry the job through drywall." },
      { q: "Is metal stud framing better than wood for a basement?", a: "Metal studs don’t rot or absorb moisture, which helps below grade. Treated wood bottom plates also work. We’ll recommend what fits your basement and budget." },
      { q: "Can you remove a load-bearing wall?", a: "Yes, with a properly sized beam and posts and temporary shoring during the work. Larger spans may need an engineer’s design, which we coordinate." },
      { q: "Do you only do framing, or the whole project?", a: "Either. We can frame and hand off, or take the project through insulation, drywall, paint and flooring." },
      { q: "Do I need a framing inspection?", a: "Permitted projects in most Vermont towns require a framing inspection before walls are covered. We schedule it." },
      { q: "Where do you work?", a: "Throughout Chittenden County, VT, including Burlington, South Burlington, Essex, Williston, Colchester, Jericho and Underhill." },
    ],
    related: ["home-addition", "basement-finishing", "drywall", "home-renovations"],
    ctaTitle: "Need Framing Done Right?",
  },

  drywall: {
    slug: "drywall",
    serviceName: "Drywall Installation & Repair",
    image: drywallImg,
    h1: "Drywall Installation, Finishing & Repair in Chittenden County, VT",
    intro:
      "Park Interiors hangs, tapes, finishes and repairs drywall for homes and light commercial spaces across Burlington, Essex, Colchester and the rest of Chittenden County. Flat walls, crisp corners and invisible patches, primed and painted so the job is actually done.",
    offeringsTitle: "Drywall Services",
    offeringsIntro: "New construction, remodels and repairs, from a single patch to a whole house.",
    offerings: [
      { title: "Drywall hanging", text: "New drywall for additions, basements and remodels, hung with tight seams and the right board for each room." },
      { title: "Taping & finishing", text: "Taped, mudded and sanded to the finish level the space needs, ready for paint." },
      { title: "Drywall repair", text: "Holes, cracks, water damage and failed tape joints repaired and blended into the surrounding wall." },
      { title: "Ceilings", text: "New and repaired drywall ceilings, including fixing sagging or cracked plaster ceilings with new board." },
      { title: "Moisture-resistant board", text: "Moisture- and mold-resistant drywall in bathrooms, laundry rooms and basements." },
      { title: "Painting after drywall", text: "Primer and paint so you’re not left hiring a second contractor to finish the room." },
    ],
    localTitle: "Drywall in Older Vermont Homes",
    localBody: [
      "Many homes around Burlington and the older village centers still have plaster walls. When plaster is too far gone to patch, we can skim it or replace it with drywall, matching the existing wall thickness so trim and outlets still line up.",
      "Dry winter heat and humid summers make seams move. Proper taping and finishing keeps seams from cracking every heating season.",
      "If a wall or ceiling was damaged by a leak, we find out whether the source has been fixed and check the framing behind it before patching, so the stain doesn’t come back.",
    ],
    processNoun: "Drywall Project",
    process: [consult, quote, { title: "Prep & protection", text: "Floors and furniture covered, dust controlled, and damaged material removed." }, { title: "Hang, tape & finish", text: "Board hung, seams taped, coats applied and sanded smooth." }, { title: "Prime, paint & clean up", text: "Primed and painted if included, then cleaned up and walked through with you." }],
    costNoun: "Drywall Work",
    costIntro: "Drywall is priced by the job after we see it. The main factors are:",
    costFactors: [
      "Square footage of board to hang",
      "Finish level required, especially for walls with raking light",
      "Ceiling height and access",
      "Repair size and how much blending the patch needs",
      "Plaster removal or skim-coating in older homes",
      "Whether primer and paint are included",
    ],
    faqs: [
      { q: "Can you repair drywall water damage?", a: "Yes. We cut out damaged board, check the framing and insulation behind it, and patch, finish and paint once the leak is fixed." },
      { q: "Do you do small drywall repairs?", a: "Yes, though small patches are often bundled with other work so the trip makes sense for you. Call and we’ll tell you honestly." },
      { q: "Can you replace plaster walls with drywall?", a: "Yes. We can remove failing plaster or skim-coat it, and replace it with drywall built out to match your existing trim." },
      { q: "Do you paint after drywall?", a: "Yes. We prime and paint so the room is finished, not just ready for another contractor." },
      { q: "Do you do commercial drywall?", a: "We handle light commercial interiors, often alongside metal stud framing." },
      { q: "What areas do you cover?", a: "Burlington, South Burlington, Essex, Williston, Colchester, Shelburne, Jericho, Underhill and nearby towns." },
    ],
    related: ["framing", "basement-finishing", "flooring", "home-renovations"],
    ctaTitle: "Get Your Walls Fixed Right",
  },

  flooring: {
    slug: "flooring",
    serviceName: "Flooring Installation",
    image: flooringImg,
    h1: "Flooring Installation in Burlington & Chittenden County, VT",
    intro:
      "Park Interiors installs hardwood, luxury vinyl plank (LVP), laminate and tile floors across Chittenden County, VT. We fix the subfloor first, so your new floor stays flat, quiet and solid for years.",
    offeringsTitle: "Flooring Services",
    offeringsIntro: "Flooring for remodels, additions, basements and whole-house updates.",
    offerings: [
      { title: "Luxury vinyl plank (LVP)", text: "Waterproof, durable and a smart choice for kitchens, mudrooms and basements." },
      { title: "Hardwood flooring", text: "Solid and engineered hardwood installed with the right acclimation for Vermont’s dry winters." },
      { title: "Tile flooring", text: "Porcelain and ceramic tile for bathrooms, entries and kitchens, set on a flat, stiff, crack-resistant base." },
      { title: "Laminate flooring", text: "A budget-friendly wood look for bedrooms, living areas and rentals." },
      { title: "Subfloor repair & leveling", text: "Squeaks, soft spots and dips fixed before new flooring goes down." },
      { title: "Basement flooring", text: "Moisture-tolerant floors and subfloor systems for concrete slabs." },
    ],
    localTitle: "Choosing Flooring for Vermont Homes",
    localBody: [
      "Mud season, snow boots and road salt are hard on floors near the door. For entries and mudrooms we usually recommend tile or a quality LVP that won’t swell when water and salt get tracked in.",
      "Wood floors move with humidity. Vermont’s dry heated winters and humid summers can open gaps or cause cupping if hardwood isn’t acclimated and installed with the right expansion space. We follow the manufacturer’s acclimation and moisture guidelines on every install.",
      "On concrete basement slabs we test for moisture and choose a floor and underlayment that can handle it, instead of installing something that will fail when spring groundwater rises.",
    ],
    processNoun: "Flooring Project",
    process: [consult, quote, { title: "Material selection & delivery", text: "You pick the floor; we order the right quantity with waste factored in and let wood acclimate where needed." }, { title: "Prep & install", text: "Old flooring removed, subfloor repaired and leveled, then the new floor installed with transitions and trim." }, walkthrough],
    costNoun: "New Flooring",
    costIntro: "We quote flooring after measuring and checking the subfloor. Price depends on:",
    costFactors: [
      "Flooring material and grade",
      "Total square footage and number of rooms",
      "Removing and disposing of old flooring",
      "Subfloor repair or leveling needed",
      "Stairs, transitions and trim",
      "Moisture mitigation for basements",
    ],
    faqs: [
      { q: "What’s the best flooring for a Vermont basement?", a: "Luxury vinyl plank and tile handle moisture best on concrete. We test the slab and may recommend a subfloor system for comfort and moisture control." },
      { q: "Is LVP a good choice for mudrooms and kitchens?", a: "Yes. Quality LVP is waterproof and holds up to snow, salt and wet boots better than wood or laminate." },
      { q: "Do you install hardwood floors?", a: "Yes, both solid and engineered hardwood, acclimated to your home before installation." },
      { q: "Can you install flooring over my existing floor?", a: "Sometimes. It depends on what’s there and whether door heights and transitions still work. We’ll tell you during the estimate." },
      { q: "Do you fix squeaky subfloors?", a: "Yes. Squeaks and soft spots get fixed before new flooring goes down." },
      { q: "Where do you install flooring?", a: "Throughout Chittenden County, VT, including Burlington, South Burlington, Essex, Williston, Colchester, Jericho and Underhill." },
    ],
    related: ["kitchen-remodeling", "basement-finishing", "bathroom-remodeling", "drywall"],
    ctaTitle: "Ready for New Floors?",
  },
  "commercial-interiors": {
    slug: "commercial-interiors",
    serviceName: "Commercial Interior Construction",
    image: drywallImg,
    h1: "Commercial Interior Contractor in Burlington & Chittenden County, VT",
    intro:
      "Park Interiors builds out commercial interiors across Burlington, South Burlington, Williston and the rest of Chittenden County: tenant fit-outs, office and retail build-outs, metal stud framing, drywall, acoustical ceilings, paint and flooring. We’re a licensed and insured contractor that keeps the schedule tight so your space opens on time.",
    offeringsTitle: "Commercial Interior Services",
    offeringsIntro: "Interior construction for offices, retail spaces and other commercial tenants and owners.",
    offerings: [
      { title: "Tenant fit-outs & improvements", text: "Turning a vacant or second-generation space into a finished office, shop or studio, built to the lease drawings and the landlord’s work letter." },
      { title: "Office build-outs", text: "Private offices, conference rooms, break rooms and open work areas, framed, finished and ready for furniture." },
      { title: "Retail interiors", text: "Sales floors, fitting rooms, stockrooms and back-of-house walls, scheduled around your opening date." },
      { title: "Metal stud framing", text: "Light-gauge steel framing for partitions, soffits and bulkheads, laid out from the plans and ready for inspection." },
      { title: "Drywall & finishing", text: "Hanging, taping and finishing, including fire-rated and sound-rated assemblies where the drawings call for them." },
      { title: "Acoustical (drop) ceilings", text: "Suspended grid and tile ceilings for offices and retail, with layout coordinated around lighting and HVAC." },
    ],
    localTitle: "Commercial Fit-Outs in Chittenden County",
    localBody: [
      "Most commercial interior work around Burlington is tenant improvement: a business signs a lease, and the space has to be built out before opening day. That puts the schedule first. We work from your architect’s or landlord’s drawings and sequence framing, inspections, drywall, ceilings and finishes so they don’t stack up, keeping you updated on the critical path.",
      "Commercial work in Vermont can involve more review than residential, including state fire-safety requirements for buildings used by the public. We build to the approved drawings and coordinate with your design team, electrician and mechanical contractor so inspections go smoothly.",
      "We can work after hours or in phases when a building stays occupied, and we keep dust, noise and deliveries under control so neighboring tenants aren’t disrupted.",
    ],
    processNoun: "Commercial Fit-Out",
    process: [
      { title: "Walkthrough & drawing review", text: "We walk the space, review your drawings and lease requirements, and flag anything that affects cost or schedule." },
      { title: "Itemized bid", text: "A line-by-line price for framing, drywall, ceilings, doors, paint and flooring, with clear exclusions." },
      { title: "Schedule & coordination", text: "A schedule built backward from your opening date, coordinated with the landlord, design team and other trades." },
      { title: "Build", text: "Metal stud framing, inspections, drywall, ceilings, doors and finishes, with regular progress updates." },
      { title: "Punch list & handover", text: "We walk the finished space with you, close out the punch list and hand it over clean and ready to move in." },
    ],
    costNoun: "a Commercial Fit-Out",
    costIntro: "Commercial interiors are priced from the drawings and a site walkthrough. The main cost drivers are:",
    costFactors: [
      "Square footage, and how much of the space needs new walls vs. reusing existing ones",
      "Fire-rated or sound-rated wall assemblies called for in the drawings",
      "Ceiling type: acoustical grid, drywall or open ceiling",
      "After-hours or phased work in an occupied building",
      "Finish level: paint, flooring, doors and hardware",
      "Schedule: compressed timelines need more crew on site",
    ],
    costLink: { to: "/blog/metal-vs-wood-studs", label: "Metal Studs vs. Wood Studs: Cost, Pros and Cons" },
    faqs: [
      { q: "Do you do commercial tenant fit-outs in Burlington?", a: "Yes. We build out office, retail and other commercial interiors across Burlington, South Burlington, Williston and Chittenden County." },
      { q: "Can you work from my architect’s drawings?", a: "Yes. We bid and build from your architect’s or landlord’s drawings and coordinate with your design team." },
      { q: "Do you install acoustical drop ceilings?", a: "Yes. We install suspended grid and tile ceilings and coordinate the layout with lighting and HVAC." },
      { q: "Can you work after hours in an occupied building?", a: "Yes. We can phase work or schedule it after hours to keep neighboring tenants and your business running." },
      { q: "Can you provide a certificate of insurance?", a: "Park Interiors is licensed and insured. Ask and we’ll send a certificate of insurance to your landlord or property manager." },
      { q: "How fast can you start?", a: "It depends on the size of the job and our current schedule. Call 802-777-0951 with your target opening date and we’ll give you a straight answer." },
    ],
    related: ["framing", "drywall", "flooring", "home-renovations"],
    ctaTitle: "Planning a Commercial Build-Out?",
  },
};

// Lightweight display info for pages that live elsewhere but appear in "Related Services".
servicePages["home-addition"] ??= { slug: "home-addition", serviceName: "Home Additions" };
servicePages["home-renovations"] ??= { slug: "home-renovations", serviceName: "Home Renovations" };

export const coreServiceSlugs = [
  "kitchen-remodeling",
  "bathroom-remodeling",
  "basement-finishing",
  "framing",
  "drywall",
  "flooring",
  "commercial-interiors",
];
