import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import ctaBg from "../assets/hero/hero3.jpg";

export default function CTASection() {
    return (
        <section
            className="relative py-20 px-6 overflow-hidden"
            style={{
                backgroundImage: `url(${ctaBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Ready to Transform Your Home?
                </h2>

                <p className="text-gray-300 text-base md:text-lg mb-8">
                    From roofing and siding to full remodeling, our team delivers quality
                    craftsmanship you can trust. Let’s bring your vision to life with a
                    free consultation today.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {/* Call Button */}
                    <a href="tel:+18027770951">
                        <button
                            className="inline-flex items-center gap-2 px-6 py-3 
                         bg-[#c1a944] text-black font-semibold rounded-full 
                         hover:bg-black hover:text-white transition-all duration-300"
                        >
                            <PhoneCall size={18} />
                            Call Now
                        </button>
                    </a>

                    {/* Contact Button */}
                    <Link to="/contact-us">
                        <button
                            className="inline-flex bg-black items-center gap-2 px-6 py-3 
                         text-white font-semibold rounded-full 
                         hover:bg-[#c1a944] hover:text-black transition-all duration-300"
                        >
                            Contact Us
                            <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}