import { motion } from "framer-motion";
import heroImg from "../../assets/painting/image1.jpg";
import img1 from "../../assets/remodeling/kitchen.jpg";
import img2 from "../../assets/painting/image2.webp";
import img3 from "../../assets/remodeling/basement.jpg";
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
            "Transform your home with full remodeling services in Hinesburg, VT. We redesign kitchens, bathrooms, and living spaces to improve functionality, aesthetics, and long-term value. Every project is customized to your lifestyle, with high-quality finishes and expert craftsmanship.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Home Renovation",
        description:
            "Bring new life to outdated or worn spaces with our professional home renovation services. From structural updates to modern finishes, we revitalize your home in Hinesburg and surrounding areas, ensuring it looks fresh, comfortable, and built to last.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Home Additions",
        description:
            "Need extra space? We design and build custom home additions in Hinesburg, VT. Whether it’s an extra bedroom, office, or extended living area, we create seamless additions that blend with your existing home while adding value and functionality.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Roofing Services",
        description:
            "Protect your home with reliable roofing solutions. Our services in Hinesburg include roof repairs, replacements, and new installations, designed to withstand local weather. We ensure your roof is durable, safe, and long-lasting.",
        image: img4,
    },
];

export default function HinesburgServices() {
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
                        Home Remodeling & Roofing in Hinesburg, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        We provide professional home remodeling, renovation, additions, and roofing services in Hinesburg and nearby areas. Quality craftsmanship, attention to detail, and lasting results are our promise.
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
                        Our Home Services in Hinesburg
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Complete solutions for upgrading, renovating, and protecting your home. From interior transformations to roofing, we deliver results that combine beauty, functionality, and long-term value.
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
                    Service Areas in and Around Hinesburg, VT
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We provide home remodeling, renovation, additions, and roofing services throughout Hinesburg and nearby communities. Whether you’re in the town center or surrounding neighborhoods, our team delivers high-quality, dependable work.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "Hinesburg",
                        "Burlington",
                        "South Burlington",
                        "Essex Junction",
                        "Winooski",
                        "Williston",
                        "Shelburne",
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
                    Unsure if we serve your location? Contact us and we’ll confirm quickly.
                </p>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Upgrade Your Home?
                </h2>
                <p className="text-black mb-6">
                    Reach out today to get a free consultation for your home remodeling, renovation, addition, or roofing project.
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