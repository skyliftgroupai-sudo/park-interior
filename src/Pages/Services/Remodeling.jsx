import { motion } from "framer-motion";
import heroImg from "../../assets/hero/hero3.jpg";
import img1 from "../../assets/remodeling/kitchen.jpg";
import img2 from "../../assets/remodeling/bathroom.jpg";
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
        id: "kitchen-remodeling",
        title: "Kitchen Remodeling Services",
        description:
            "Upgrade your kitchen with a complete remodeling service designed to deliver modern style, smart storage, and lasting durability. Our expert team handles custom cabinetry, quartz and granite countertops, tile backsplashes, energy-efficient lighting, and full layout redesigns. Whether you're planning a small kitchen update or a full-scale renovation, we build kitchens that are beautiful, highly functional, and engineered to add real value to your home.",
        image: img1,
        alt: "Modern kitchen remodeling service with custom cabinets and quartz countertops",
    },
    {
        id: "bathroom-remodeling",
        title: "Bathroom Remodeling Services",
        description:
            "Transform your bathroom into a stylish, spa-inspired retreat with our complete bathroom remodeling services. We specialize in walk-in showers, custom vanities, premium tile work, modern plumbing fixtures, and energy-efficient lighting. From small powder room updates to full master bathroom renovations, our skilled craftsmen deliver a clean, comfortable, and high-performance space designed to elevate your daily routine and increase your home's resale value.",
        image: img2,
        alt: "Luxury bathroom remodeling with walk-in shower and custom vanity",
    },
    {
        id: "basement-remodeling",
        title: "Basement Remodeling Services",
        description:
            "Unlock the full potential of your home with professional basement remodeling services that turn unused square footage into a beautiful, livable space. We design and build finished basements including home offices, media rooms, guest suites, in-law apartments, and rental units. Our team manages framing, waterproofing, insulation, electrical, flooring, and finishing — delivering a warm, code-compliant, and high-value addition to your home.",
        image: img3,
        alt: "Finished basement remodeling with media room and home office",
    },
];

// Structured data for rich search results
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Remodeling Services",
    "provider": {
        "@type": "GeneralContractor",
        "name": "Your Company Name",
        "url": "https://www.parkinteriorsvt.com/",
    },
    "areaServed": {
        "@type": "Country",
        "name": "United States",
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Remodeling Services",
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

export default function HomeRemodeling() {
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
                aria-label="Home remodeling services hero section"
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Professional Home Remodeling Services
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Trusted home remodeling contractors delivering custom kitchen, bathroom,
                        and basement renovations across the region. We combine modern design,
                        quality materials, and skilled craftsmanship to create spaces that are
                        functional, beautiful, and built to add real value to your home.
                    </motion.p>
                </div>
            </section>

            {/* SUB SERVICES */}
            <section className="py-20 px-6 bg-gray-50" aria-label="Our remodeling services">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Remodeling Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our full range of professional home remodeling services —
                            from kitchen and bathroom renovations to complete basement transformations —
                            crafted with quality materials, modern design, and expert workmanship.
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
            <section className="py-20 px-6 bg-[#c1a944] text-center" aria-label="Get a free remodeling quote">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Renovate Your Home?
                </h2>
                <p className="text-black mb-6 max-w-2xl mx-auto">
                    Contact our remodeling experts today for a free consultation and detailed
                    quote. Let's bring your dream kitchen, bathroom, or basement to life.
                </p>


                <a href="/contact-us"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                    aria-label="Get a free remodeling quote"
                >
                    Get a Quote
                </a>
            </section>

        </div>
    );
}