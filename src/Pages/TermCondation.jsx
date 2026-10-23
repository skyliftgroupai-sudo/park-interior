import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TermsAndConditions() {
  // Auto-formatted last updated date
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white text-gray-800 min-h-screen">

      

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-white border-b border-gray-200">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-bold mb-4 text-black"
        >
          Terms of Service
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg max-w-2xl mx-auto"
        >
          Welcome to Park Interiors LLC. By accessing or using our website (parkinteriorsvt.com) and our services, you agree to be bound by the following Terms of Service. Please read them carefully.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm mt-4"
        >
          Last updated: {lastUpdated}
        </motion.p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">1. Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Park Interiors LLC provides home remodeling, home additions, roofing, siding, painting, and related residential construction services in Vermont. All services are subject to a written estimate and agreement between Park Interiors LLC and the client.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">2. Estimates and Quotes</h2>
          <p className="text-gray-700 leading-relaxed">
            Estimates and quotes provided through our website, phone calls, or text messages are preliminary and subject to a final written agreement after on-site evaluation. Pricing may change based on project scope, materials, and site conditions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">3. Payment Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            Payment terms, deposits, and final balances will be outlined in the written agreement for each project. Failure to make timely payment may result in suspension of work and additional fees.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">4. Communications</h2>
          <p className="text-gray-700 leading-relaxed">
            By contacting us through our website, chat widget, contact forms, or phone, you agree to receive communications from Park Interiors LLC, including emails, phone calls, and SMS text messages, related to your inquiry and any ongoing work. You may opt out of SMS messages at any time by replying STOP. See our <a href="/privacy-policy" className="text-[#c1a944] underline">Privacy Policy</a> for more details.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Park Interiors LLC is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability for any claim is limited to the amount paid by the client for the specific service in question.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">6. Warranty</h2>
          <p className="text-gray-700 leading-relaxed">
            Workmanship warranties are provided in writing on a per-project basis. Manufacturer warranties on materials are passed through to the client where applicable.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">7. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms are governed by the laws of the State of Vermont. Any disputes will be resolved in the courts of Chittenden County, Vermont.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">8. Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms of Service from time to time. Updates will be posted on this page with a revised "Last updated" date.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">9. Contact Us</h2>
          <div className="text-gray-700 leading-relaxed space-y-2">
            <p className="font-semibold text-black">Park Interiors LLC</p>
            <p>Underhill, VT 05489 </p>
            <p>
              Phone:{" "}
              <a href="tel:+18027770951" className="text-[#c1a944] underline">
                +1 (802) 777-0951
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@parkinteriorsvt.com"
                className="text-[#c1a944] underline"
              >
                info@parkinteriorsvt.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#c1a944] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-black mb-6">
          Reach out today to learn more about our home improvement services.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}