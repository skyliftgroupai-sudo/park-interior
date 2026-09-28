import { motion } from "framer-motion";
import img1 from "../../assets/remodeling/kitchen.jpg";
import img2 from "../../assets/remodeling/bathroom.jpg";
import img4 from "../../assets/remodeling/basement.jpg";

const heroImg = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80";
// const img1 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80";
// const img2 = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80";
const img3 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80";
// const img4 = "https://images.unsplash.com/photo-1632759145355-1f5b1f5e1b1f?w=1200&q=80";

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
        title: "Home Remodeling in Jericho, VT",
        description:
            "Elevate your Jericho, VT home with full-service remodeling that transforms the way you live. From luxurious kitchen redesigns and modern bathroom upgrades to whole-home renovations, our remodeling experts blend smart layouts, premium finishes, and quality craftsmanship to create stunning, livable spaces that boost both comfort and home value.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Home Renovation Services in Jericho",
        description:
            "Restore and refresh your Jericho home with our trusted renovation services. Whether you're updating a single room or modernizing your entire property, we handle every detail with precision — from structural repairs to elegant finishing touches. Enjoy a more beautiful, more functional, and more valuable home built to last for generations.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Custom Home Additions in Jericho, VT",
        description:
            "Need more space without leaving your favorite Jericho neighborhood? Our custom home addition services help you grow your home naturally. From new bedrooms and home offices to larger kitchens, family rooms, and second-story builds, we deliver design and construction that perfectly complements your existing home's style.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Expert Roofing Services in Jericho",
        description:
            "Keep your Jericho, VT home safe and dry with professional roofing services tailored to Vermont's harsh climate. Whether you need urgent leak repairs, storm damage restoration, or a complete roof replacement, our certified roofers use top-quality shingles, metal panels, and proven techniques for long-lasting protection.",
        image: img4,
    },
];

export default function Jericho() {
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
                        Quality Home Remodeling & Roofing in Jericho, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        Reliable remodeling, renovation, additions, and roofing services in Jericho, VT. Trusted craftsmanship, durable materials, and beautiful results for every home improvement project.
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
                        Our Home Improvement Services in Jericho, VT
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From luxury remodels to weather-tight roofing, we offer comprehensive home improvement services designed to enhance every aspect of your Jericho home.
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
                    Service Areas In and Around Jericho, VT
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We proudly serve Jericho, VT and the surrounding communities with expert home remodeling, renovation, additions, and roofing services. Our local team understands Vermont's unique building requirements and delivers reliable, high-quality results every time.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "Jericho",
                        "Underhill",
                        "Essex",
                        "Essex Junction",
                        "Richmond",
                        "Bolton",
                        "Williston",
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
                    Live near Jericho and not sure if you're in our service area? Get in touch and we'll quickly confirm and help you start planning your project.
                </p>
            </section> */}

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Renovate Your Jericho Home?
                </h2>
                <p className="text-black mb-6">
                    Contact us today for a free consultation and let's bring your home remodeling, renovation, addition, or roofing project to life.
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