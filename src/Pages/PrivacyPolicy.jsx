import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Privacy Policy | Park Interiors VT - Home Remodeling & Roofing</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Park Interiors VT. Learn how we collect, use, protect, and handle your personal information, including SMS text messaging communications, across our home remodeling, renovation, and roofing services in Vermont."
        />
        <meta
          name="keywords"
          content="Park Interiors VT privacy policy, Vermont home remodeling privacy, SMS opt-in policy, data protection, personal information, home improvement Vermont, parkinteriorsvt.com"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://parkinteriorsvt.com/privacy-policy" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Park Interiors VT" />
        <meta
          property="og:description"
          content="Learn how Park Interiors VT collects, uses, and protects your personal information across our home remodeling, renovation, and roofing services."
        />
        <meta property="og:url" content="https://parkinteriorsvt.com/privacy-policy" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Park Interiors VT" />
        <meta
          name="twitter:description"
          content="Read how Park Interiors VT protects your personal information and respects your privacy, including our SMS communications policy."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-white border-b border-gray-200">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-bold mb-4 text-black"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg max-w-2xl mx-auto"
        >
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
        </motion.p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information such as your name, email address, phone number, and any details you provide when contacting us or using our services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Your information is used to provide and improve our services, respond to inquiries, send updates, and personalize your experience. We do not sell your personal data to third parties.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">3. Data Protection</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement security measures to protect your information from unauthorized access, alteration, or disclosure. All sensitive information is stored securely.
          </p>
        </div>

        {/* NEW SECTION 4 - SMS / Text Messaging Communications */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">4. SMS / Text Messaging Communications</h2>
          <p className="text-gray-700 leading-relaxed">
            By providing your phone number through our website, chat widget, or contact forms, you consent to receive SMS text messages from Park Interiors LLC related to your inquiry, project updates, appointment reminders, follow-up communications, and occasional promotional offers. Message frequency varies. Message and data rates may apply. Consent is not a condition of any purchase. You can reply STOP at any time to unsubscribe, or HELP for assistance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, rent, or share your mobile number, SMS opt-in data, or consent information with third parties or affiliates for marketing purposes under any circumstances. Phone numbers and SMS opt-in information collected on this site will not be shared with third parties for marketing purposes. Information sharing is limited to subcontracted service providers (such as Twilio and HighLevel) that help us deliver the SMS messages on our behalf, and they are contractually required to keep this information confidential.
          </p>
          <p className="text-gray-700 leading-relaxed">
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All categories of information described in this Privacy Policy exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">5. Cookies and Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use cookies or similar technologies to improve user experience, analyze site usage, and provide relevant content.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">6. Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We may use third-party services to help provide our services or analyze website traffic. These third parties may have access to your information, but only to perform their functions and in accordance with this Privacy Policy.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">7. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or request deletion of your personal information. Contact us directly to manage your data or ask any questions regarding your privacy.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">8. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, with the effective date updated accordingly.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">9. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please <a href="/contact-us" className="text-[#c1a944] underline">contact us</a>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#c1a944] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Have Questions About Your Privacy?
        </h2>
        <p className="text-black mb-6">
          Contact us today to understand how we handle your personal information.
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