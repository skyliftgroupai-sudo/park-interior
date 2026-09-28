import { motion } from "framer-motion";
import heroImg from "../../assets/painting/image1.jpg";
import img1 from "../../assets/remodeling/bathroom.jpg";
import img2 from "../../assets/painting/image2.webp";
import img3 from "../../assets/painting/image4.jpg";
import img4 from "../../assets/roofing/img2.jpg";

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
        title: "Home Remodeling",
        description:
            "Give your Milton, VT home a fresh start with full home remodeling services. From updating kitchens and bathrooms to reimagining your entire interior, we focus on smart layouts, modern finishes, and craftsmanship built to last. Our goal is to create spaces that are both functional and beautiful, adding lasting value to your property.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Home Renovation",
        description:
            "Bring new life to your older or worn spaces with professional home renovation services in Milton and nearby areas. We handle structural upgrades, aesthetic improvements, and finishing touches that make your home look modern, feel comfortable, and increase its overall value. Every project is carefully planned and executed for long-lasting results.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Home Additions",
        description:
            "Need extra space for your growing family? Our custom home additions in Milton, VT are designed to blend seamlessly with your existing home. Whether it’s a new bedroom, office, or expanded living area, we handle the design and construction from start to finish, ensuring a functional, beautiful, and durable addition.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Roofing Services",
        description:
            "Protect your home in Milton and surrounding areas with our expert roofing services. From repairs to full replacements, we use high-quality materials and proven techniques to ensure your roof stays strong, safe, and weather-resistant. Count on us for reliable, long-lasting roofing solutions tailored to your home.",
        image: img4,
    },
];

export default function Milton() {
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
                        Home Remodeling & Roofing in Milton, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        We provide trusted remodeling, renovation, additions, and roofing
                        services throughout Milton, VT and nearby communities. Our focus is on quality, durability, and results that last.
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
                        Our Services in Milton, VT
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer full home improvement services to enhance your space, increase functionality, and improve property value.
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
            <section className="py-20 px-6 bg-gray-100 text-center text-black">
                <h2 className="text-3xl font-bold mb-6">
                    Service Areas in and Around Milton, VT
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We proudly provide home remodeling, renovation, additions, and roofing
                    services throughout Milton, VT and nearby communities. Our team is experienced with local building needs and delivers dependable, high-quality results.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "Milton",
                        "Colchester",
                        "Burlington",
                        "South Burlington",
                        "Essex Junction",
                        "Winooski",
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
                    If you're near Milton and unsure if we serve your area, contact us. We'll confirm promptly and help you start your project.
                </p>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Renovate Your Milton Home?
                </h2>
                <p className="text-black mb-6">
                    Reach out today for a free consultation and begin your home remodeling, renovation, or roofing project.
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