// Town pages content. Rendered by src/Components/CityPage.jsx.
import kitchen from "../assets/remodeling/kitchen.webp";
import bathroom from "../assets/remodeling/bathroom.webp";
import basement from "../assets/remodeling/basement.jpg";
import hero1 from "../assets/hero/hero1.webp";
import hero2 from "../assets/hero/hero2.webp";
import hero3 from "../assets/hero/hero3.webp";
import garage from "../assets/addition/garge.webp";
import paint from "../assets/painting/image1.webp";

const permitBase =
  "We handle the permit paperwork, schedule any required inspections, and coordinate licensed electricians and plumbers, so the work is documented when you sell.";
const septicNote =
  "If your home is on a septic system, adding a bedroom can increase the system’s design flow and may require a state wastewater permit. We check this early, before you commit to a floor plan.";

export const cities = {
  "burlington-vt": {
    slug: "burlington-vt",
    name: "Burlington",
    county: "Chittenden County",
    image: kitchen,
    intro:
      "Park Interiors remodels kitchens and bathrooms, finishes basements, builds additions and handles framing, drywall and flooring in homes across Burlington, from the Old North End to the South End and the New North End.",
    local: [
      "Much of Burlington’s housing was built long before modern codes: early-1900s homes in the Hill Section, worker housing and multi-unit buildings in the Old North End, and mid-century capes and ranches in the New North End. Opening a wall in an older Burlington home often turns up balloon framing, knob-and-tube wiring or plaster over lath. We plan for that at the estimate, not halfway through the job.",
      "Space is tight on many city lots, so a lot of Burlington projects are about using the existing footprint better: finishing a basement, reworking a cramped kitchen, or adding a bathroom to a home that only has one. Where an addition makes sense, setbacks and lot coverage usually decide how big it can be.",
      "If your home was built before 1978, painted surfaces may contain lead, and federal rules require lead-safe work practices when they’re disturbed. That’s common in Burlington, and it’s part of how we plan demolition.",
    ],
    serviceNotes: {
      "kitchen-remodeling": "Opening up closed-off kitchens in older Burlington homes, including beams where walls carry load.",
      "bathroom-remodeling": "Adding or updating bathrooms, with subfloor repair under old tubs and toilets.",
      "basement-finishing": "Turning stone- and block-foundation basements into usable space after moisture is handled.",
      drywall: "Replacing failed plaster with drywall built out to match existing trim.",
    },
    projects: [
      { title: "Kitchen remodels in older homes", text: "Opening walls, upgrading wiring and plumbing during the remodel, and leveling out-of-square floors before cabinets go in." },
      { title: "Second bathrooms", text: "Fitting a new full or half bath into an existing floor plan, often under the eaves or off a bedroom." },
      { title: "Basement family rooms", text: "Framing, insulation and drywall in older basements once water and radon have been addressed." },
      { title: "Plaster-to-drywall updates", text: "Replacing cracked plaster ceilings and walls room by room." },
    ],
    permits: [
      "Most remodeling work in Burlington needs a permit through the City’s Department of Permitting & Inspections, and work that changes walls, wiring or plumbing is typically inspected. " + permitBase,
      "Homes in Burlington are generally on city water and sewer, so septic capacity usually isn’t a factor when adding a bedroom or bathroom.",
    ],
    faqs: [
      { q: "Do you work in all Burlington neighborhoods?", a: "Yes, including the Old North End, South End, Hill Section, New North End and downtown, for single-family homes and small multi-unit buildings." },
      { q: "Do I need a permit for a kitchen or bathroom remodel in Burlington?", a: "If the project changes walls, wiring or plumbing, usually yes. Permits go through the City of Burlington’s Department of Permitting & Inspections, and we handle the paperwork." },
      { q: "My Burlington home is over 100 years old. Is that a problem?", a: "No, but it changes the plan. Older homes often need framing, wiring or plaster work once walls are opened. We look for those issues at the estimate and price them up front where we can." },
      { q: "Can you add a bathroom to my Burlington home?", a: "Often, yes. The main questions are where the drain can run and how close it is to existing plumbing. We check that during the free estimate." },
    ],
    nearby: ["south-burlington-vt", "winooski-vt", "colchester-vt", "shelburne-vt", "williston-vt", "essex-junction-vt"],
  },

  "south-burlington-vt": {
    slug: "south-burlington-vt",
    name: "South Burlington",
    county: "Chittenden County",
    image: bathroom,
    intro:
      "Park Interiors is a licensed, insured general contractor serving South Burlington homeowners, with kitchen and bathroom remodels, basement finishing, additions, framing, drywall and flooring.",
    local: [
      "South Burlington’s housing is mostly 1960s through 1990s: ranches, split-levels and colonials, plus a lot of condos and townhomes. Many of these homes are structurally sound but still have their original kitchens and baths, which makes them good candidates for a focused remodel instead of a gut job.",
      "Split-level and raised-ranch homes in particular have lower levels that can be finished into family rooms, offices or guest suites, often without moving much plumbing. That’s one of the most cost-effective ways to add usable space in South Burlington.",
      "For condos and townhomes, we coordinate with your association’s rules on hours, deliveries and what can change inside the unit, so the project doesn’t stall over approvals.",
    ],
    serviceNotes: {
      "bathroom-remodeling": "Updating original 70s–90s bathrooms, including tub-to-shower conversions.",
      "basement-finishing": "Finishing split-level and raised-ranch lower levels into real living space.",
      "kitchen-remodeling": "Opening dated kitchens to living areas and replacing original cabinets.",
      flooring: "Replacing carpet and old vinyl with LVP or hardwood across main floors.",
    },
    projects: [
      { title: "Bathroom updates", text: "Tub-to-shower conversions and full bath remodels in homes that still have original fixtures." },
      { title: "Lower-level finishing", text: "Family rooms, offices and guest rooms in split-level and raised-ranch homes." },
      { title: "Condo and townhome remodels", text: "Interior kitchens, baths and flooring, coordinated with HOA requirements." },
    ],
    permits: [
      "South Burlington’s Planning & Zoning department handles permits for most additions and many remodels. " + permitBase,
      "Most South Burlington homes are on municipal sewer. If yours is on septic, a bedroom addition may need a state wastewater permit, and we’ll check before planning.",
    ],
    faqs: [
      { q: "Do you remodel condos and townhomes in South Burlington?", a: "Yes. We remodel kitchens, bathrooms and flooring inside units and coordinate with your HOA on hours, deliveries and approvals." },
      { q: "Can you finish the lower level of my split-level home?", a: "Yes. Many South Burlington split-levels have lower levels that can become family rooms, offices or guest rooms with framing, insulation, drywall and flooring." },
      { q: "Do I need a permit for an addition in South Burlington?", a: "Yes. Additions require zoning approval and permits through the city. We handle the application." },
      { q: "How soon can you start?", a: "It depends on the season and the size of the job. Call 802-777-0951 and we’ll give you a realistic start window at the estimate." },
    ],
    nearby: ["burlington-vt", "williston-vt", "shelburne-vt", "essex-junction-vt", "winooski-vt", "hinesburg-vt"],
  },

  "essex-vt": {
    slug: "essex-vt",
    name: "Essex",
    county: "Chittenden County",
    image: hero1,
    intro:
      "From Essex Center to the outer neighborhoods, Park Interiors builds home additions, finishes basements and remodels kitchens and bathrooms for homeowners in the Town of Essex, VT.",
    local: [
      "The Town of Essex has plenty of 1970s–2000s colonials, capes and raised ranches on larger lots than you find closer to Burlington. Larger lots mean additions are often realistic here: a mudroom off the garage, a primary suite, or a family room off the kitchen.",
      "Many Essex homes have full basements that were never finished. With moisture handled and proper insulation, they make some of the best-value living space you can add.",
      "Since 2022 the Town of Essex and the City of Essex Junction have been separate municipalities, so permits for your project depend on which side of the line you’re on. We sort that out at the start.",
    ],
    serviceNotes: {
      "home-addition": "Mudrooms, primary suites and family rooms on Essex’s larger lots.",
      "basement-finishing": "Finishing full basements in 1970s–2000s Essex homes.",
      framing: "Structural framing for additions and load-bearing wall changes.",
    },
    projects: [
      { title: "Mudroom and entry additions", text: "A real place for boots, coats and gear, usually off the garage or side door." },
      { title: "Basement finishing", text: "Family rooms, gyms and guest suites in full basements." },
      { title: "Kitchen remodels with layout changes", text: "Removing walls between kitchen and dining or living areas in colonials and capes." },
    ],
    permits: [
      "Projects in the Town of Essex go through the town’s zoning and permitting office. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Is the Town of Essex different from Essex Junction for permits?", a: "Yes. They separated in 2022 and handle permits separately. We confirm which applies to your address." },
      { q: "Can you build a mudroom addition on my Essex home?", a: "Yes. Mudrooms are one of the most practical additions in Vermont, and Essex lots usually have room for one." },
      { q: "Do you finish basements in Essex?", a: "Yes. We assess moisture first, then frame, insulate, drywall and finish." },
      { q: "Do you also work in Essex Junction?", a: "Yes. See our Essex Junction page for details on projects there." },
    ],
    nearby: ["essex-junction-vt", "jericho-vt", "underhill-vt", "colchester-vt", "williston-vt", "milton-vt"],
  },

  "essex-junction-vt": {
    slug: "essex-junction-vt",
    name: "Essex Junction",
    county: "Chittenden County",
    image: hero3,
    intro:
      "Park Interiors remodels kitchens and bathrooms, finishes basements and builds additions for homeowners in the City of Essex Junction, from older homes near Five Corners to postwar neighborhoods.",
    local: [
      "Essex Junction grew up around the railroad, and the streets near Five Corners still have older homes from the early 1900s alongside postwar capes and ranches. Those older homes often need framing, wiring or plaster updates once walls are opened, and we plan for that up front.",
      "Lots in the city are smaller than in the surrounding Town of Essex, so many projects focus on using existing space better: basements, attics, and reworking kitchens and bathrooms.",
      "Essex Junction became its own city in 2022, separate from the Town of Essex, with its own planning and permitting.",
    ],
    serviceNotes: {
      "kitchen-remodeling": "Updating kitchens in older village homes and postwar capes.",
      "basement-finishing": "Finishing basements to add family and guest space on smaller lots.",
      drywall: "Plaster repair and replacement in older Essex Junction homes.",
    },
    projects: [
      { title: "Kitchen and bath remodels", text: "Full remodels in older homes near Five Corners and postwar neighborhoods." },
      { title: "Basement family rooms", text: "Adding usable space without expanding the footprint." },
      { title: "Cape and dormer updates", text: "Making better use of second floors in 1.5-story capes." },
    ],
    permits: [
      "Permits in Essex Junction go through the City of Essex Junction, separate from the Town of Essex. " + permitBase,
      "Homes in Essex Junction are generally on municipal sewer, so septic capacity usually isn’t a factor.",
    ],
    faqs: [
      { q: "Do you work in Essex Junction?", a: "Yes. We remodel kitchens and bathrooms, finish basements and build additions throughout the City of Essex Junction." },
      { q: "Who issues permits in Essex Junction?", a: "The City of Essex Junction. It became a separate city from the Town of Essex in 2022. We handle the paperwork." },
      { q: "Can you work on an older home near Five Corners?", a: "Yes. Older homes often need framing or wiring updates once walls are opened, and we plan for that at the estimate." },
      { q: "What’s the best way to add space on a small Essex Junction lot?", a: "Usually finishing the basement or better use of the second floor. Both add living space without expanding the footprint." },
    ],
    nearby: ["essex-vt", "williston-vt", "winooski-vt", "colchester-vt", "south-burlington-vt", "jericho-vt"],
  },

  "colchester-vt": {
    slug: "colchester-vt",
    name: "Colchester",
    county: "Chittenden County",
    image: garage,
    intro:
      "Park Interiors builds additions, converts camps to year-round homes, finishes basements and remodels kitchens and bathrooms across Colchester, VT, including Malletts Bay.",
    local: [
      "Colchester has a lot of variety: lakefront homes and former seasonal camps around Malletts Bay, established neighborhoods near Colchester village, and newer subdivisions further out. That variety means very different projects from one road to the next.",
      "Converting a seasonal camp into a year-round home is a Colchester specialty. These projects usually mean structural upgrades, insulation and air sealing to modern energy standards, new mechanical systems, and often an addition. We start by assessing what the existing structure can support.",
      "Near the lake, shoreland rules can limit how much you can expand and where. We check what’s allowed before you invest in plans.",
    ],
    serviceNotes: {
      "home-addition": "Additions and year-round conversions for Malletts Bay camps.",
      framing: "Structural upgrades for older camps and cottages.",
      "basement-finishing": "Finishing basements in Colchester’s established neighborhoods.",
    },
    projects: [
      { title: "Camp-to-year-round conversions", text: "Framing, insulation, drywall and finishes to turn a seasonal camp into a full-time home." },
      { title: "Lake home additions", text: "More living space within shoreland and setback limits." },
      { title: "Kitchen and bath remodels", text: "Updates in Colchester’s 1970s–1990s neighborhoods." },
    ],
    permits: [
      "Colchester’s Planning & Zoning office handles permits for additions and major remodels. Lakefront properties may also fall under shoreland protection rules that limit clearing and expansion. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Can you convert my Malletts Bay camp to a year-round home?", a: "Often, yes. We assess the foundation, framing and systems first, then plan insulation, mechanicals and any addition needed. Shoreland rules may limit expansion near the water." },
      { q: "Are there extra rules for building near Lake Champlain?", a: "Yes. Shoreland rules can limit clearing and how close you can build to the water. We check before you invest in plans." },
      { q: "Do I need a septic review for a bedroom addition in Colchester?", a: "If your home is on septic, adding a bedroom can require a state wastewater permit. Many Colchester homes near the bay are on sewer, so we check your address." },
      { q: "Do you work near Saint Michael’s College and Colchester village?", a: "Yes, throughout Colchester." },
    ],
    nearby: ["milton-vt", "essex-vt", "essex-junction-vt", "winooski-vt", "burlington-vt", "fairfax-vt"],
  },

  "shelburne-vt": {
    slug: "shelburne-vt",
    name: "Shelburne",
    county: "Chittenden County",
    image: kitchen,
    intro:
      "Park Interiors remodels kitchens and bathrooms, builds additions and finishes basements for Shelburne homeowners, with careful craftsmanship that fits the town’s older village homes and newer custom houses alike.",
    local: [
      "Shelburne mixes historic homes near the village center with larger homes along Shelburne Bay and newer neighborhoods off Route 7. Many Shelburne projects are about matching what’s already there, from trim profiles to rooflines, so an addition or remodel looks like it was always part of the house.",
      "Kitchen remodels here often go beyond cabinets: opening walls, adding islands, and connecting the kitchen to outdoor living space. Primary-suite additions and aging-in-place bathrooms are also common.",
      "For historic properties, we work around original details instead of erasing them, and we coordinate with any design review your property requires.",
    ],
    serviceNotes: {
      "kitchen-remodeling": "Larger kitchen remodels with islands and layout changes.",
      "home-addition": "Primary suites and additions matched to existing rooflines and trim.",
      "bathroom-remodeling": "Aging-in-place and spa-style primary bathrooms.",
    },
    projects: [
      { title: "Primary suite additions", text: "Main-floor bedroom, bath and closet for aging in place." },
      { title: "Kitchen remodels", text: "Layout changes, islands and finish carpentry that matches the rest of the home." },
      { title: "Bathroom upgrades", text: "Curbless showers, heated floors and accessibility features." },
    ],
    permits: [
      "Shelburne’s planning and zoning office handles permits for additions and many remodels. Properties in historic areas or near the lake may have extra review. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Can you build an addition that matches my Shelburne home?", a: "Yes. We match rooflines, siding, windows and trim so the addition looks original." },
      { q: "Do you work on historic homes in Shelburne village?", a: "Yes. We plan around original details and coordinate with any required design review." },
      { q: "Do you do aging-in-place remodels?", a: "Yes, including main-floor suites, curbless showers, grab-bar blocking and wider doorways." },
      { q: "How do I get started?", a: "Call 802-777-0951 or request a free on-site estimate online." },
    ],
    nearby: ["south-burlington-vt", "burlington-vt", "hinesburg-vt", "williston-vt", "richmond-vt"],
  },

  "jericho-vt": {
    slug: "jericho-vt",
    name: "Jericho",
    county: "Chittenden County",
    image: hero2,
    intro:
      "Park Interiors builds additions, finishes basements and remodels kitchens and bathrooms for homeowners in Jericho, Jericho Center and Riverside, just down the road from our Underhill base.",
    local: [
      "Jericho is close to home for us. Most Jericho properties are on larger rural lots with private wells and septic systems, and many homes have been added onto over the years. That shapes every project, from where an addition can go to how plumbing for a new bathroom gets routed.",
      "Additions are common here: mudrooms for real Vermont winters, family rooms, and in-law suites for multi-generational living. Larger lots usually make the footprint easy. Septic capacity and setbacks are what we check first.",
      "Basements in Jericho homes range from dry poured concrete to older fieldstone. We assess moisture before anything is finished.",
    ],
    serviceNotes: {
      "home-addition": "Mudrooms, family rooms and in-law suites on Jericho’s larger lots.",
      "basement-finishing": "Finishing basements once moisture is assessed and handled.",
      framing: "Additions and structural framing built for Vermont snow loads.",
    },
    projects: [
      { title: "In-law suites", text: "Living space with a bath, sometimes a kitchenette, for family members." },
      { title: "Mudroom additions", text: "A dedicated entry for snow, mud and gear." },
      { title: "Kitchen remodels", text: "Updating kitchens in farmhouses and 1970s–90s homes." },
    ],
    permits: [
      "Jericho’s zoning office handles permits for additions and many changes to a home. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Is Park Interiors local to Jericho?", a: "Yes. We’re based in neighboring Underhill and work throughout Jericho, Jericho Center and Riverside." },
      { q: "Will adding a bedroom affect my septic system?", a: "It can. Adding a bedroom increases a septic system’s design flow, and Vermont may require a wastewater permit. We check this before you finalize plans." },
      { q: "Do you build in-law suites?", a: "Yes, as additions or by finishing an existing basement or garage space." },
      { q: "Do you work on older farmhouses?", a: "Yes. We plan for the framing, wiring and level issues older farmhouses often have." },
    ],
    nearby: ["underhill-vt", "essex-vt", "richmond-vt", "essex-junction-vt", "williston-vt"],
  },

  "underhill-vt": {
    slug: "underhill-vt",
    name: "Underhill",
    county: "Chittenden County",
    image: hero1,
    intro:
      "Underhill is home base for Park Interiors. We build additions, finish basements and remodel kitchens and bathrooms for our neighbors in Underhill Flats, Underhill Center and all along the foot of Mount Mansfield.",
    local: [
      "Building in Underhill means building for real winter. Many homes sit on rural lots with steep driveways, private wells and septic systems, and heavy snow. Additions here need roof framing designed for the snow load and a plan for staging materials when access is tight.",
      "A lot of Underhill homes started as camps, farmhouses or modest capes and have grown over time. We often tie new work into several generations of earlier additions, which means checking framing, rooflines and foundations carefully before we design.",
      "Because we’re local, we can usually get out for an estimate quickly and keep a close eye on the job.",
    ],
    serviceNotes: {
      "home-addition": "Additions framed for mountain snow loads and tied cleanly into older structures.",
      "basement-finishing": "Basement finishing with moisture and radon handled first.",
      framing: "Structural framing and repairs for older Underhill homes.",
      flooring: "Durable floors for mudrooms and entries that see snow and mud.",
    },
    projects: [
      { title: "Additions for growing families", text: "Bedrooms, family rooms and mudrooms on rural Underhill lots." },
      { title: "Farmhouse and camp updates", text: "Leveling floors, reframing and modernizing kitchens and baths." },
      { title: "Mudroom and entry upgrades", text: "Tile or LVP floors, storage and better entries for winter." },
    ],
    permits: [
      "Underhill’s zoning administrator handles permits for additions and many structural changes. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Is Park Interiors based in Underhill?", a: "Yes. Underhill is our home base, and we work throughout Underhill Flats, Underhill Center and nearby towns." },
      { q: "Can you build an addition on a steep or tight Underhill lot?", a: "Usually. Access and staging affect cost and scheduling, so we look at the site during the free estimate." },
      { q: "Will my septic system limit an addition?", a: "If you’re adding a bedroom, it may. We check septic capacity and permit needs early." },
      { q: "Do you work through the winter?", a: "Interior work like basements, kitchens and bathrooms continues year-round. Foundations and exterior work are best planned for the warmer months." },
    ],
    nearby: ["jericho-vt", "essex-vt", "richmond-vt", "fairfax-vt", "essex-junction-vt"],
  },

  "milton-vt": {
    slug: "milton-vt",
    name: "Milton",
    county: "Chittenden County",
    image: basement,
    intro:
      "Park Interiors finishes basements, builds additions and remodels kitchens and bathrooms for homeowners across Milton, VT, from the village to the neighborhoods near Arrowhead Mountain Lake and the Lake Champlain shore.",
    local: [
      "Milton has grown a lot, with newer subdivisions alongside older homes in the village and rural properties toward the lake. Many newer Milton homes have unfinished basements, which are the most affordable way to add a family room, office or guest space.",
      "For growing families, additions over a garage or off the back of the house are common. We frame, insulate, drywall and finish so the new space matches the rest of the home.",
      "Homes near the lake and in rural parts of town are more likely to be on septic, which matters for bedroom additions.",
    ],
    serviceNotes: {
      "basement-finishing": "Finishing basements in Milton’s newer subdivisions.",
      "home-addition": "Additions over garages and off the back of the house.",
      flooring: "LVP and tile for busy family homes.",
    },
    projects: [
      { title: "Basement finishing", text: "Family rooms, offices and playrooms in newer Milton homes." },
      { title: "Bonus rooms over garages", text: "Framing and finishing space above attached garages." },
      { title: "Kitchen updates", text: "New cabinets, counters and flooring in builder-grade kitchens." },
    ],
    permits: [
      "Milton’s planning and zoning department handles permits for additions and many remodels. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Do you finish basements in Milton?", a: "Yes. It’s one of our most common Milton projects, and usually the most cost-effective way to add space." },
      { q: "Can you finish the space over my garage?", a: "Often, yes, depending on roof framing, headroom and access. We check during the estimate." },
      { q: "Do you serve Milton village and the lake areas?", a: "Yes, all of Milton." },
      { q: "How do I get a quote?", a: "Call 802-777-0951 or request a free estimate online." },
    ],
    nearby: ["colchester-vt", "fairfax-vt", "essex-vt", "essex-junction-vt", "burlington-vt"],
  },

  "richmond-vt": {
    slug: "richmond-vt",
    name: "Richmond",
    county: "Chittenden County",
    image: paint,
    intro:
      "Park Interiors remodels kitchens and bathrooms, builds additions and finishes basements for homeowners in Richmond, VT, from the village along the Winooski River to the hill roads above it.",
    local: [
      "Richmond combines an older village center, home of the Old Round Church, with rural homes on larger lots in the hills. Village homes often date back generations and come with the framing and wiring surprises that go with that, while hill homes bring wells, septic and longer driveways.",
      "Properties near the Winooski River may fall under floodplain rules, which can affect basement finishing and additions. We check flood-hazard mapping for your property before planning work below grade.",
      "Kitchen and bathroom remodels, mudroom additions and basement finishing in drier locations are the projects we see most here.",
    ],
    serviceNotes: {
      "basement-finishing": "Basement finishing after checking floodplain status and moisture.",
      "kitchen-remodeling": "Kitchen updates in village homes and farmhouses.",
      "home-addition": "Mudrooms and family rooms on Richmond’s rural lots.",
    },
    projects: [
      { title: "Village home renovations", text: "Kitchens, baths and plaster-to-drywall updates in older homes." },
      { title: "Mudroom additions", text: "Practical entries for rural Vermont living." },
      { title: "Basement finishing", text: "For homes outside flood-prone areas, with moisture handled first." },
    ],
    permits: [
      "Richmond’s zoning office handles permits for additions and many remodels, and properties in mapped flood-hazard areas may have extra requirements. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Can I finish my basement if I live near the Winooski River?", a: "It depends on your property’s flood-hazard status. Floodplain rules can limit finishing below grade, so we check before planning." },
      { q: "Do you work on older homes in Richmond village?", a: "Yes. We plan for the framing, wiring and plaster issues that come with older homes." },
      { q: "Do you build additions in Richmond?", a: "Yes, including mudrooms, family rooms and in-law space." },
      { q: "How far do you travel?", a: "Richmond is well within our service area. We’re based in nearby Underhill." },
    ],
    nearby: ["jericho-vt", "williston-vt", "hinesburg-vt", "underhill-vt", "south-burlington-vt"],
  },

  "hinesburg-vt": {
    slug: "hinesburg-vt",
    name: "Hinesburg",
    county: "Chittenden County",
    image: hero3,
    intro:
      "Park Interiors builds additions, finishes basements and remodels kitchens and bathrooms for homeowners in Hinesburg, VT, from the village along Route 116 to homes near Lake Iroquois.",
    local: [
      "Hinesburg is a mix of village homes along Route 116, newer neighborhoods near the village, and rural properties with larger lots, wells and septic. Rural lots make additions practical, and septic capacity is the first thing to check for a bedroom addition.",
      "Many Hinesburg homes have basements and attics that can be turned into living space, often a better-value option than building out.",
      "Kitchen and bathroom remodels, mudrooms and basement family rooms are the projects we see most often here.",
    ],
    serviceNotes: {
      "home-addition": "Additions on Hinesburg’s rural lots, with septic checked first.",
      "basement-finishing": "Basement finishing in village and rural homes.",
      "bathroom-remodeling": "Bathroom remodels and tub-to-shower conversions.",
    },
    projects: [
      { title: "Family room additions", text: "More living space on larger rural lots." },
      { title: "Basement finishing", text: "Rec rooms, offices and guest rooms." },
      { title: "Kitchen remodels", text: "Updated layouts, cabinets and flooring." },
    ],
    permits: [
      "Hinesburg’s planning and zoning office handles permits for additions and many remodels. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Do you work in Hinesburg?", a: "Yes, in the village and throughout town, including areas near Lake Iroquois." },
      { q: "Will my septic system affect a bedroom addition?", a: "It can. Adding a bedroom may require a state wastewater permit. We check early." },
      { q: "Is finishing my basement cheaper than an addition?", a: "Usually, yes, per square foot. We can price both so you can compare." },
      { q: "How do I get started?", a: "Call 802-777-0951 or request a free on-site estimate." },
    ],
    nearby: ["shelburne-vt", "williston-vt", "richmond-vt", "south-burlington-vt"],
  },

  "fairfax-vt": {
    slug: "fairfax-vt",
    name: "Fairfax",
    county: "Franklin County",
    image: garage,
    intro:
      "Park Interiors builds additions, finishes basements and remodels kitchens and bathrooms for homeowners in Fairfax, VT, just north of the Chittenden County line along the Lamoille River.",
    local: [
      "Fairfax has grown as more families commute toward Burlington, so you’ll find newer homes on larger lots next to older farmhouses and village homes. Newer homes often have unfinished basements and bonus space over garages, which are both great value for adding room.",
      "Most Fairfax homes are on private wells and septic, which matters for bedroom additions and new bathrooms. We check septic capacity and permit needs before you commit to a plan.",
      "Mudrooms, basement family rooms and kitchen updates are the most common projects we see here.",
    ],
    serviceNotes: {
      "basement-finishing": "Finishing basements in Fairfax’s newer homes.",
      "home-addition": "Mudrooms, bedrooms and garage additions on larger lots.",
      "kitchen-remodeling": "Kitchen updates in farmhouses and newer builds.",
    },
    projects: [
      { title: "Basement finishing", text: "Family rooms and guest space in newer Fairfax homes." },
      { title: "Garage and bonus-room additions", text: "More storage and living space on larger lots." },
      { title: "Farmhouse updates", text: "Kitchens, baths and structural repairs in older homes." },
    ],
    permits: [
      "Fairfax’s zoning office handles permits for additions and many changes to a home. " + permitBase,
      septicNote,
    ],
    faqs: [
      { q: "Do you work in Fairfax even though it’s in Franklin County?", a: "Yes. Fairfax is well within our service area." },
      { q: "Will my septic system limit a bedroom addition?", a: "It may. Adding a bedroom can require a state wastewater permit. We check before you finalize plans." },
      { q: "Can you finish the space over my garage?", a: "Often, depending on roof framing and headroom. We check during the estimate." },
      { q: "How do I get a quote?", a: "Call 802-777-0951 or request a free estimate online." },
    ],
    nearby: ["milton-vt", "colchester-vt", "underhill-vt", "essex-vt", "jericho-vt"],
  },

  "williston-vt": {
    slug: "williston-vt",
    name: "Williston",
    county: "Chittenden County",
    image: bathroom,
    intro:
      "Park Interiors remodels kitchens and bathrooms, finishes basements and builds additions for homeowners across Williston, VT, from the historic village to the neighborhoods around Taft Corners.",
    local: [
      "Williston grew quickly from the 1980s on, so much of its housing is colonials, capes and townhomes from the last few decades, along with older homes in Williston Village. Many of those homes now have original kitchens and baths ready for an update.",
      "Plenty of Williston homes have full unfinished basements, which make the most affordable family rooms, offices and guest suites.",
      "For townhomes and condos, we coordinate with association rules on hours, deliveries and allowed changes.",
    ],
    serviceNotes: {
      "kitchen-remodeling": "Updating 1990s–2000s kitchens with new layouts and finishes.",
      "bathroom-remodeling": "Primary bath remodels and tub-to-shower conversions.",
      "basement-finishing": "Finishing full basements into living space.",
    },
    projects: [
      { title: "Kitchen remodels", text: "Replacing builder-grade kitchens with better layouts, cabinets and counters." },
      { title: "Primary bathroom upgrades", text: "Walk-in tile showers, double vanities and better ventilation." },
      { title: "Basement finishing", text: "Family rooms, gyms and guest suites." },
    ],
    permits: [
      "Williston’s Planning & Zoning department handles permits for additions and many remodels. " + permitBase,
      "Homes in Williston’s growth center are generally on municipal sewer. Homes outside it may be on septic, which matters for bedroom additions.",
    ],
    faqs: [
      { q: "Do you work in Williston?", a: "Yes, throughout Williston, including the village and the Taft Corners area." },
      { q: "Can you remodel my townhome kitchen?", a: "Yes. We coordinate with your association on approvals and work hours." },
      { q: "Do you finish basements in Williston?", a: "Yes. Many Williston homes have full basements ready to finish." },
      { q: "How do I get started?", a: "Call 802-777-0951 or request a free on-site estimate." },
    ],
    nearby: ["south-burlington-vt", "essex-junction-vt", "richmond-vt", "hinesburg-vt", "essex-vt", "shelburne-vt"],
  },

  "winooski-vt": {
    slug: "winooski-vt",
    name: "Winooski",
    county: "Chittenden County",
    image: paint,
    intro:
      "Park Interiors remodels kitchens and bathrooms, updates older multi-unit homes and handles framing, drywall and flooring in Winooski, VT, one of Chittenden County’s most compact and walkable cities.",
    local: [
      "Winooski is small and dense, built around the old mills on the Winooski River. Much of its housing is older single-family homes and multi-unit buildings, many built long before modern codes. Remodels here often mean updating framing, wiring and plumbing along with the finishes.",
      "Lots are tight, so most projects focus on making better use of existing space: reworking kitchens, adding or updating bathrooms, finishing basements where they’re dry enough, and replacing tired plaster and flooring.",
      "For owners of 2- to 4-unit buildings, we can phase work unit by unit to keep tenants housed and income flowing.",
    ],
    serviceNotes: {
      "kitchen-remodeling": "Kitchen remodels in older single-family and multi-unit homes.",
      "bathroom-remodeling": "Bathroom updates with subfloor and framing repairs.",
      drywall: "Plaster replacement and drywall repair in older buildings.",
      flooring: "Durable flooring for owner-occupied homes and rental units.",
    },
    projects: [
      { title: "Unit turnovers and updates", text: "Kitchens, baths, drywall and flooring in multi-unit buildings." },
      { title: "Older-home kitchen remodels", text: "Opening layouts and upgrading systems in the process." },
      { title: "Bathroom renovations", text: "Fixing rotted subfloors and adding proper ventilation." },
    ],
    permits: [
      "Permits in Winooski go through the city’s planning and zoning office. Work on rental units may also involve rental housing rules. " + permitBase,
      "Homes in Winooski are on municipal water and sewer, so septic isn’t a factor.",
    ],
    faqs: [
      { q: "Do you work on multi-unit buildings in Winooski?", a: "Yes. We remodel kitchens, baths and flooring in 2- to 4-unit buildings and can phase work to keep units rented." },
      { q: "Can you replace old plaster walls?", a: "Yes. We remove or skim failing plaster and replace it with drywall built out to match existing trim." },
      { q: "Do I need a permit for a remodel in Winooski?", a: "Projects that change walls, wiring or plumbing usually do. We handle the paperwork." },
      { q: "How do I get a quote?", a: "Call 802-777-0951 or request a free estimate online." },
    ],
    nearby: ["burlington-vt", "colchester-vt", "essex-junction-vt", "south-burlington-vt"],
  },
};

export const citySlugs = Object.keys(cities);
