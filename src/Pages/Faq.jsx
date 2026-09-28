import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const faqs = [
  {
    question: "How long does a remodeling project take?",
    answer:
      "Project duration depends on size and scope. Single-room renovations may take a few days, while full-home remodeling can take several weeks.",
  },
  {
    question: "Do you offer design consultation?",
    answer:
      "Yes, we provide design consultations to help you plan layouts, choose materials, and visualize your new space.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide remodeling, renovation, home additions, and roofing services across South Burlington, Burlington, Winooski, Essex Junction, Colchester, Williston, and nearby areas.",
  },
  {
    question: "Are your materials and finishes high-quality?",
    answer:
      "Absolutely. We use durable materials and premium finishes to ensure long-lasting results and modern aesthetics.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "You can get a free quote by contacting us via our website or calling our office directly. We provide detailed estimates tailored to your project.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero */}
      <section className="py-24 px-6 text-center border-b border-gray-200">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-bold mb-4 text-black"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg max-w-2xl mx-auto"
        >
          Find answers to common questions about our home remodeling, renovation, additions, and roofing services.
        </motion.p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              {openIndex === i ? (
                <ChevronUp size={24} className="text-[#c1a944]" />
              ) : (
                <ChevronDown size={24} className="text-[#c1a944]" />
              )}
            </button>
            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 py-4 border-t border-gray-200 text-gray-700"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#c1a944] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Have More Questions?
        </h2>
        <p className="text-black mb-6">
          Contact us today for personalized answers about your home improvement project.
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