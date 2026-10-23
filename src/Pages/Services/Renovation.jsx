import { motion } from "framer-motion";
import heroImg from "../../assets/hero/hero3.jpg";
import img1 from "../../assets/work/work1.jpg";
import img2 from "../../assets/work/work2.jpg";
import img3 from "../../assets/work/work3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function HomeRenovation() {
  return (
    <div className="bg-white">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Home Renovation Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Home Renovation Services",
              "url": "https://www.parkinteriorsvt.com",
              "image": heroImg,
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Worldwide"
              }
            },
            "description": "Professional home renovation services including full home remodeling, interior renovation, and exterior upgrades. Quality craftsmanship for residential properties.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Renovation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Home Renovation",
                    "description": "Complete home renovation including layout redesign, structural upgrades, and modern finishes."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Interior Renovation",
                    "description": "Interior remodeling for kitchens, bathrooms, flooring, and living spaces with premium finishes."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Exterior Renovation",
                    "description": "Exterior home upgrades including siding, roofing, and structural enhancements for curb appeal and durability."
                  }
                }
              ]
            }
          }) }} />

      {/* HERO */}
      <section
        className="relative py-32 px-6 text-center text-white"
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
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Expert Home Renovation Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Trusted home renovation contractors delivering full home remodeling, interior upgrades, and exterior renovations that boost comfort, style, and property value.
          </motion.p>
        </div>
      </section>

      {/* SUB SERVICES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Home Renovation Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From full home makeovers to focused interior and exterior remodeling, our renovation services bring quality craftsmanship and modern design to every part of your home.
            </p>
          </div>

          <div className="space-y-16">

            {/* FULL RENOVATION */}
            <div
              id="full-home-renovation"
              className="grid md:grid-cols-2 gap-10 scroll-mt-28"
            >
              <motion.img
                src={img1}
                alt="Full home renovation services with modern design and quality finishes"
                className="rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              />

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Full Home Renovation
                </h3>

                <p className="text-gray-600 mb-3">
                  Transform your entire property with our full home renovation services. We handle every stage of remodeling, from layout redesign and structural upgrades to premium finishes, delivering a seamless renovation experience tailored to your lifestyle and budget.
                </p>

                <p className="text-gray-600">
                  Our experienced renovation contractors focus on improving space functionality, energy efficiency, and modern aesthetics while maintaining structural integrity. From initial planning and architectural design to construction and final detailing, we deliver complete home renovation solutions that increase comfort and long-term property value.
                </p>
              </div>
            </div>

            {/* INTERIOR */}
            <div
              id="interior-renovation"
              className="grid md:grid-cols-2 gap-10 scroll-mt-28"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Interior Renovation
                </h3>

                <p className="text-gray-600 mb-3">
                  Upgrade your home interiors with modern layouts, premium finishes, and improved space planning. Our interior renovation services focus on comfort, aesthetics, and everyday functionality to create beautiful, practical living spaces that match the way you live.
                </p>

                <p className="text-gray-600">
                  From kitchen renovations and bathroom remodeling to flooring upgrades and complete interior transformations, our team ensures every detail is carefully designed and executed. We combine creative interior design with high-quality materials to deliver living spaces that reflect your personal style and elevate daily living.
                </p>
              </div>

              <motion.img
                src={img2}
                alt="Interior renovation services including kitchen and bathroom remodeling"
                className="rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              />
            </div>

            {/* EXTERIOR */}
            <div
              id="exterior-renovation"
              className="grid md:grid-cols-2 gap-10 scroll-mt-28"
            >
              <motion.img
                src={img3}
                alt="Exterior home renovation including siding, roofing, and curb appeal upgrades"
                className="rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              />

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Exterior Renovation
                </h3>

                <p className="text-gray-600 mb-3">
                  Boost curb appeal and protect your home with professional exterior renovation services. We upgrade siding, structure, and exterior finishing to deliver lasting durability, energy efficiency, and a fresh, modern appearance that stands out in any neighborhood.
                </p>

                <p className="text-gray-600">
                  Our exterior renovation solutions include siding replacement, roofing improvements, façade upgrades, and structural enhancements that elevate your home's appearance while protecting it from weather and long-term wear. Every exterior remodeling project is built to high standards of quality, performance, and longevity.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#c1a944] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Start Your Home Renovation?
        </h2>
        <p className="text-black mb-6">
          Contact our renovation experts today for a free consultation and personalized quote on your next home remodeling project.
        </p>

        <a
          href="/contact-us"
          className="inline-block bg-black text-white px-8 py-3 rounded-full 
                     hover:bg-white hover:text-black transition"
        >
          Get a Free Quote
        </a>
      </section>

    </div>
  );
}