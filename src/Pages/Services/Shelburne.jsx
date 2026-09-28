import { motion } from "framer-motion";
import img1 from "../../assets/remodeling/kitchen.jpg";


const heroImg = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80";
// const img1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80";
const img2 = "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80";
const img3 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";
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
        title: "Luxury Home Remodeling in Shelburne, VT",
        description:
            "Transform your Shelburne, VT home with high-end remodeling services that combine sophisticated design and skilled craftsmanship. From gourmet kitchen renovations and spa-inspired bathroom upgrades to whole-home transformations, our remodeling experts use luxury finishes, smart layouts, and quality materials to create spaces that are both stunning and timeless.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Premium Home Renovation in Shelburne",
        description:
            "Restore and modernize your Shelburne home with comprehensive renovation services tailored to your vision. Whether you're updating a single space or refreshing your entire home, our team blends modern design with quality craftsmanship to deliver results that look beautiful, function flawlessly, and add real long-term value to your property.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Custom Home Additions in Shelburne, VT",
        description:
            "Need extra space without leaving the charm of Shelburne? Our custom home additions are expertly designed to complement your existing home's architecture. From spacious new bedrooms and home offices to expanded kitchens, sunrooms, and full second-story builds, we manage every step with precision and care for flawless results.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Reliable Roofing Services in Shelburne",
        description:
            "Protect your Shelburne, VT home with expert roofing services designed to handle Vermont's demanding weather. Whether you need leak repairs, storm damage restoration, or a full roof replacement using premium asphalt, metal, or slate, our certified roofers deliver durable, weatherproof roofing that enhances your home's safety and curb appeal.",
        image: img4,
    },
];

export default function Shelburne() {
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
                        Luxury Home Remodeling & Roofing in Shelburne, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        Premium remodeling, renovation, additions, and roofing services in Shelburne, VT. Beautiful design, expert craftsmanship, and lasting quality you can trust.
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
                        Our Home Improvement Services in Shelburne, VT
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From luxury remodels to weatherproof roofing, our Shelburne team delivers premium home improvement solutions designed to elevate your home's beauty, comfort, and value.
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
                    Service Areas In and Around Shelburne, VT
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We proudly serve Shelburne, VT and the surrounding communities with top-tier home remodeling, renovation, additions, and roofing services. Our experienced team delivers exceptional craftsmanship suited to Vermont homes and lifestyles.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "Shelburne",
                        "South Burlington",
                        "Burlington",
                        "Charlotte",
                        "Hinesburg",
                        "Williston",
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
                    Live near Shelburne and not sure if we serve your area? Contact us today to confirm availability and start planning your dream project.
                </p>
            </section> */}

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Transform Your Shelburne Home?
                </h2>
                <p className="text-black mb-6">
                    Reach out today for a free consultation and start your home remodeling, renovation, addition, or roofing project with Shelburne's trusted experts.
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