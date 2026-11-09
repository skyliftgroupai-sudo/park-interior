import { Link } from "react-router-dom";
import { PhoneCall, MapPin, ArrowRight } from "lucide-react";
import { SITE_URL, PHONE } from "../seo/routes";
import { cities } from "../data/cities";
import { AREAS } from "../data/areas";

const SERVICES = [
  { slug: "home-addition", name: "Home Additions" },
  { slug: "kitchen-remodeling", name: "Kitchen Remodeling" },
  { slug: "bathroom-remodeling", name: "Bathroom Remodeling" },
  { slug: "basement-finishing", name: "Basement Finishing" },
  { slug: "framing", name: "Wood & Metal Framing" },
  { slug: "drywall", name: "Drywall" },
  { slug: "flooring", name: "Flooring" },
  { slug: "painting", name: "Painting" },
];

function schemaFor(c) {
  const url = `${SITE_URL}/${c.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `General Contractor in ${c.name}, VT`,
      serviceType: "General contracting and home remodeling",
      url,
      provider: { "@type": "GeneralContractor", name: "Park Interiors", url: SITE_URL, telephone: PHONE },
      areaServed: { "@type": "City", name: `${c.name}, VT`, containedInPlace: { "@type": "AdministrativeArea", name: `${c.county}, Vermont` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: `${c.name}, VT`, item: url },
      ],
    },
  ];
}

export default function CityPage({ slug }) {
  const c = cities[slug];
  const nearby = c.nearby.map((s) => AREAS.find((a) => a.slug === s)).filter(Boolean);

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor(c)) }} />

      {/* HERO */}
      <section className="relative isolate py-28 px-6 text-white overflow-hidden" aria-label={`${c.name} hero`}>
        <img src={c.image} alt="" aria-hidden="true" width="1600" height="900" fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="absolute inset-0 bg-black/65 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm text-[#c1a944] font-semibold mb-3 flex items-center justify-center gap-2">
            <MapPin size={16} /> {c.name}, {c.county}, VT
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">General Contractor in {c.name}, VT</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">{c.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="bg-[#c1a944] text-black font-semibold px-7 py-3 rounded-full hover:bg-white transition">
              Get a Free Estimate in {c.name}
            </Link>
            <a href="tel:+18027770951" className="border border-white/40 px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black transition">
              <PhoneCall size={18} /> 802-777-0951
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Remodeling and Building in {c.name}</h2>
          {c.local.map((p, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed mb-5">{p}</p>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services in {c.name}, VT</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            One licensed, insured contractor for the whole project, from framing to final finish.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-[#c1a944] transition">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#a08a2c]">{s.name} in {c.name}</h3>
                <p className="text-gray-600 text-sm">{c.serviceNotes?.[s.slug] || `${s.name} for ${c.name} homes, priced from a written, itemized scope.`}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#a08a2c]">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR PROJECTS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Projects in {c.name}</h2>
          <ul className="space-y-4">
            {c.projects.map((p) => (
              <li key={p.title} className="border-l-4 border-[#c1a944] pl-5">
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-gray-700">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PERMITS */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#c1a944]">Permits and Practical Notes for {c.name}</h2>
          {c.permits.map((p, i) => (
            <p key={i} className="text-gray-200 text-lg leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{c.name} Remodeling FAQs</h2>
          <div className="space-y-4">
            {c.faqs.map((f) => (
              <details key={f.q} className="group border border-gray-200 rounded-xl p-5 open:bg-gray-50">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-[#c1a944] group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-gray-700 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">We Also Work Near {c.name}</h2>
          <ul className="flex flex-wrap gap-3">
            {nearby.map((a) => (
              <li key={a.slug}>
                <Link to={`/${a.slug}`} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 hover:border-[#c1a944] hover:text-[#a08a2c] transition">
                  <MapPin size={14} className="text-[#c1a944]" /> {a.name}, VT
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#c1a944] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Planning a Project in {c.name}?</h2>
        <p className="text-black mb-6 max-w-2xl mx-auto">
          Licensed and insured, with 17 five-star Google reviews. Call{" "}
          <a href="tel:+18027770951" className="font-semibold underline">802-777-0951</a> or request a free on-site estimate.
        </p>
        <Link to="/contact-us" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          Request a Free Estimate
        </Link>
      </section>
    </div>
  );
}
