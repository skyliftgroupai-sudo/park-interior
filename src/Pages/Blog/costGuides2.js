// Cost guides, batch 2 (Nov 2026). Figures are cited national ranges, not Park Interiors quotes.
import sunroomHero from "../../assets/hero/hero3.webp";
import garageHero from "../../assets/addition/garge.webp";
import mudroomHero from "../../assets/hero/hero1.webp";
import inlawHero from "../../assets/addition/room.avif";
import studsHero from "../../assets/painting/image1.webp";

const date = { date: "November 10, 2026", isoDate: "2026-11-10", author: "Park Interiors" };

const cta = (service, url) => ({
    type: "p",
    text: `Cost guides get you in the ballpark. A site visit gets you a real number. Park Interiors is a licensed and insured general contractor building ${service} across Burlington, Essex, Williston, Jericho, Underhill and the rest of Chittenden County. Call 802-777-0951 or request a free estimate online.`,
    links: [
        { text: service, url },
        { text: "request a free estimate online", url: "/contact-us" },
    ],
});

const costGuides2 = [
    // ---------------------------------------------------------------- SUNROOM
    {
        slug: "sunroom-addition-cost-vermont",
        title: "Sunroom Addition Cost in Vermont (2026): Three-Season vs. Four-Season",
        image: sunroomHero,
        ...date,
        category: "Home Additions",
        readTime: "7 min read",
        seo: {
            metaTitle: "Sunroom Addition Cost in Vermont (2026): 3-Season vs 4-Season",
            metaDescription:
                "What a sunroom addition costs in Vermont in 2026: per-square-foot ranges for three-season and four-season rooms, real examples, and why Vermont winters change the math.",
        },
        excerpt: "Three-season vs. four-season sunroom costs, worked examples, and why a Vermont sunroom usually needs to be built like a real addition.",
        content: [
            {
                type: "p",
                text: "Short answer: a custom-built four-season sunroom typically costs about $200 to $400 per square foot installed, so a 200-square-foot room usually lands somewhere around $25,000 to $60,000 according to Block Renovation’s 2026 guide. Three-season rooms cost less, but in Vermont they sit unused for a good part of the year. Here’s how to decide, and what drives the price.",
            },
            { type: "h2", text: "Three-Season vs. Four-Season Sunrooms" },
            {
                type: "table",
                head: ["", "Three-season room", "Four-season room"],
                rows: [
                    ["Insulation", "Little or none", "Insulated floor, walls and roof"],
                    ["Windows", "Single-pane or screens", "Insulated, energy-rated glass"],
                    ["Heat", "None, or a space heater", "Heat pump or extension of your system"],
                    ["Usable in a Vermont January", "No", "Yes"],
                    ["Typical installed cost", "Lower", "About $200–$400 per sq ft"],
                ],
                caption: "Four-season range from Block Renovation’s 2026 four-season room guide. National figures; your project will vary.",
            },
            {
                type: "p",
                text: "In much of the country a three-season room is a reasonable middle ground. In Chittenden County, a three-season room is closer to a covered porch with windows: great from May to October, and too cold to use from roughly November through March. If you want a room you’ll use every day, plan for a four-season room built to the same energy standards as a home addition.",
                links: [{ text: "home addition", url: "/home-addition" }],
            },
            { type: "h2", text: "What a Sunroom Costs in Real Numbers" },
            {
                type: "ul",
                items: [
                    "12' × 12' four-season room (144 sq ft) at $200–$400 per sq ft: roughly $29,000 to $58,000.",
                    "14' × 16' four-season room (224 sq ft) at $200–$400 per sq ft: roughly $45,000 to $90,000.",
                    "Converting an existing deck or porch can cost less if the existing structure can carry the new walls and roof, which needs to be checked first.",
                ],
            },
            { type: "h2", text: "Vermont Factors That Change the Price" },
            { type: "h3", text: "Foundation" },
            {
                type: "p",
                text: "A four-season room needs a real foundation that won’t heave with frost. Frost walls or a full foundation cost more than posts or a slab, but they keep floors level and doors working through freeze-thaw cycles.",
            },
            { type: "h3", text: "Snow load and roof" },
            {
                type: "p",
                text: "Glass and low-slope sunroom roofs have to carry Vermont snow. Roof framing sized for local snow loads, and a clean tie-in to your existing roof, prevent leaks and ice dams where the two meet.",
                links: [{ text: "Roof framing", url: "/framing" }],
            },
            { type: "h3", text: "Energy code and heating" },
            {
                type: "p",
                text: "A conditioned sunroom is part of the house, so it has to meet Vermont’s Residential Building Energy Standards (RBES). Lots of glass makes that harder, which is why window quality matters so much. Many homeowners heat and cool a sunroom with a ductless heat pump; check Efficiency Vermont for current incentives.",
            },
            { type: "h2", text: "Is a Sunroom Worth It?" },
            {
                type: "p",
                text: "If you want bright, year-round living space with a view, a well-built four-season sunroom is one of the most enjoyable additions you can make. If you mainly want more room and don’t care about all that glass, a standard family-room addition or finishing your basement may give you more space for the money.",
                links: [
                    { text: "finishing your basement", url: "/basement-finishing" },
                ],
            },
            { type: "h2", text: "Get a Price for Your Sunroom" },
            cta("sunrooms and home additions", "/home-addition"),
            { type: "h3", text: "Sources" },
            {
                type: "ul",
                items: ["Block Renovation, Four Season Room Addition: Cost and Design (2026)"],
                links: [{ text: "Block Renovation, Four Season Room Addition: Cost and Design (2026)", url: "https://www.blockrenovation.com/guides/four-season-room-addition-cost-design-guide-2026" }],
            },
        ],
        faqs: [
            { question: "How much does a 12x12 sunroom cost?", answer: "At about $200–$400 per square foot for a four-season room, a 12' × 12' (144 sq ft) sunroom typically runs roughly $29,000 to $58,000. A three-season room costs less but isn’t usable through a Vermont winter." },
            { question: "Can I use a three-season room in winter in Vermont?", answer: "Not comfortably. Without insulation, insulated glass and heat, a three-season room gets too cold from about November through March." },
            { question: "Do I need a permit for a sunroom?", answer: "Yes, in almost every Vermont town. A sunroom is an addition, so expect zoning and building review." },
            { question: "Can you turn my deck into a sunroom?", answer: "Sometimes. The deck’s footings and framing have to be able to carry walls, a roof and snow load. We check that before recommending it." },
        ],
    },

    // ---------------------------------------------------------------- GARAGE
    {
        slug: "garage-addition-cost-vermont",
        title: "Garage Addition Cost in Vermont (2026): Attached, Detached and Bonus Rooms",
        image: garageHero,
        ...date,
        category: "Home Additions",
        readTime: "7 min read",
        seo: {
            metaTitle: "Garage Addition Cost in Vermont (2026): 1-Car, 2-Car & Bonus Room",
            metaDescription:
                "What an attached or detached garage addition costs in Vermont in 2026, what a 2-car garage runs, and the Vermont factors (frost, snow, finishing) that change the price.",
        },
        excerpt: "What a one- or two-car garage addition costs, attached vs. detached, and what it takes to add a finished room above.",
        content: [
            {
                type: "p",
                text: "Short answer: an attached two-car garage addition typically costs about $23,000 to $45,000 nationally, with Fixr putting the average around $37,000 for a 24' × 24' garage with an unfinished interior. Trusscore’s 2026 guide puts a standard two-car garage at roughly $35,000 to $50,000, or $45 to $75 per square foot. Finished interiors, heat and a room above all push the number higher.",
            },
            { type: "h2", text: "Garage Addition Costs at a Glance" },
            {
                type: "table",
                head: ["Garage type", "Typical cost", "Source"],
                rows: [
                    ["1-car attached (conventional)", "About $14,400 – $19,200", "Fixr"],
                    ["2-car attached (conventional)", "About $24,000 – $46,080", "Fixr"],
                    ["2-car garage, 24' × 24'", "About $35,000 – $50,000", "Trusscore (2026)"],
                    ["Cost per square foot", "About $45 – $75", "Trusscore (2026)"],
                ],
                caption: "National figures for unfinished garages unless noted. Finishing, heat and living space above add cost.",
            },
            { type: "h2", text: "Attached vs. Detached" },
            {
                type: "p",
                text: "An attached garage shares a wall with the house, which saves on one wall and makes winter mornings a lot easier: no scraping, no walking through snow. It also means tying into your existing roof and siding, plus fire-separation requirements between the garage and living space. A detached garage avoids the roof tie-in but needs four full walls, and it may face different setback rules.",
            },
            { type: "h2", text: "Adding a Bonus Room or Apartment Above" },
            {
                type: "p",
                text: "Building living space over a new garage is often cheaper per square foot than a separate addition, because the foundation and roof are already in the budget. The space above needs proper stairs, insulation, heat, egress and fire separation from the garage below. If it includes a kitchen and bath, it may count as an accessory dwelling unit (ADU), which Vermont has made easier to permit.",
                links: [{ text: "accessory dwelling unit (ADU)", url: "/blog/in-law-suite-addition-cost-vermont" }],
            },
            { type: "h2", text: "Vermont Factors That Change the Price" },
            {
                type: "ul",
                items: [
                    "Frost-protected foundation: garage footings and frost walls have to go below Vermont’s deep frost line, or be designed to resist frost heave.",
                    "Snow load: wide garage spans need roof framing sized for local snow loads, especially if you want few or no interior posts.",
                    "Insulation and heat: an unheated garage is fine for cars, but a workshop or room above needs insulation, air sealing and a heat source.",
                    "Site work: sloped lots, ledge and long driveways are common in towns like Jericho, Underhill and Richmond and add excavation cost.",
                    "Permits and setbacks: every town sets its own setbacks, which often decide where a garage can go.",
                ],
                links: [{ text: "roof framing", url: "/framing" }],
            },
            { type: "h2", text: "Ways to Save" },
            {
                type: "ul",
                items: [
                    "Keep the roofline simple and match the existing pitch.",
                    "Leave the interior unfinished now, but frame and insulate for finishing later.",
                    "If you might want a room above later, frame the roof and floor for it now. That costs far less than retrofitting.",
                ],
            },
            { type: "h2", text: "Get a Price for Your Garage" },
            cta("garage additions", "/home-addition"),
            { type: "h3", text: "Sources" },
            {
                type: "ul",
                items: [
                    "Fixr, Cost to Build an Attached Garage",
                    "Trusscore, How Much Does It Cost to Build a Garage? 2026 Price Guide",
                ],
                links: [
                    { text: "Fixr, Cost to Build an Attached Garage", url: "https://www.fixr.com/costs/build-attached-garage" },
                    { text: "Trusscore, How Much Does It Cost to Build a Garage? 2026 Price Guide", url: "https://trusscore.com/blog/how-much-does-it-cost-to-build-a-garage.html" },
                ],
            },
        ],
        faqs: [
            { question: "How much does a 2-car garage addition cost?", answer: "Nationally, about $24,000 to $46,000 for a conventionally built, unfinished attached two-car garage (Fixr), and about $35,000 to $50,000 for a 24' × 24' garage per Trusscore’s 2026 guide. Finishing and a room above add more." },
            { question: "Is an attached or detached garage cheaper?", answer: "Attached garages often cost less because they share a wall with the house, but the roof tie-in and fire separation add some cost back. Site and setbacks usually decide." },
            { question: "Can you build a room over my new garage?", answer: "Yes. Planning it from the start is the most cost-effective way, since the roof and floor framing can be designed for living space." },
            { question: "Do I need a permit for a garage in Vermont?", answer: "Yes. Expect a zoning permit at minimum, and town setbacks will affect where it can go." },
        ],
    },

    // ---------------------------------------------------------------- MUDROOM
    {
        slug: "mudroom-addition-cost-vermont",
        title: "Mudroom Addition Cost in Vermont (2026): The Most Practical Room for Mud Season",
        image: mudroomHero,
        ...date,
        category: "Home Additions",
        readTime: "6 min read",
        seo: {
            metaTitle: "Mudroom Addition Cost in Vermont (2026) | Built for Mud Season",
            metaDescription:
                "What a mudroom addition costs in 2026, bump-out vs. conversion, and how to build one that handles Vermont snow, salt and mud season.",
        },
        excerpt: "What a mudroom addition costs, conversion vs. bump-out, and the details that make a mudroom survive Vermont winters.",
        content: [
            {
                type: "p",
                text: "Short answer: HomeAdvisor puts a typical mudroom addition at $6,500 to $18,000, with an average around $12,000, or roughly $100 to $300 per square foot. Fixr’s national average is about $14,500 for a 60-square-foot mudroom with built-in cubbies, new flooring and a baseboard heater. A larger bump-out that extends an exterior wall runs higher; Block Renovation puts those at around $15,000 to $25,000.",
            },
            { type: "h2", text: "Why Mudrooms Make So Much Sense in Vermont" },
            {
                type: "p",
                text: "Between snow, road salt and mud season, Vermont entries take a beating. A real mudroom keeps wet boots, coats, dog gear and sports bags out of the rest of the house, and it acts as an airlock that keeps cold air from rushing in every time the door opens.",
            },
            { type: "h2", text: "Conversion vs. Addition" },
            {
                type: "table",
                head: ["Approach", "Typical cost", "Best when"],
                rows: [
                    ["Convert existing space (entry, laundry, part of garage)", "Lower, roughly $50–$100 per sq ft (Angi)", "You have an entry or garage corner you can give up"],
                    ["Mudroom addition", "About $6,500 – $18,000; average ~$12,000 (HomeAdvisor)", "You need new square footage at the busiest door"],
                    ["Mudroom bump-out", "About $15,000 – $25,000 (Block Renovation)", "Extending an exterior wall with built-ins and lighting"],
                ],
                caption: "National figures. Your project will vary.",
            },
            { type: "h2", text: "Build It for Snow, Salt and Mud" },
            {
                type: "ul",
                items: [
                    "Flooring: porcelain tile or a quality waterproof LVP. Skip hardwood and laminate at the door.",
                    "Drainage: boot trays, or in bigger projects a floor drain or a recessed boot grate.",
                    "Heat: radiant floor heat or a baseboard heater dries gear overnight.",
                    "Storage: open cubbies with hooks and a bench, plus closed cabinets for the clutter you don’t want to see.",
                    "Durable walls: semi-gloss paint or wainscoting where wet gear rubs.",
                    "A second door or a vestibule layout to keep cold air out of the house.",
                ],
                links: [{ text: "porcelain tile or a quality waterproof LVP", url: "/flooring" }],
            },
            { type: "h2", text: "What Drives the Price" },
            {
                type: "ul",
                items: [
                    "New foundation and roof (addition) vs. working inside the existing house (conversion)",
                    "Size: most mudrooms are under 120 square feet",
                    "Custom built-ins vs. simple hooks and a bench",
                    "Adding laundry, a sink or a half bath, which brings in plumbing",
                    "Heat and electrical",
                ],
            },
            { type: "h2", text: "Get a Price for Your Mudroom" },
            cta("mudroom additions", "/home-addition"),
            { type: "h3", text: "Sources" },
            {
                type: "ul",
                items: [
                    "HomeAdvisor, How Much Does a Mudroom Addition Cost?",
                    "Fixr, How Much Does It Cost to Add a Mudroom?",
                    "Angi, Mudroom Addition Cost",
                    "Block Renovation, Custom Mudroom Additions: Costs & Design Ideas",
                ],
                links: [
                    { text: "HomeAdvisor, How Much Does a Mudroom Addition Cost?", url: "https://www.homeadvisor.com/cost/additions-and-remodels/mudroom" },
                    { text: "Fixr, How Much Does It Cost to Add a Mudroom?", url: "https://www.fixr.com/costs/mudroom-addition" },
                    { text: "Angi, Mudroom Addition Cost", url: "https://www.angi.com/articles/mudroom-addition-cost.htm" },
                    { text: "Block Renovation, Custom Mudroom Additions: Costs & Design Ideas", url: "https://www.blockrenovation.com/guides/custom-mudroom-additions-costs-design-ideas" },
                ],
            },
        ],
        faqs: [
            { question: "How much does a mudroom addition cost?", answer: "HomeAdvisor puts most mudroom additions at $6,500 to $18,000, averaging about $12,000. Fixr’s average is about $14,500 for a 60-square-foot room with built-ins, flooring and a heater." },
            { question: "What’s the best mudroom flooring for Vermont?", answer: "Porcelain tile or a quality waterproof luxury vinyl plank. Both handle snowmelt and road salt far better than wood or laminate." },
            { question: "Can I add a mudroom without an addition?", answer: "Often, yes, by converting an entry, part of a laundry room or a corner of an attached garage. It costs less but takes space from somewhere else." },
            { question: "Do I need a permit for a mudroom addition?", answer: "If it adds square footage or changes the footprint, yes. Interior conversions may need fewer approvals, depending on the town and scope." },
        ],
    },

    // ---------------------------------------------------------------- IN-LAW SUITE
    {
        slug: "in-law-suite-addition-cost-vermont",
        title: "In-Law Suite & ADU Cost in Vermont (2026): What to Budget and What the Rules Allow",
        image: inlawHero,
        ...date,
        category: "Home Additions",
        readTime: "8 min read",
        seo: {
            metaTitle: "In-Law Suite & ADU Cost in Vermont (2026) + Vermont ADU Rules",
            metaDescription:
                "What an in-law suite or accessory dwelling unit costs in 2026, conversion vs. addition, and what Vermont’s HOME Act (Act 47) allows for ADUs on single-family lots.",
        },
        excerpt: "In-law suite and ADU costs, conversion vs. addition, and what Vermont’s 2023 HOME Act changed for homeowners.",
        content: [
            {
                type: "p",
                text: "Short answer: HomeAdvisor puts in-law suite additions anywhere from $25,000 to $265,000, with most homeowners spending around $82,750, or roughly $100 to $200 per square foot. Converting an existing basement or garage sits at the low end. A larger new addition with its own kitchen, bath and entrance sits at the high end; Block Renovation puts a 600-square-foot in-law suite addition at around $180,000 to $360,000 or more in higher-cost markets.",
            },
            { type: "h2", text: "Three Ways to Add an In-Law Suite" },
            {
                type: "table",
                head: ["Approach", "Relative cost", "Good fit when"],
                rows: [
                    ["Convert a finished basement or bonus room", "Lowest", "The space is dry, has egress, and plumbing is nearby"],
                    ["Convert an attached garage", "Low to moderate", "You can live without the garage bays"],
                    ["Build a new addition", "Highest", "You need main-floor living, accessibility or a private entrance"],
                ],
                caption: "Ranges vary widely with size, kitchen and bath scope, and site conditions.",
            },
            {
                type: "p",
                text: "For aging parents, main-floor living with a curbless shower, wider doorways and no stairs usually matters more than square footage. A smaller, well-planned suite is often more useful than a larger one with stairs.",
                links: [{ text: "curbless shower", url: "/bathroom-remodeling" }],
            },
            { type: "h2", text: "What Vermont’s HOME Act Changed" },
            {
                type: "p",
                text: "Vermont’s 2023 HOME Act (Act 47) made accessory dwelling units much easier to build. State law now requires towns to allow one accessory dwelling unit that is within or attached to a single-family home as a permitted use, subject to the same review as the single-family home itself. An ADU is a distinct unit with its own facilities for sleeping, cooking and sanitation.",
            },
            {
                type: "ul",
                items: [
                    "The property needs sufficient wastewater capacity. On septic, that often means a state wastewater permit review.",
                    "The unit generally can’t exceed 30% of the home’s habitable floor area or 900 square feet, whichever is greater.",
                    "Towns can’t make ADU review stricter than review for the single-family home.",
                ],
            },
            {
                type: "p",
                text: "Local details still vary, and properties in flood-hazard areas can have extra limits, so we confirm the specifics with your town before design. Vermont has also offered grant programs for ADU creation through the Vermont Housing Improvement Program (VHIP), so it’s worth checking what’s currently available.",
            },
            { type: "h2", text: "What Drives the Cost" },
            {
                type: "ul",
                items: [
                    "Kitchen: a full kitchen costs much more than a kitchenette",
                    "Bathroom: new plumbing runs, and whether it’s accessible",
                    "Septic or sewer capacity, and any upgrades required",
                    "Separate entrance, egress windows and fire separation",
                    "Heating: extending your system vs. a dedicated heat pump",
                    "Foundation and roof, if it’s a new addition",
                ],
            },
            { type: "h2", text: "Get a Price for Your In-Law Suite" },
            cta("in-law suites and home additions", "/home-addition"),
            { type: "h3", text: "Sources" },
            {
                type: "ul",
                items: [
                    "HomeAdvisor, How Much Does an In-Law Suite Cost?",
                    "Block Renovation, The 2026 Home Addition Costs Guide",
                    "Vermont Legislature, Act 47 (2023) as enacted",
                ],
                links: [
                    { text: "HomeAdvisor, How Much Does an In-Law Suite Cost?", url: "https://homeadvisor.com/cost/additions-and-remodels/build-in-law-suite" },
                    { text: "Block Renovation, The 2026 Home Addition Costs Guide", url: "https://www.blockrenovation.com/guides/understanding-the-costs-of-a-home-addition" },
                    { text: "Vermont Legislature, Act 47 (2023) as enacted", url: "https://legislature.vermont.gov/Documents/2024/Docs/ACTS/ACT047/ACT047%20As%20Enacted.pdf" },
                ],
            },
        ],
        faqs: [
            { question: "How much does an in-law suite cost?", answer: "HomeAdvisor reports a range of about $25,000 to $265,000, with most homeowners spending around $82,750. Conversions cost less; new additions with a full kitchen and bath cost more." },
            { question: "Can I add an ADU to my home in Vermont?", answer: "In most cases, yes. Under the 2023 HOME Act, towns must allow one ADU within or attached to a single-family home as a permitted use, as long as there’s enough wastewater capacity and the unit meets the size limits." },
            { question: "How big can an ADU be in Vermont?", answer: "Generally no more than 30% of the home’s habitable floor area or 900 square feet, whichever is greater." },
            { question: "Is converting my basement cheaper than an addition?", answer: "Usually, yes, if the basement is dry, has enough ceiling height and can have code-compliant egress." },
        ],
    },

    // ---------------------------------------------------------------- METAL VS WOOD
    {
        slug: "metal-vs-wood-studs",
        title: "Metal Studs vs. Wood Studs: Cost, Pros and Cons (From a Vermont Framer)",
        image: studsHero,
        ...date,
        category: "Framing",
        readTime: "6 min read",
        seo: {
            metaTitle: "Metal Studs vs Wood Studs: Cost, Pros & Cons for Homes & Commercial",
            metaDescription:
                "Metal studs vs. wood studs compared: cost per square foot, strength, moisture, fire, sound and when each makes sense in basements, remodels and commercial fit-outs.",
        },
        excerpt: "How metal and wood studs compare on cost, moisture, strength and ease of work, and which one to use where.",
        content: [
            {
                type: "p",
                text: "Short answer: neither is better everywhere. HomeAdvisor puts steel framing at about $2 to $4 per square foot versus roughly $1 to $5 for wood, so cost is often close and swings with lumber prices. Wood is the standard for load-bearing residential framing. Light-gauge metal studs shine for non-structural walls, basements and commercial interiors. We frame with both, and here’s how we decide.",
                links: [{ text: "We frame with both", url: "/framing" }],
            },
            { type: "h2", text: "Side-by-Side Comparison" },
            {
                type: "table",
                head: ["", "Wood studs", "Metal (light-gauge steel) studs"],
                rows: [
                    ["Typical framing cost", "About $1 – $5 per sq ft", "About $2 – $4 per sq ft"],
                    ["Load-bearing walls", "Standard choice in homes", "Needs heavier gauge and engineering"],
                    ["Moisture & rot", "Can rot or mold if wet", "Won’t rot; can rust if left wet"],
                    ["Straightness", "Can warp, twist or shrink", "Perfectly straight and consistent"],
                    ["Fire", "Combustible", "Non-combustible"],
                    ["Hanging cabinets & TVs", "Easy, screw anywhere", "Needs planned wood blocking"],
                    ["Common use", "Additions, structural walls, most homes", "Basements, partitions, commercial fit-outs"],
                ],
                caption: "Cost ranges from HomeAdvisor. Prices move with lumber and steel markets.",
            },
            { type: "h2", text: "When We Use Wood" },
            {
                type: "ul",
                items: [
                    "Home additions and any load-bearing wall",
                    "Walls that will carry heavy cabinets, shelving or wall-mounted TVs without a lot of planning",
                    "Remodels where new walls tie into existing wood framing",
                ],
                links: [{ text: "Home additions", url: "/home-addition" }],
            },
            { type: "h2", text: "When We Use Metal" },
            {
                type: "ul",
                items: [
                    "Basement perimeter walls and partitions, where moisture and concrete contact are a concern",
                    "Commercial interiors and tenant fit-outs, where codes often call for non-combustible framing",
                    "Long, straight walls and ceilings where flatness matters for the finish",
                    "Soffits and bulkheads around ducts and beams",
                ],
                links: [
                    { text: "Basement perimeter walls and partitions", url: "/basement-finishing" },
                    { text: "Commercial interiors and tenant fit-outs", url: "/commercial-interiors" },
                ],
            },
            { type: "h2", text: "What About Cost Over Time?" },
            {
                type: "p",
                text: "Material price is only part of it. Metal studs are lighter and perfectly straight, which can speed up drywall and reduce callbacks for nail pops and cracked seams. Wood is faster for crews used to it and easier to modify later. In a damp basement, avoiding rot and mold matters more than a small difference in material cost.",
                links: [{ text: "drywall", url: "/drywall" }],
            },
            { type: "h2", text: "Need Framing Done Right?" },
            cta("wood and metal framing", "/framing"),
            { type: "h3", text: "Sources" },
            {
                type: "ul",
                items: [
                    "HomeAdvisor, How Much Does Metal Stud Framing Cost?",
                    "The Home Depot, Metal Studs vs. Wood Studs",
                ],
                links: [
                    { text: "HomeAdvisor, How Much Does Metal Stud Framing Cost?", url: "https://www.homeadvisor.com/cost/walls-and-ceilings/metal-stud-framing" },
                    { text: "The Home Depot, Metal Studs vs. Wood Studs", url: "https://www.homedepot.com/c/ab/metal-studs-vs.-wood-studs/9ba683603be9fa5395fab9018af707ba" },
                ],
            },
        ],
        faqs: [
            { question: "Are metal studs cheaper than wood?", answer: "Sometimes. HomeAdvisor puts steel framing at about $2 to $4 per square foot and wood at about $1 to $5, so the cheaper option depends on current lumber and steel prices and the job." },
            { question: "Can metal studs be load-bearing?", answer: "Heavier-gauge steel can be, but it requires engineering. In homes, load-bearing walls are almost always wood." },
            { question: "Are metal studs better for basements?", answer: "They’re a strong choice because they don’t rot or absorb moisture. Treated wood plates are another common option." },
            { question: "Can you hang cabinets on metal studs?", answer: "Yes, if wood blocking is installed in the wall where cabinets and TVs will go. We plan that during framing." },
        ],
    },
];

export default costGuides2;
