import { useEffect, useState } from "react";
import {
  Star,
  ShieldCheck,
  BadgeCheck,
  Truck,
  Percent,
  PhoneCall,
} from "lucide-react";
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg"; // replace gif with image for performance
import { Link } from "react-router-dom";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Licensed & Insured",
    text: "Fully certified for your peace of mind",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Trusted Professionals",
    text: "Experienced and reliable team",
  },
  {
    icon: <Truck size={28} />,
    title: "Fast & Reliable Service",
    text: "On-time project delivery",
  },
  {
    icon: <Percent size={28} />,
    title: "Affordable Pricing",
    text: "Quality work at fair prices",
  },
];

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
<section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[3000ms] ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transform Your Home Into Something Beautiful
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            Expert home remodeling services designed to upgrade your space with
            quality craftsmanship, modern design, and lasting value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="tel:+18027770951"
              className="w-full sm:w-auto justify-center bg-[#c1a944] hover:bg-black text-black hover:text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 border border-transparent hover:border-[#c1a944]"
            >
              <PhoneCall size={18} />
              Call Now: +1-802-777-0951
            </a>

            <Link
              to="/about-us"
              className="w-full sm:w-auto justify-center bg-black hover:bg-[#c1a944] hover:text-black text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 border border-white/20"
            >
              <Star size={18} />
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      {/* <div className="relative md:absolute md:-bottom-16 left-0 right-0 px-4 sm:px-6 mt-10 md:mt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-[#c1a944] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div> */}

    </section>
  );
}