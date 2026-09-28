import { Award, Users, ShieldCheck, ThumbsUp } from "lucide-react";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "300+", label: "Happy Clients" },
  { number: "100%", label: "Satisfaction Rate" },
];

const features = [
  {
    icon: <Award size={28} />,
    title: "Quality Craftsmanship",
    desc: "We focus on precision and detail to deliver long-lasting results you can rely on.",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Team",
    desc: "Our skilled professionals bring years of experience to every project we handle.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted & Reliable",
    desc: "We build trust through transparency, honesty, and consistent performance.",
  },
  {
    icon: <ThumbsUp size={28} />,
    title: "Customer Satisfaction",
    desc: "Your satisfaction is our priority, and we go the extra mile to exceed expectations.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-[#f7f4e7] text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Experience You Can Trust
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With years of hands-on experience, we deliver reliable solutions,
            quality workmanship, and results that stand the test of time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center
                         hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#c1a944] mb-1">
                {item.number}
              </h3>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 p-6 rounded-2xl
                         hover:-translate-y-2 hover:border-[#c1a944] hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg 
                              bg-[#c1a944]/10 text-[#c1a944] mb-4
                              group-hover:bg-[#c1a944] group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}