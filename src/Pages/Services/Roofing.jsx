import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import heroImg from "../../assets/roofing/img6.jpg";
import img1 from "../../assets/roofing/img2.jpg";
import img2 from "../../assets/roofing/img3.webp";
import img3 from "../../assets/roofing/img4.jpg";
import img4 from "../../assets/roofing/img5.jpeg";
import img5 from "../../assets/roofing/img1.webp";

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
        id: "roof-installation",
        title: "Roof Installation",
        description:
            "Protect your home with a professional roof installation built for long-term durability, energy efficiency, and weather resistance. Our certified roofers handle every step — from material selection and tear-off to underlayment, flashing, ventilation, and final shingle installation. We work with asphalt shingles, metal roofing, tile, and other premium materials to deliver a watertight roofing system that meets local building codes, withstands extreme weather, and significantly boosts your home's curb appeal and market value.",
        image: img1,
        alt: "Professional roof installation with new asphalt shingles and proper ventilation",
    },
    {
        id: "roof-repair",
        title: "Roof Repair",
        description:
            "Stop roof leaks, damaged shingles, and storm damage before they cause expensive interior problems. Our expert roof repair services include leak detection, missing shingle replacement, flashing repair, gutter realignment, vent boot sealing, and structural fixes for damage caused by wind, hail, snow, ice dams, or aging materials. We respond quickly with same-day estimates and lasting fixes that restore your roof's integrity, protect your home from water damage, and extend the lifespan of your existing roofing system.",
        image: img2,
        alt: "Roof repair service fixing damaged shingles and leak issues",
    },
    {
        id: "roof-replacement",
        title: "Roof Replacement",
        description:
            "Upgrade your home with a complete roof replacement designed for decades of reliable performance. When your existing roof is beyond repair, our team removes old shingles, inspects the decking, installs new underlayment and ice & water shield, and finishes with high-quality shingles or premium roofing materials of your choice. Our roof replacement process improves energy efficiency, eliminates leaks, modernizes your home's exterior, and delivers strong return on investment — all backed by manufacturer warranties and labor guarantees.",
        image: img3,
        alt: "Full roof replacement with new shingles and improved insulation",
    },
    {
        id: "architectural-shingles",
        title: "Architectural Shingles",
        description:
            "Upgrade your roof with premium architectural shingles — also known as dimensional or laminate shingles — for a high-end look and exceptional durability. These multi-layer asphalt shingles offer wind resistance up to 130 mph, superior weather protection, and a textured, three-dimensional appearance that adds character and visual depth to any home. Available in a wide range of designer colors and styles, architectural shingles last significantly longer than traditional 3-tab shingles and come with extended manufacturer warranties for long-term peace of mind.",
        image: img4,
        alt: "Architectural shingles installation with dimensional textured finish",
    },
    {
        id: "roof-coating",
        title: "Roof Coatings",
        description:
            "Extend the life of your existing roof with advanced roof coatings that deliver superior waterproofing, UV protection, and energy savings. Our professional-grade silicone, acrylic, and elastomeric coatings create a seamless, reflective barrier that prevents leaks, reduces interior cooling costs, and shields your roof from harsh sun, heavy rain, and temperature extremes. A cost-effective alternative to full replacement, roof coatings can add 10–15 years to your roof's lifespan while improving energy efficiency and reducing long-term maintenance costs.",
        image: img5,
        alt: "Reflective roof coating application for energy efficiency and waterproofing",
    },
];

// Structured data for rich search results
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing Services",
    "provider": {
        "@type": "RoofingContractor",
        "name": "Park Interiorsvt",
        "url": "https://www.parkinteriorsvt.com",
    },
    "areaServed": {
        "@type": "Country",
        "name": "United States",
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing Services",
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

export default function Roofing() {
    return (
        <div className="bg-white">

            {/* ===== SEO META TAGS ===== */}
            <Helmet>
                <title>Roofing Services | Roof Installation, Repair & Replacement Experts</title>
                <meta
                    name="description"
                    content="Professional roofing services including roof installation, repair, replacement, architectural shingles, and roof coatings. Licensed roofers, free estimates, and long-lasting protection for your home."
                />
                <meta
                    name="keywords"
                    content="roofing services, roof installation, roof repair, roof replacement, architectural shingles, roof coatings, roofing contractor, asphalt shingles, residential roofing, leak repair, storm damage roofing, new roof"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.parkinteriorsvt.com/roofing" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Roofing Services | Installation, Repair & Replacement Experts" />
                <meta
                    property="og:description"
                    content="Trusted roofing contractors offering roof installation, repair, replacement, architectural shingles, and roof coatings. Free estimates and quality workmanship guaranteed."
                />
                <meta property="og:image" content={heroImg} />
                <meta property="og:url" content="https://www.parkinteriorsvt.com/roofing" />
                <meta property="og:site_name" content="Your Company Name" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Roofing Services | Installation, Repair & Replacement Experts" />
                <meta
                    name="twitter:description"
                    content="Trusted roofing contractors offering installation, repair, replacement, and protective coatings. Free estimates available."
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
                aria-label="Roofing services hero section"
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Roofing Services
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Trusted roofing contractors specializing in roof installation, repair,
                        replacement, architectural shingles, and protective roof coatings. We
                        deliver durable, weather-resistant roofing solutions that protect your
                        home, improve energy efficiency, and enhance curb appeal year-round.
                    </motion.p>
                </div>
            </section>

            {/* SUB SERVICES */}
            <section className="py-20 px-6 bg-gray-50" aria-label="Our roofing services">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Roofing Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From new roof installations and emergency leak repairs to full roof
                            replacements, premium architectural shingles, and energy-efficient
                            roof coatings — our complete range of roofing services is designed
                            to protect your home and deliver lasting performance.
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
            <section className="py-20 px-6 bg-[#c1a944] text-center" aria-label="Get a free roofing quote">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Upgrade Your Roof?
                </h2>
                <p className="text-black mb-6 max-w-2xl mx-auto">
                    Contact our licensed roofing experts today for a free inspection and
                    detailed quote. Whether you need a quick repair or a full roof
                    replacement, we'll protect your home with quality workmanship and
                    materials built to last.
                </p>


                <a href="/contact-us"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                    aria-label="Get a free roofing quote"
                >
                    Get a Quote
                </a>
            </section>

        </div>
    );
}