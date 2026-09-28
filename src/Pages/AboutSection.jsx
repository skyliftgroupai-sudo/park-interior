import Heroimg from '../assets/hero/hero.jpg';
import Logo from "../assets/park-interior.png"
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image + Logo */}
        <div className="relative">
          <img
            src={Heroimg}
            alt="Kitchen Remodeling"
            className="rounded-2xl w-full h-[650px] object-cover shadow-lg"
          />

          {/* Logo Overlay */}
          {/* <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-md">
            <img src={Logo} alt="logo" className="h-14 w-auto" />
          </div> */}
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Crafting Beautiful Homes With Precision & Care
          </h2>

          <p className="text-[#c1a944] font-medium text-sm sm:text-base mb-4">
            Serving homeowners with excellence since 2014
          </p>

          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
            With decades of experience in home remodeling and construction, we bring your vision to life with unmatched craftsmanship and attention to detail. From modern kitchens to full home renovations, every project is built with quality, transparency, and lasting value in mind.
          </p>

          <h3 className="text-[#c1a944] font-semibold text-lg mb-2">
            Trusted. Reliable. Local.
          </h3>

          <p className="text-gray-600 mb-6">
            As a locally owned company, we take pride in delivering honest service, clear communication, and results that exceed expectations. Your home deserves nothing but the best—and that’s exactly what we deliver.
          </p>

          <Link to="/about-us">
            <button className="bg-[#c1a944] hover:bg-black text-black hover:text-white text-lg font-bold px-6 py-2 px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all duration-300 border hover:border-[#c1a944]">
              Learn More
              <ArrowRight size={18} />
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}