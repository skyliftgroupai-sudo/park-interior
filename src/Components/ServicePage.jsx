import { Link } from "react-router-dom";
import { PhoneCall, CheckCircle2 } from "lucide-react";
import { SITE_URL, PHONE } from "../seo/routes";
import { servicePages } from "../data/servicePages";

const AREAS = [
  ["Burlington", "burlington-vt"],
  ["South Burlington", "south-burlington-vt"],
  ["Essex", "essex-vt"],
  ["Colchester", "colchester-vt"],
  ["Shelburne", "shelburne-vt"],
  ["Jericho", "jericho-vt"],
  ["Underhill", "underhill-vt"],
  ["Milton", "milton-vt"],
  ["Richmond", "richmond-vt"],
  ["Hinesburg", "hinesburg-vt"],
  ["Fairfax", "fairfax-vt"],
];

function schemaFor(page) {
  const url = `${SITE_URL}/${page.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.serviceName,
      serviceType: page.serviceName,
      url,
      description: page.intro,
      provider: {
        "@type": "GeneralContractor",
        name: "Park Interiors",
        url: SITE_URL,
        telephone: PHONE,
      },
      areaServed: AREAS.map(([name]) => ({ "@type": "City", name: `${name}, VT` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.serviceName, item: url },
      ],
    },
  ];
}

export default function ServicePage({ slug }) {
  const page = servicePages[slug];
  const related = page.related.map((s) => servicePages[s] || { slug: s, serviceName: s });

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor(page)) }}
      />

      {/* HERO */}
      <section className="relative isolate py-28 px-6 text-white overflow-hidden" aria-label={`${page.serviceName} hero`}>
        <img
          src={page.image}
          alt=""
          aria-hidden="true"
          width="1600"
          height="900"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/65 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm text-[#c1a944] font-semibold mb-3">
            Park Interiors · Chittenden County, VT
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{page.h1}</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">{page.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-[#c1a944] text-black font-semibold px-7 py-3 rounded-full hover:bg-white transition"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+18027770951"
              className="border border-white/40 px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
            >
              <PhoneCall size={18} /> 802-777-0951
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{page.offeringsTitle}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">{page.offeringsIntro}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.offerings.map((o) => (
              <article key={o.title} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-2">{o.title}</h3>
                <p className="text-gray-600">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VERMONT-SPECIFIC */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{page.localTitle}</h2>
          {page.localBody.map((p, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed mb-5">{p}</p>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">How a {page.processNoun} Works With Park Interiors</h2>
          <ol className="space-y-6">
            {page.process.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex-none w-10 h-10 rounded-full bg-[#c1a944] text-black font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COST */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Affects the Cost of {page.costNoun}?</h2>
          <p className="text-gray-700 text-lg mb-6">{page.costIntro}</p>
          <ul className="space-y-3">
            {page.costFactors.map((c) => (
              <li key={c} className="flex gap-3 text-gray-700">
                <CheckCircle2 className="flex-none text-[#c1a944] mt-1" size={20} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          {page.costLink && (
            <p className="mt-6 text-gray-700">
              Want real numbers? Read our guide:{" "}
              <Link to={page.costLink.to} className="text-[#a08a2c] font-semibold underline">
                {page.costLink.label}
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#c1a944]">Licensed &amp; Insured</p>
            <p className="text-gray-300 mt-2">Fully covered on every job, from framing to final finish.</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#c1a944]">17 Five-Star Reviews</p>
            <p className="text-gray-300 mt-2">Rated 5 stars by homeowners on Google.</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#c1a944]">One Contractor</p>
            <p className="text-gray-300 mt-2">Framing, drywall, paint and flooring under one contract.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{page.serviceName} FAQs</h2>
          <div className="space-y-4">
            {page.faqs.map((f) => (
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

      {/* AREAS + RELATED */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">{page.serviceName} Across Chittenden County</h2>
            <p className="text-gray-600 mb-4">
              We work throughout northern Vermont, including:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {AREAS.map(([name, s]) => (
                <li key={s}>
                  <Link to={`/${s}`} className="text-gray-800 hover:text-[#a08a2c] underline-offset-4 hover:underline">
                    {name}, VT
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Related Services</h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={`/${r.slug}`} className="text-gray-800 hover:text-[#a08a2c] underline-offset-4 hover:underline">
                    {r.serviceName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#c1a944] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{page.ctaTitle}</h2>
        <p className="text-black mb-6 max-w-2xl mx-auto">
          Tell us about your project and we’ll set up a free on-site estimate. Call{" "}
          <a href="tel:+18027770951" className="font-semibold underline">802-777-0951</a> or send a request online.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Request a Free Estimate
        </Link>
      </section>
    </div>
  );
}
