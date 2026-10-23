import { motion } from "framer-motion";
import heroImg from "../../assets/painting/image1.jpg";
import img1 from "../../assets/painting/image3.webp";
import img2 from "../../assets/painting/image2.webp";
import img3 from "../../assets/painting/image4.jpg";

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
        id: "interior-painting",
        title: "Interior Painting",
        description:
            "Transform your living spaces with professional interior painting services from Park Interiors. We deliver flawless finishes on walls, ceilings, trim, doors, cabinets, and accent features using premium low-VOC paints from trusted brands like Sherwin-Williams and Benjamin Moore. Our painters handle every step — from drywall repair, sanding, and priming to careful taping, edging, and final coats — protecting your floors and furniture throughout. Whether you're refreshing a single room or repainting your entire home, we create clean, modern, color-coordinated interiors that elevate your style and increase your home's value.",
        image: img1,
        alt: "Professional interior painting service with smooth wall finish and modern color",
    },
    {
        id: "exterior-painting",
        title: "Exterior Painting",
        description:
            "Protect and beautify your home with expert exterior painting services built to withstand harsh weather, UV exposure, and seasonal wear. Park Interiors handles full exterior preparation including pressure washing, scraping, sanding, caulking, and priming before applying weather-resistant, fade-proof exterior paints designed for siding, trim, doors, shutters, decks, and stucco. Our skilled crew delivers a smooth, even finish that boosts curb appeal, prevents moisture damage, and adds years of protection — backed by professional workmanship and long-lasting results.",
        image: img2,
        alt: "Exterior house painting with weather-resistant paint and clean finish",
    },
    {
        id: "commercial-painting",
        title: "Commercial Painting",
        description:
            "Elevate your business with high-quality commercial painting services from Park Interiors. We paint offices, retail stores, restaurants, warehouses, medical facilities, apartment buildings, and more — using durable, low-odor commercial-grade paints that minimize downtime and disruption. Our team works flexible hours including evenings and weekends to keep your business running, and we handle everything from color consultation and surface prep to final touch-ups. Get clean, professional, brand-aligned finishes that impress clients, customers, and employees alike.",
        image: img3,
        alt: "Commercial painting service for office and retail spaces",
    },
];

// Structured data for rich search results
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Painting Services",
    "provider": {
        "@type": "GeneralContractor",
        "name": "Park Interiors",
        "url": "https://www.parkinteriorsvt.com",
    },
    "areaServed": {
        "@type": "Country",
        "name": "United States",
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Painting Services",
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

export default function Painting() {
    return (
        <div className="bg-white">

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {/* HERO */}
            <section
                className="relative py-32 px-6 text-center text-white"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                aria-label="Painting services hero section"
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                         Painting Services
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Park Interiors offers expert interior painting, exterior painting,
                        and commercial painting services designed to transform homes and
                        businesses with flawless finishes, premium paints, and skilled
                        craftsmanship — delivering lasting beauty and protection in every
                        season.
                    </motion.p>
                </div>
            </section>

            {/* SUB SERVICES */}
            <section className="py-20 px-6 bg-gray-50" aria-label="Our painting services">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Painting Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From whole-home interior painting and weather-resistant exterior
                            coatings to large-scale commercial projects, Park Interiors
                            delivers a complete range of professional painting services
                            designed for clean lines, smooth finishes, and long-lasting
                            durability across every property type.
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
            <section className="py-20 px-6 bg-[#c1a944] text-center" aria-label="Get a free painting quote">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Refresh Your Space with a New Coat of Paint?
                </h2>
                <p className="text-black mb-6 max-w-2xl mx-auto">
                    Contact Park Interiors today for a free painting consultation and
                    detailed quote. Whether it's a single room, your entire home's exterior,
                    or a full commercial project, our professional painters are ready to
                    deliver clean, beautiful, and long-lasting results.
                </p>


                <a href="/contact-us"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                    aria-label="Get a free painting quote from Park Interiors"
                >
                    Get a Quote
                </a>
            </section>

        </div>
    );
}