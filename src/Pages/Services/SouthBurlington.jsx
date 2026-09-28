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
            "Transform your home with complete remodeling services in Burlington, VT and surrounding areas. We redesign and upgrade living spaces to match your lifestyle, improving layout, flow, and functionality. From kitchens and bathrooms to full interior transformations, our team focuses on quality craftsmanship, modern finishes, and long-term value. Whether you're updating a single room or your entire home, we deliver results that feel fresh, comfortable, and built to last.",
        image: img1,
    },
    {
        id: "home-renovation",
        title: "Home Renovation",
        description:
            "Revitalize outdated or worn spaces with professional home renovation services across Burlington and nearby communities. We handle everything from structural updates to aesthetic improvements, ensuring your home looks modern while staying strong and efficient. Our renovation process includes careful planning, high-quality materials, and attention to detail, helping homeowners increase property value while creating a space they truly enjoy living in.",
        image: img2,
    },
    {
        id: "home-additions",
        title: "Home Additions",
        description:
            "Expand your living space with custom home additions designed and built in Burlington, VT and surrounding areas. Whether you need an extra bedroom, office, or extended living area, we create seamless additions that blend perfectly with your existing home. Our team manages everything from design to construction, ensuring the new space feels natural, functional, and adds long-term value to your property.",
        image: img3,
    },
    {
        id: "roofing",
        title: "Roofing Services",
        description:
            "Protect your home with dependable roofing services in Burlington, VT and nearby areas. We provide roof repairs, replacements, and new installations designed to withstand local weather conditions. Using durable materials and proven techniques, our team ensures your roof remains strong, safe, and long-lasting. Whether you're dealing with damage or planning an upgrade, we deliver reliable roofing solutions that give you peace of mind.",
        image: img4,
    },
];

export default function SouthBurlington() {
    return (
        <div className="bg-white text-white">

            {/* HERO */}
            <section
                className="relative py-32 px-6 text-center"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Home Remodeling & Roofing in South Burlington, VT
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-white text-lg mb-8"
                    >
                        We provide professional remodeling, renovation, additions, and roofing
                        services across South Burlington, VT and surrounding areas. Built for quality,
                        durability, and long-term value.
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
                        Our Services in South Burlington, VT
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer complete home improvement services designed to upgrade your
                        space, improve functionality, and increase property value.
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
                                    className={`rounded-2xl shadow-lg ${isReverse ? "md:order-2" : ""
                                        }`}
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
                    Service Areas in and Around South Burlington, VT
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We proudly provide home remodeling, renovation, additions, and roofing
                    services throughout South Burlington, VT and nearby communities. Whether
                    you're located in the city or surrounding areas, our team is ready to
                    deliver reliable, high-quality results tailored to your needs.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {[
                        "South Burlington",
                        "Burlington",
                        "Winooski",
                        "Essex Junction",
                        "Colchester",
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
                    If you're located near South Burlington and unsure if we cover your area,
                    reach out to us. We're happy to confirm and assist with your project.
                </p>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Renovate Your Home?
                </h2>
                <p className="text-black mb-6">
                    Contact us today to get a free consultation and start your renovation journey.
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