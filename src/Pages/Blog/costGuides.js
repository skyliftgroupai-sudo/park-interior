// Cost guides (Nov 2026). Figures are cited national ranges, not Park Interiors quotes.
import additionHero from "../../assets/addition/garge.webp";
import additionImg from "../../assets/addition/room.avif";
import basementHero from "../../assets/remodeling/basement.jpg";
import basementImg from "../../assets/hero/hero3.webp";

const costGuides = [
    {
        slug: "home-addition-cost-vermont",
        title: "How Much Does a Home Addition Cost in Vermont? (2026 Guide)",
        image: additionHero,
        date: "November 9, 2026",
        isoDate: "2026-11-09",
        author: "Park Interiors",
        category: "Home Additions",
        readTime: "8 min read",
        seo: {
            metaTitle: "Home Addition Cost in Vermont (2026): Per Square Foot & Real Examples",
            metaDescription:
                "What a home addition costs in Vermont in 2026: cost per square foot by room type, worked examples, and the Vermont-specific factors (frost, snow load, septic, permits) that move the price.",
        },
        excerpt:
            "Cost per square foot by room type, worked examples, and the Vermont-specific factors that push an addition budget up or down.",
        content: [
            {
                type: "p",
                text: "Short answer: most permitted home additions land somewhere between about $150 and $350 per square foot for basic living space, and $250 to $500 or more per square foot for rooms with plumbing like bathrooms and kitchens. Where your project falls in that range depends on what goes inside the new space, how it ties into your existing house, and a handful of factors that are specific to building in Vermont.",
            },
            {
                type: "p",
                text: "Below we break down the national cost data, show what those numbers mean for a typical Chittenden County project, and explain what changes the price. If you want a real number for your house, Park Interiors offers free on-site estimates for home additions across Burlington, Essex, Jericho, Underhill and the surrounding towns.",
                links: [{ text: "home additions", url: "/home-addition" }],
            },
            { type: "h2", text: "Home Addition Cost Per Square Foot (2026)" },
            {
                type: "p",
                text: "Cost per square foot is the quickest way to sanity-check a budget, but it swings a lot by room type. A bedroom or family room is mostly framing, insulation, drywall and flooring. A bathroom or kitchen adds plumbing, venting, waterproofing and fixtures, which is why “wet rooms” cost far more per square foot.",
            },
            {
                type: "table",
                head: ["Type of addition", "Typical cost per sq ft", "What drives the price"],
                rows: [
                    ["Bedroom / family room", "$80 – $200+ (Bankrate); $150 – $350 for a basic permitted room addition (Block Renovation)", "Foundation type, roof tie-in, heating the new space"],
                    ["Bathroom addition", "$250 – $500+", "Plumbing runs, waterproofing, fixtures, ventilation"],
                    ["Kitchen addition", "Highest of all room types", "Cabinets, counters, appliances, plumbing, electrical"],
                    ["Second-story addition", "Typically the most expensive per sq ft", "Structural reinforcement, new stairs, roof removal"],
                ],
                caption: "Ranges from Bankrate (March 2026) and Block Renovation’s 2026 addition cost guide. National figures; your project will vary.",
            },
            {
                type: "p",
                text: "For a sense of total project cost, the 2025 Cost vs Value Report puts the national average for a midrange bathroom addition at about $60,645 and a midrange primary suite addition at about $170,517.",
            },
            { type: "h2", text: "What That Looks Like in Real Numbers" },
            {
                type: "p",
                text: "Here is rough math using the ranges above. These are illustrations, not quotes. They show why two additions of the same size can come in very differently.",
            },
            {
                type: "ul",
                items: [
                    "12' × 16' bedroom or office (192 sq ft) at $150–$300 per sq ft: roughly $29,000 to $58,000.",
                    "8' × 10' full bathroom (80 sq ft) at $250–$500 per sq ft: roughly $20,000 to $40,000, before any upgrades to the main house plumbing.",
                    "16' × 20' family room (320 sq ft) at $150–$300 per sq ft: roughly $48,000 to $96,000.",
                ],
            },
            {
                type: "p",
                text: "Smaller additions usually cost more per square foot, because fixed costs like permits, plans, excavation and the roof tie-in get spread over fewer square feet.",
            },
            { type: "img", src: additionImg, alt: "Finished room addition with large windows and natural light" },
            { type: "h2", text: "Vermont Factors That Change the Price" },
            {
                type: "p",
                text: "National averages don’t account for what it takes to build here. These are the Vermont-specific items we price into every addition in Chittenden County.",
            },
            { type: "h3", text: "1. Foundations below the frost line" },
            {
                type: "p",
                text: "Vermont frost goes deep, so footings for a full foundation or frost wall have to go deep too. A slab-on-grade bump-out costs less, but a full basement under the addition gives you more usable space. We’ll walk through the trade-off for your lot.",
            },
            { type: "h3", text: "2. Snow load on the new roof" },
            {
                type: "p",
                text: "The roof framing has to be designed for local snow loads, and how it ties into your existing roof often decides whether you avoid ice dams and leaks in the valley where the two meet. Framing that’s sized right costs a bit more up front and prevents expensive problems later.",
                links: [{ text: "Framing", url: "/framing" }],
            },
            { type: "h3", text: "3. Energy code (RBES)" },
            {
                type: "p",
                text: "Additions in Vermont fall under the state’s Residential Building Energy Standards (RBES), which set minimum insulation and air-sealing levels. Meeting it adds cost compared to older building practice, but it’s also why a new addition is comfortable in January.",
            },
            { type: "h3", text: "4. Septic capacity for bedroom additions" },
            {
                type: "p",
                text: "If your home is on a septic system, adding a bedroom can increase the system’s design flow, and Vermont may require a state wastewater permit before you build. That can mean septic upgrades, so check this before you fall in love with a floor plan. Homes on municipal sewer in Burlington, South Burlington and Essex Junction usually skip this step.",
            },
            { type: "h3", text: "5. Heating the new space" },
            {
                type: "p",
                text: "Extending your existing system, adding a zone, or installing a ductless heat pump all have very different costs. Check Efficiency Vermont for current incentives on heat pumps and insulation before you decide.",
            },
            { type: "h3", text: "6. Permits and the building season" },
            {
                type: "p",
                text: "Most towns require a building permit for an addition, and some require zoning approval for setbacks. Foundation and exterior work is easiest outside deep winter, so scheduling an addition to start in spring or early summer often saves both time and money.",
            },
            { type: "h2", text: "Popular Types of Additions in Chittenden County" },
            {
                type: "ul",
                items: [
                    "Mudrooms: very practical in Vermont. A dedicated entry for boots, coats and gear during mud season and winter.",
                    "Primary suites: bedroom, bath and closet on the main floor, often planned for aging in place.",
                    "In-law suites and accessory dwelling space: living space for family, with a bath and sometimes a small kitchen.",
                    "Garage additions: attached or detached, sometimes with finished space above.",
                    "Second-story additions: when your lot can’t take a bigger footprint.",
                ],
            },
            { type: "h2", text: "How to Keep an Addition on Budget" },
            {
                type: "ul",
                items: [
                    "Keep plumbing near existing plumbing. Putting a new bath back-to-back with an existing one saves real money.",
                    "Use a simple roofline. Every extra valley and hip adds framing, flashing and labor.",
                    "Decide finishes early. Allowances that grow mid-project are the most common reason budgets slip.",
                    "Get a written, itemized scope so you can compare bids line by line, not just by the total.",
                    "Consider finishing an existing basement first. It’s often far cheaper per square foot than building new.",
                ],
                links: [{ text: "finishing an existing basement", url: "/basement-finishing" }],
            },
            { type: "h2", text: "Get a Real Number for Your Home" },
            {
                type: "p",
                text: "Cost guides get you in the ballpark. A site visit gets you an actual price. Park Interiors is a licensed and insured general contractor that builds home additions throughout Chittenden County, from framing through drywall, flooring and finish. Call 802-777-0951 or request a free estimate online.",
                links: [{ text: "request a free estimate online", url: "/contact-us" }],
            },
            { type: "h3", text: "Sources" },
            {
                type: "ul",
                items: [
                    "Bankrate, How to finance the cost of a home addition: 2026 estimates (March 2026)",
                    "Block Renovation, The 2026 Home Addition Costs Guide",
                    "Journal of Light Construction, 2025 Cost vs Value Report (national averages)",
                ],
                links: [
                    { text: "Bankrate, How to finance the cost of a home addition: 2026 estimates (March 2026)", url: "https://www.bankrate.com/loans/home-improvement/home-addition-cost" },
                    { text: "Block Renovation, The 2026 Home Addition Costs Guide", url: "https://www.blockrenovation.com/guides/understanding-the-costs-of-a-home-addition" },
                    { text: "Journal of Light Construction, 2025 Cost vs Value Report (national averages)", url: "https://www.jlconline.com/cost-vs-value/2025/new-england/" },
                ],
            },
        ],
        faqs: [
            {
                question: "What is the cheapest type of home addition?",
                answer: "A simple bedroom or family room with no plumbing is usually the least expensive per square foot. A small bump-out on a slab can be the lowest total cost, though small additions cost more per square foot.",
            },
            {
                question: "Is it cheaper to build out or build up?",
                answer: "Building out is usually cheaper. A second-story addition needs structural reinforcement, a new staircase and roof removal, which makes it the most expensive type per square foot.",
            },
            {
                question: "Do I need a permit for a home addition in Vermont?",
                answer: "Almost always. Expect a building permit and possibly zoning review for setbacks. If you’re on septic and adding a bedroom, you may also need a state wastewater permit. Your contractor should handle permitting as part of the project.",
            },
            {
                question: "How long does a home addition take?",
                answer: "Design and permitting can take several weeks to a few months. Construction for a typical single-story addition usually runs a few months, depending on size, foundation type and weather.",
            },
            {
                question: "Does a home addition add value to my house?",
                answer: "Additions add livable space, but they rarely recover their full cost at resale. The 2025 Cost vs Value Report shows midrange additions recouping well under their cost on average. Most people build them because they need the space and want to stay in the home.",
            },
        ],
    },
    {
        slug: "basement-finishing-cost-vermont",
        title: "How Much Does It Cost to Finish a Basement in Vermont? (2026)",
        image: basementHero,
        date: "November 9, 2026",
        isoDate: "2026-11-09",
        author: "Park Interiors",
        category: "Basement Finishing",
        readTime: "7 min read",
        seo: {
            metaTitle: "Basement Finishing Cost in Vermont (2026): Per Sq Ft & What Drives It",
            metaDescription:
                "What it costs to finish a basement in Vermont in 2026: realistic per-square-foot ranges, examples by size, and the Vermont factors (moisture, radon, egress, cold walls) that affect price.",
        },
        excerpt:
            "Realistic per-square-foot ranges, examples by size, and why moisture, radon and egress matter for Vermont basements.",
        content: [
            {
                type: "p",
                text: "Short answer: a permitted, contractor-finished basement typically costs about $30 to $75 per square foot in 2026, and a full living suite with a bathroom can pass $100 per square foot. You’ll also see much lower numbers online, around $7 to $23 per square foot. Below we explain why the two ranges are so far apart and which one fits your project.",
            },
            {
                type: "p",
                text: "If you’re in Chittenden County and want an actual price, Park Interiors offers free on-site estimates for basement finishing in Burlington, Essex, Colchester, Jericho, Underhill and nearby towns.",
                links: [{ text: "basement finishing", url: "/basement-finishing" }],
            },
            { type: "h2", text: "Why Basement Cost Estimates Vary So Much" },
            {
                type: "p",
                text: "HomeAdvisor puts basement finishing at $7 to $23 per square foot, with an average project around $32,000 and a normal range of $15,000 to $75,000. Block Renovation’s 2026 guide says permitted, code-compliant contractor work starts closer to $30 per square foot and runs up to about $75. The difference is mostly scope. The low numbers describe a basement that is already dry, wired and close to code-ready, needing little more than framing, drywall and flooring. Most unfinished Vermont basements need more than that.",
            },
            {
                type: "table",
                head: ["Basement size", "At $30 / sq ft", "At $75 / sq ft"],
                rows: [
                    ["500 sq ft", "$15,000", "$37,500"],
                    ["800 sq ft", "$24,000", "$60,000"],
                    ["1,000 sq ft", "$30,000", "$75,000"],
                ],
                caption: "Illustrative math using Block Renovation’s 2026 contractor-led range. Not a quote.",
            },
            { type: "h2", text: "What’s Included in the Cost" },
            {
                type: "ul",
                items: [
                    "Framing and insulation for perimeter walls and new rooms",
                    "Electrical: new circuits, outlets, lighting, smoke and CO alarms",
                    "Drywall, ceilings, doors, trim and paint",
                    "Flooring suited to a concrete slab",
                    "HVAC: extending heat or adding a heat pump",
                    "Permits and inspections. NerdWallet puts basement permits at roughly $1,000 to $3,200 on average.",
                ],
                links: [
                    { text: "Framing and insulation", url: "/framing" },
                    { text: "Drywall", url: "/drywall" },
                    { text: "Flooring", url: "/flooring" },
                ],
            },
            { type: "h2", text: "The Add-Ons That Move the Price Most" },
            {
                type: "ul",
                items: [
                    "A bathroom: usually the biggest single add-on, mostly because of drainage. Below-grade toilets may need an ejector pump.",
                    "An egress window: required for any basement bedroom, which means cutting the foundation and digging a window well.",
                    "Waterproofing: NerdWallet puts the average around $4,500, and it has to come before finishing if water is getting in.",
                    "A wet bar or kitchenette: adds plumbing, cabinets and electrical.",
                ],
                links: [{ text: "A bathroom", url: "/bathroom-remodeling" }],
            },
            { type: "img", src: basementImg, alt: "Finished basement living space with drywall, lighting and flooring" },
            { type: "h2", text: "Vermont-Specific Factors" },
            { type: "h3", text: "Moisture and mud season" },
            {
                type: "p",
                text: "Spring snowmelt pushes groundwater against foundations across northern Vermont. If you see efflorescence, damp corners or puddles in April, deal with the water first. Finishing over an active leak is the most expensive mistake you can make in a basement.",
            },
            { type: "h3", text: "Cold walls and condensation" },
            {
                type: "p",
                text: "Concrete stays cold for much of the year here. If warm, humid indoor air reaches it, it condenses behind the drywall. Using the right insulation against the foundation, and framing that keeps wood off damp concrete or uses metal studs, is what keeps a finished basement from smelling musty a few years later.",
            },
            { type: "h3", text: "Radon" },
            {
                type: "p",
                text: "The Vermont Department of Health recommends that every home be tested for radon. Testing before you finish is cheap. If mitigation is needed, it’s much easier to install before the walls and ceiling are closed up.",
            },
            { type: "h3", text: "Ceiling height and egress" },
            {
                type: "p",
                text: "Older Vermont homes often have low basements, with ducts, beams and pipes hanging lower still. Code sets minimum ceiling heights for habitable rooms and requires egress for bedrooms, so measure before you plan a bedroom down there.",
            },
            { type: "h2", text: "Is Finishing a Basement Worth It?" },
            {
                type: "p",
                text: "For most families, finishing a basement is one of the cheapest ways to add usable square footage, often far cheaper per square foot than an addition. In the NAR/NARI remodeling study cited by HGTV, a basement family-room conversion was estimated to recover about 86% of its cost at sale. Results vary by market, but the space is valuable while you live there too.",
                links: [{ text: "an addition", url: "/blog/home-addition-cost-vermont" }],
            },
            { type: "h2", text: "Get a Price for Your Basement" },
            {
                type: "p",
                text: "Every basement is different, and the only way to get a reliable number is to look at it. Park Interiors is a licensed and insured contractor that handles basement framing, insulation, drywall, flooring and finishes across Chittenden County. Call 802-777-0951 or request a free estimate.",
                links: [{ text: "request a free estimate", url: "/contact-us" }],
            },
            { type: "h3", text: "Sources" },
            {
                type: "ul",
                items: [
                    "HomeAdvisor, How Much Does It Cost to Finish a Basement in 2026?",
                    "Block Renovation, How Much Does It Cost to Finish a Basement in 2026?",
                    "NerdWallet, Cost to Finish a Basement in 2026",
                    "HGTV, How Much Value Does a Finished Basement Add?",
                ],
                links: [
                    { text: "HomeAdvisor, How Much Does It Cost to Finish a Basement in 2026?", url: "https://www.homeadvisor.com/cost/basements/" },
                    { text: "Block Renovation, How Much Does It Cost to Finish a Basement in 2026?", url: "https://www.blockrenovation.com/guides/broomfield-co-basement-renovation-costs-tips-local" },
                    { text: "NerdWallet, Cost to Finish a Basement in 2026", url: "https://www.nerdwallet.com/article/mortgages/cost-finish-basement" },
                    { text: "HGTV, How Much Value Does a Finished Basement Add?", url: "https://www.hgtv.com/design/remodel/interior-remodel/basement-remodel-splurge-vs-save" },
                ],
            },
        ],
        faqs: [
            {
                question: "How much does it cost to finish a 1,000 square foot basement?",
                answer: "Using the contractor-led range of about $30 to $75 per square foot, roughly $30,000 to $75,000. A basement that’s already dry and wired can come in lower; one with a bathroom, bedroom and egress window can come in higher.",
            },
            {
                question: "Do I need a permit to finish a basement in Vermont?",
                answer: "In most Chittenden County towns, yes, especially when adding bedrooms, bathrooms or new electrical circuits. Permits also document the work for resale.",
            },
            {
                question: "What is the cheapest way to finish a basement?",
                answer: "Keep it one open room, skip the bathroom, use an exposed painted ceiling or drop ceiling, and choose LVP flooring. Just don’t skip moisture control or proper insulation.",
            },
            {
                question: "Should I test for radon before finishing my basement?",
                answer: "Yes. The Vermont Department of Health recommends radon testing for every home, and mitigation is easier before walls and ceilings are finished.",
            },
            {
                question: "How long does it take to finish a basement?",
                answer: "Most basement finishing projects take several weeks of on-site work, plus time for framing, electrical and final inspections.",
            },
        ],
    },
];

export default costGuides;
