import { motion } from "framer-motion";
import { Phone, Mail, MapPin, PhoneCall } from "lucide-react";
import aboutImg from "../assets/hero/hero3.jpg";
import AboutSection from "./AboutSection";
import CTASection from "./Cta";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section
        className="relative py-32 px-6 text-center text-white"
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Building Trust Through Quality Work
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            We deliver reliable construction and remodeling services with a
            focus on quality, transparency, and long-term value.
          </motion.p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <AboutSection />

      {/* CTA */}
      <CTASection />

      {/* CONTACT SECTION */}
      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="bg-[#f7f4e7] shadow-lg rounded-2xl p-8">

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Service"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#c1a944] text-black font-semibold py-3 rounded-lg
                         hover:bg-black hover:text-white transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-4">
              Let’s Build Something Great Together
            </h3>

            <p className="text-gray-600 mb-6">
              Whether you're planning a renovation or starting a new project,
              our team is ready to help. Reach out to us for expert advice,
              transparent pricing, and high-quality results you can trust.
            </p>

            <div className="space-y-5">

              <a
                href="tel:+18027770951"
                className="flex items-center gap-4 p-4 rounded-xl
               hover:shadow-md transition group"
              >
                <div className="p-3 rounded-lg bg-[#c1a944]">
                  <PhoneCall
                    size={20}
                    className="text-black font-bold group-hover:scale-110 transition"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="text-gray-900 font-semibold group-hover:text-[#c1a944]">
                    +1 802-777-0951
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@parkinteriorsvt.com"
                className="flex items-center gap-4 p-4 rounded-xl
               hover:shadow-md transition group"
              >
                <div className="p-3 rounded-lg bg-[#c1a944]">
                  <Mail
                    size={20}
                    className="text-black font-bold group-hover:scale-110 transition"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="text-gray-900 font-semibold group-hover:text-[#c1a944]">
                    info@parkinteriorsvt.com
                  </p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/pk5caELXTVETEhBM7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl
               hover:shadow-md transition group"
              >
                <div className="p-3 rounded-lg bg-[#c1a944]">
                  <MapPin
                    size={20}
                    className="text-black font-bold group-hover:scale-110 transition"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Our Location</p>
                  <p className="text-gray-900 font-semibold group-hover:text-[#c1a944]">
                    Underhill, VT 05489
                  </p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </section> */}

    </div>
  );
}