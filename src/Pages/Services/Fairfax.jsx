import { motion } from "framer-motion";
import img1 from "../../assets/remodeling/bathroom.jpg";
import img4 from "../../assets/roofing/img2.jpg";

const heroImg = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80";
const img2 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";
const img3 = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80";

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
        title: "Home Remodeling in Fairfax, VT",
        description:
            "Transform your Fairfax, VT home with expert remodeling services tailored to your lifestyle. From modern kitchen makeovers to luxury bathroom upgrades and complete interior transformations, our skilled team delivers premium craftsmanship using durable materials and innovative designs. We help Fairfax homeowners create stunning, functional spaces that increase property value and stand the test of time.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Home Renovation Services in Fairfax",
        description:
            "Revive your aging home with professional renovation services in Fairfax, VT. Whether you need structural repairs, modern aesthetic updates, or full interior restoration, we bring fresh life to every corner of your property. Our renovation experts combine quality materials with proven techniques to deliver beautiful, durable results that make your home feel brand new again.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Custom Home Additions in Fairfax, VT",
        description:
            "Expand your living space without leaving your beloved Fairfax neighborhood. Our custom home additions are thoughtfully designed to match your home's existing character while adding the extra space you need. From new master suites and home offices to sunrooms and second-story additions, we manage every step from blueprint to final finish.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Professional Roofing Services in Fairfax",
        description:
            "Protect your Fairfax, VT home with reliable roofing services built to handle Vermont's harsh weather conditions. From minor leak repairs to complete roof replacements, we use top-grade shingles, metal roofing, and underlayment to ensure long-lasting protection. Our certified roofers deliver safe, weatherproof, and aesthetically pleasing results every time.",
        image: img4,
    },
];

export default function Fairfax() {
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
                        Trusted Home Remodeling & Roofing Contractors in Fairfax, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        Premium home remodeling, renovation, additions, and roofing services in Fairfax, VT. We deliver expert craftsmanship, quality materials, and lasting results for every home improvement project.
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
                        Expert Home Improvement Services in Fairfax, VT
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From kitchen remodels to roof replacements, our skilled team in Fairfax delivers quality home improvement solutions designed to enhance comfort, beauty, and property value.
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
                    Proudly Serving Fairfax, VT & Surrounding Areas
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Our local home remodeling, renovation, addition, and roofing experts proudly serve Fairfax, VT and nearby communities. We understand Vermont's unique climate and architectural styles, ensuring every project meets local standards and homeowner expectations.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "Fairfax",
                        "Fairfield",
                        "St. Albans",
                        "Georgia",
                        "Westford",
                        "Milton",
                        "Cambridge",
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
                    Live near Fairfax and not sure if we cover your area? Contact us today and we'll confirm service availability and help kickstart your project.
                </p>
            </section> */}

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Upgrade Your Fairfax Home?
                </h2>
                <p className="text-black mb-6">
                    Get in touch today for a free consultation and start your home remodeling, renovation, addition, or roofing project with Fairfax's trusted experts.
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