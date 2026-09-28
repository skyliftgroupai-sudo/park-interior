import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Roofing from "../assets/work/work (4).png"
import Siding from "../assets/work/work (1).png"
import Remodeling from "../assets/work/work (2).png"

export default function WhatweDo() {

    const services = [
        {
            title: "Home Remodeling",
            slug: "home-remodeling",
            description:
                "Upgrade your living space with professional home remodeling services tailored to your lifestyle. From kitchen and bathroom renovations to full interior transformations, we focus on functionality, modern design, and high-quality craftsmanship that adds long-term value to your home.",
            image: Remodeling,
        },
        {
            title: "Home Addition",
            slug: "home-addition",
            description:
                "Expand your home with custom home addition services designed to create more space without compromising style. Whether you need an extra bedroom, office, or extended living area, we ensure seamless integration with your existing structure and a smooth construction process.",
            image: Siding,
        },
        {
            title: "Roofing Services",
            slug: "roofing",
            description:
                "Protect your home with reliable roofing services including installation, repair, and full replacements. We use durable materials and proven techniques to ensure long-lasting performance, weather resistance, and improved structural integrity.",
            image: Roofing,
        },
    ];

    return (
        <section className="py-24 bg-[#f7f4e7]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="uppercase text-[#c1a944] tracking-wider text-xl mb-3">
                        Our Services
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Expert Construction & Remodeling Services
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We provide reliable construction, renovation, and exterior improvement services tailored to meet your needs. Our team focuses on quality workmanship, durable materials, and customer satisfaction.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-10 mb-16">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 text-center 
                 hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Circle Image */}
                            <div className="flex justify-center mb-6">
                                <div className="w-40 h-40 rounded-full border-4 border-[#c1a944] p-1 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-full 
                       group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                <Link to={`/${item.slug}`}>{item.title}</Link>
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-md leading-relaxed mb-6 px-2">
                                {item.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-center gap-4 flex-wrap">
                                {/* Get a Quote */}
                                <a
                                    href="tel:+1802-777-0951"
                                >
                                    <button
                                        className="inline-flex items-center gap-2 px-5 py-2.5 
                       bg-[#c1a944] text-black font-semibold rounded-full 
                       hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        Get a Quote
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </button>
                                </a>

                                {/* Explore */}
                                <Link to={`/${item.slug}`}>
                                    <button
                                        className="inline-flex items-center gap-2 px-5 py-2.5 
                       bg-black text-white font-semibold rounded-full 
                       hover:bg-[#c1a944] hover:text-black transition-all duration-300"
                                    >
                                        Explore
                                        <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}