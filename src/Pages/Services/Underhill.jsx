import { motion } from "framer-motion";
import img1 from "../../assets/remodeling/kitchen.jpg";

const heroImg = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80";
// const img1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80";
const img2 = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80";
const img3 = "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80";
const img4 = "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=1200&q=80";

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
        id: "home-remodeling",
        title: "Home Remodeling in Underhill, VT",
        description:
            "Reimagine your Underhill, VT home with custom remodeling services that combine modern design with timeless craftsmanship. From open-concept kitchens and spa-like bathrooms to whole-home transformations, our remodeling team brings your vision to life with quality materials, expert workmanship, and stunning attention to detail that adds real value to your property.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Home Renovation Experts in Underhill",
        description:
            "Bring fresh energy and modern style to your older Underhill home with comprehensive renovation services. Whether your home needs structural improvements, updated finishes, or full interior makeovers, our renovation specialists deliver beautiful, functional spaces designed to enhance your daily life and boost long-term home value.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Home Additions & Expansions in Underhill, VT",
        description:
            "Need more living space without moving away from beautiful Underhill? Our custom home additions blend seamlessly with your existing home's architecture. From extra bedrooms and home offices to expanded kitchens, sunrooms, and second-story builds, we handle planning, permits, and construction for a flawless finished result.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Reliable Roofing Services in Underhill",
        description:
            "Defend your Underhill, VT home against Vermont's tough weather with professional roofing services you can trust. From leak repairs and storm damage restoration to full roof replacements with asphalt, metal, or slate options, we use premium materials and expert installation techniques for long-lasting, weather-tight protection.",
        image: img4,
    },
];

export default function Underhill() {
    return (
        <div className="bg-white text-gray-900">

            {/* HERO */}
            <section
                className="relative py-32 px-6 text-center"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Premier Home Remodeling & Roofing in Underhill, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        Top-rated remodeling, renovation, home additions, and roofing services in Underhill, VT. Quality craftsmanship, premium materials, and beautiful results that homeowners love.
                    </motion.p>

                    <motion.a
                        href="/contact-us"
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.4 }}
                        className="inline-block bg-[#c1a944] text-black px-8 py-3 rounded-xl font-semibold hover:opacity-90"
                    >
                        Get Free Quote
                    </motion.a>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-black">
                        Our Home Improvement Services in Underhill, VT
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From dream remodels to roof replacements, we offer complete home improvement solutions designed to elevate every Underhill home with style, durability, and craftsmanship.
                    </p>
                </div>

                <div className="space-y-24 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const isReverse = index % 2 !== 0;

                        return (
                            <div
                                key={service.id}
                                className="grid md:grid-cols-2 gap-12"
                            >
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className={`rounded-2xl shadow-lg ${isReverse ? "md:order-2" : ""}`}
                                    initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                />

                                <div className={`${isReverse ? "md:order-1" : ""}`}>
                                    <h3 className="text-2xl font-bold mb-4 text-black">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SERVICE AREA */}
            {/* <section className="py-20 px-6 bg-gray-100 text-center text-black">
                <h2 className="text-3xl font-bold mb-6">
                    Service Areas In and Around Underhill, VT
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We proudly provide expert home remodeling, renovation, additions, and roofing services across Underhill, VT and surrounding communities. Our local knowledge ensures every project meets Vermont's standards for durability, beauty, and lasting performance.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "Underhill",
                        "Jericho",
                        "Essex",
                        "Cambridge",
                        "Westford",
                        "Bolton",
                        "Richmond",
                    ].map((area, i) => (
                        <span
                            key={i}
                            className="bg-[#c1a944] text-black px-4 py-2 rounded-full font-medium"
                        >
                            {area}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 mt-8 max-w-xl mx-auto">
                    Live near Underhill but unsure if you're in our service area? Reach out today for a quick confirmation and a free project consultation.
                </p>
            </section> */}

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Transform Your Underhill Home?
                </h2>
                <p className="text-black mb-6">
                    Contact us today for a free consultation and let's make your home remodeling, renovation, or roofing dream a reality.
                </p>

                <a
                    href="/contact-us"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full 
                     hover:bg-white hover:text-black transition"
                >
                    Get a Quote
                </a>
            </section>

        </div>
    );
}