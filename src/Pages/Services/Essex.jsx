import { motion } from "framer-motion";
import img1 from "../../assets/remodeling/kitchen.jpg";


const heroImg = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80";
// const img1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80";
const img2 = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80";
const img3 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";
const img4 = "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80";

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
        title: "Home Remodeling in Essex, VT",
        description:
            "Refresh your Essex, VT home with high-quality remodeling services that combine modern design and classic Vermont charm. From contemporary kitchen remodels and elegant bathroom upgrades to full interior makeovers, our team uses premium materials and skilled craftsmanship to deliver beautiful, functional spaces that increase your home's comfort and resale value.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Trusted Home Renovation in Essex",
        description:
            "Give your older Essex home a stunning new look with our expert renovation services. Whether you're updating worn-out spaces, repairing structural issues, or refreshing the entire interior, we deliver renovations that combine durability with timeless style. Every renovation is carefully planned and professionally executed for results you'll love for years.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Home Additions in Essex, VT",
        description:
            "Need more space for your growing family in Essex? Our custom home additions are thoughtfully designed and expertly built to seamlessly extend your existing home. Whether you want a new bedroom, sunroom, larger kitchen, home office, or second-story addition, we manage every step from concept through final inspection.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Professional Roofing Services in Essex",
        description:
            "Defend your Essex, VT home from harsh weather with reliable roofing services from our certified roofing team. From minor repairs and leak fixes to complete roof replacements with asphalt shingles, metal roofing, or premium options, we use top-grade materials and proven installation methods to keep your home safe, dry, and beautiful.",
        image: img4,
    },
];

export default function Essex() {
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
                        Top-Rated Home Remodeling & Roofing in Essex, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        Expert remodeling, renovation, home additions, and roofing services in Essex, VT. Quality craftsmanship, premium materials, and dependable results that homeowners trust.
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
                        Our Home Improvement Services in Essex, VT
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From beautiful remodels to weather-resistant roofing, our Essex team provides full home improvement solutions designed to elevate your home's comfort, beauty, and value.
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
                    Service Areas In and Around Essex, VT
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We're proud to provide home remodeling, renovation, additions, and roofing services throughout Essex, VT and the surrounding communities. Our experienced local team delivers reliable craftsmanship and outstanding results tailored to Vermont homes.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "Essex",
                        "Essex Junction",
                        "Williston",
                        "Jericho",
                        "Underhill",
                        "Colchester",
                        "Winooski",
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
                    Live near Essex but unsure if we cover your location? Contact us today and we'll quickly confirm and help you get started on your home improvement project.
                </p>
            </section> */}

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Upgrade Your Essex Home?
                </h2>
                <p className="text-black mb-6">
                    Reach out today for a free consultation and start your home remodeling, renovation, addition, or roofing project with the experts Essex trusts.
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