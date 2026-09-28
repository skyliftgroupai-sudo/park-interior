import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import heroImg from "../../assets/siding/im2.webp";
import img1 from "../../assets/siding/im1.jpg";
import img2 from "../../assets/siding/im2.webp";
import img3 from "../../assets/siding/im4.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const services = [
    {
        id: "siding-installation",
        title: "Siding Installation",
        description:
            "Transform your home's exterior with professional siding installation built for lasting durability, weather protection, and stunning curb appeal. At Park Interiorsvt, we install premium siding materials including vinyl, fiber cement, wood, and engineered wood — each precisely fitted with proper insulation, weather barriers, and seamless trim work. Our certified installers ensure a watertight finish that improves energy efficiency, lowers utility bills, and protects your home from moisture, wind, pests, and UV damage for decades to come.",
        image: img1,
        alt: "Professional siding installation by Park Interiorsvt with weatherproof finish",
    },
    {
        id: "siding-repair",
        title: "Siding Repair",
        description:
            "Restore your home's protection and appearance with expert siding repair services from Park Interiorsvt. We fix cracked panels, warped boards, loose seams, storm damage, water infiltration, and faded sections — using color-matched materials that blend perfectly with your existing siding. Our skilled team identifies the root cause of damage, replaces compromised sections, and reinforces vulnerable areas to prevent moisture intrusion, mold growth, and structural deterioration. Quick turnaround, lasting results, and a flawless finish guaranteed.",
        image: img2,
        alt: "Siding repair service fixing damaged panels and storm damage",
    },
    {
        id: "vinyl-siding",
        title: "Vinyl Siding",
        description:
            "Upgrade your home with premium vinyl siding — the most popular, low-maintenance, and cost-effective siding choice for homeowners. Park Interiorsvt offers a wide selection of high-grade vinyl siding in dozens of colors, textures, and profiles including traditional lap, Dutch lap, board and batten, and cedar shake styles. Our vinyl siding resists fading, cracking, peeling, moisture, and insect damage, while delivering excellent insulation value, energy savings, and a fresh modern look that lasts 30+ years with virtually no upkeep.",
        image: img3,
        alt: "Vinyl siding installation in modern color and Dutch lap style",
    },
];

// Structured data for rich search results
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Siding Services",
    "provider": {
        "@type": "GeneralContractor",
        "name": "Park Interiorsvt",
        "url": "https://www.parkinteriorsvt.com",
    },
    "areaServed": {
        "@type": "Country",
        "name": "United States",
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Siding Services",
        "itemListElement": services.map((s, i) => ({
            "@type": "Offer",
            "position": i + 1,
            "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
            },
        })),
    },
};

export default function Siding() {
    return (
        <div className="bg-white">

            {/* ===== SEO META TAGS ===== */}
            <Helmet>
                <title>Siding Services | Vinyl Siding Installation & Repair | Park Interiorsvt</title>
                <meta
                    name="description"
                    content="Professional siding services by Park Interiorsvt. Expert siding installation, siding repair, and premium vinyl siding for lasting protection, energy efficiency, and curb appeal. Free quote available."
                />
                <meta
                    name="keywords"
                    content="siding services, siding installation, siding repair, vinyl siding, fiber cement siding, exterior siding contractor, home siding, vinyl siding installation, siding replacement, Park Interiorsvt"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Park Interiorsvt" />
                <link rel="canonical" href="https://www.parkinteriorsvt.com/siding" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Siding Services | Vinyl Siding Installation & Repair | Park Interiorsvt" />
                <meta
                    property="og:description"
                    content="Professional siding installation, repair, and premium vinyl siding services from Park Interiorsvt. Boost curb appeal and protect your home with quality siding solutions."
                />
                <meta property="og:image" content={heroImg} />
                <meta property="og:url" content="https://www.parkinteriorsvt.com/siding" />
                <meta property="og:site_name" content="Park Interiorsvt" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Siding Services | Vinyl Siding Installation & Repair | Park Interiorsvt" />
                <meta
                    name="twitter:description"
                    content="Expert siding installation, repair, and vinyl siding services from Park Interiorsvt. Free estimates available."
                />
                <meta name="twitter:image" content={heroImg} />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            {/* HERO */}
            <section
                className="relative py-32 px-6 text-center text-white"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                aria-label="Siding services hero section"
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                         Siding Services
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Park Interiorsvt delivers expert siding installation, siding repair,
                        and premium vinyl siding solutions designed to protect your home,
                        improve energy efficiency, and boost curb appeal. Quality materials,
                        skilled craftsmanship, and lasting results in every season.
                    </motion.p>
                </div>
            </section>

            {/* SUB SERVICES */}
            <section className="py-20 px-6 bg-gray-50" aria-label="Our siding services">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Siding Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From new siding installations and storm damage repairs to premium
                            vinyl siding upgrades, Park Interiorsvt offers a complete range of
                            exterior siding services built to enhance curb appeal, increase
                            energy efficiency, and protect your home for decades.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {services.map((service, index) => {
                            const isReverse = index % 2 !== 0;

                            return (
                                <article
                                    key={service.id}
                                    id={service.id}
                                    className="grid md:grid-cols-2 gap-10 scroll-mt-28"
                                >
                                    {service.image && (
                                        <motion.img
                                            src={service.image}
                                            alt={service.alt}
                                            loading="lazy"
                                            width="600"
                                            height="400"
                                            className={`rounded-2xl shadow-lg w-full h-auto ${isReverse ? "md:order-2" : ""}`}
                                            initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                        />
                                    )}

                                    <div className={`${isReverse ? "md:order-1" : ""}`}>
                                        <h3 className="text-2xl font-bold mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {service.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center" aria-label="Get a free siding quote">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Upgrade Your Home's Exterior?
                </h2>
                <p className="text-black mb-6 max-w-2xl mx-auto">
                    Contact Park Interiorsvt today for a free siding consultation and
                    detailed quote. Whether you need a quick repair, a full siding
                    replacement, or a stylish vinyl siding upgrade, our team is ready to
                    transform your home with quality workmanship and materials that last.
                </p>


                <a href="/contact-us"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                    aria-label="Get a free siding quote from Park Interiorsvt"
                >
                    Get a Quote
                </a>
            </section>

        </div>
    );
}