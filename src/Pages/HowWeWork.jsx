import { ClipboardList, PhoneCall, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall size={32} />,
    title: "Consultation",
    description:
      "We start by understanding your needs, goals, and budget to plan the perfect solution for your project.",
  },
  {
    icon: <ClipboardList size={32} />,
    title: "Planning & Design",
    description:
      "Our team creates a clear plan with timelines, materials, and design details so you know exactly what to expect.",
  },
  {
    icon: <Hammer size={32} />,
    title: "Execution",
    description:
      "Skilled professionals handle your project with precision, ensuring high-quality workmanship at every step.",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Final Delivery",
    description:
      "We review everything with you, ensure satisfaction, and deliver a finished result that exceeds expectations.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          How We Work
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A simple, transparent process designed to deliver quality results
          without stress or surprises.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group bg-[#f9f9f9] p-8 rounded-2xl text-center 
                       hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center 
                            rounded-full bg-[#c1a944]/10 text-[#c1a944] mb-5
                            group-hover:bg-[#c1a944] group-hover:text-white 
                            transition duration-300">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}