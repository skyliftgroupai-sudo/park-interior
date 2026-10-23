import { motion } from "framer-motion";
import heroImg from "../../assets/hero/hero3.jpg";
import img1 from "../../assets/addition/garge.jpg";
import imge2 from "../../assets/addition/room.avif";
import img3 from "../../assets/remodeling/basement.jpg";

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
        id: "room-addition",
        title: "Room Addition",
        description:
            "Expand your living space with a custom room addition built to seamlessly match your home's existing structure, style, and flow. Whether you need an extra bedroom, dedicated home office, sunroom, family room, or in-law suite, our experienced contractors handle every step — from architectural planning and permits to framing, electrical, and interior finishing. We focus on maximizing usable square footage, natural light, and energy efficiency, delivering a beautifully finished space that meets your family's growing needs and significantly increases your home's resale value.",
        image: imge2,
        alt: "Custom room addition with bright interior and modern finishes",
    },
    {
        id: "second-floor-addition",
        title: "Second Floor Addition",
        description:
            "Add a full second story to your home with our expert second floor addition services — the smartest way to double your living space without losing your yard. Our team manages structural engineering, load-bearing analysis, roofing, staircase design, and interior buildout to ensure the new level blends perfectly with your home's exterior and architecture. Ideal for adding extra bedrooms, master suites, bathrooms, or family lounges, a second floor addition delivers exceptional return on investment while transforming your single-story property into a spacious, modern multi-level home.",
        image: img3,
        alt: "Second floor addition construction with new bedrooms and bathrooms",
    },
    {
        id: "garage-addition",
        title: "Garage Addition",
        description:
            "Build a brand-new attached or detached garage addition designed for vehicle storage, workshops, or extra living space above. We construct durable, code-compliant garages with proper foundations, framing, insulated doors, ventilation, electrical wiring, and finishes that match your home's exterior. Whether you need a single-car, two-car, or three-car garage — or a garage with a finished room above — our skilled team delivers a secure, functional, and visually integrated structure that improves curb appeal, daily convenience, and long-term property value.",
        image: img1,
        alt: "Custom garage addition with matching exterior and ample storage",
    },
];

// Structured data for rich search results
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Addition Services",
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
        "name": "Home Addition Services",
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

export default function HomeAddition() {
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
                aria-label="Home addition services hero section"
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Home Addition Services
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Expand your home with custom room additions, second floor additions,
                        and garage additions built by trusted contractors. We deliver seamless
                        extensions that match your home's style, maximize functionality, and
                        add lasting value to your property.
                    </motion.p>
                </div>
            </section>

            {/* SUB SERVICES */}
            <section className="py-20 px-6 bg-gray-50" aria-label="Our home addition services">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Home Addition Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From custom room additions and full second story expansions to
                            attached garage builds, our home addition services give you the
                            extra space you need — designed, engineered, and finished with
                            quality craftsmanship.
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
            <section className="py-20 px-6 bg-[#c1a944] text-center" aria-label="Get a free home addition quote">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Expand Your Home?
                </h2>
                <p className="text-black mb-6 max-w-2xl mx-auto">
                    Contact our home addition experts today for a free consultation and
                    detailed quote. Let's design the perfect extension to fit your family,
                    your lifestyle, and your budget.
                </p>


                <a href="/contact-us"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                    aria-label="Get a free home addition quote"
                >
                    Get a Quote
                </a>
            </section>

        </div>
    );
}