import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

  // Social media links
  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100069736200173",
      label: "Visit Park Interiors on Facebook",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/park_interiorsvt",
      label: "Visit Park Interiors on Instagram",
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@ParkInteriors",
      label: "Visit Park Interiors on YouTube",
    },
  ];

  return (
    <footer className="bg-[#f2f2f2] text-gray-700" aria-label="Site footer">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Park Interiors
          </h2>
          <p className="text-md font-semibold text-gray-600 leading-relaxed mb-5">
            We deliver high-quality roofing, siding, and remodeling services
            with a focus on durability, design, and customer satisfaction.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }, i) => (

              <a key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-black text-white border border-gray-200
                           hover:bg-[#c1a944] hover:text-white transition"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-md font-semibold">
            {[
              { name: "Home", slug: "" },
              { name: "About", slug: "about-us" },
              { name: "Gallery", slug: "gallery" },
              { name: "Contact", slug: "contact-us" },
              { name: "Privacy Policy", slug: "privacy-policy" },
              { name: "Terms & Conditions", slug: "terms-and-conditions" },
              { name: "FAQ", slug: "faq" }
            ].map((item, i) => (
              <li key={i} className="hover:text-[#c1a944] transition cursor-pointer">
                <Link to={`/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-md font-semibold">
            {[
              { name: "Roofing", slug: "roofing" },
              { name: "Siding", slug: "siding" },
              { name: "Remodeling", slug: "home-remodeling" },
              { name: "Painting", slug: "painting" },
              { name: "Renovation", slug: "home-renovations" },
              { name: "Addition", slug: "home-addition" }
            ].map((service, i) => (
              <li key={i} className="hover:text-[#c1a944] transition cursor-pointer">
                <Link to={`/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-5">Contact</h3>
          <ul className="space-y-4 text-md font-semibold">

            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#c1a944]" aria-hidden="true" />

              <a href="tel:+18027770951"
                className="hover:text-[#c1a944] transition"
                aria-label="Call Park Interiors"
              >
                +1 (802) 777-0951
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#c1a944]" aria-hidden="true" />

              <a href="mailto:info@parkinteriorsvt.com"
                className="hover:text-[#c1a944] transition"
                aria-label="Email Park Interiors"
              >
                info@parkinteriorsvt.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#c1a944] mt-1" aria-hidden="true" />

              <a href="https://maps.app.goo.gl/pk5caELXTVETEhBM7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c1a944] transition"
                aria-label="View Park Interiors location on Google Maps"
              >
                Serving Chittenden County, VT
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#c1a944] text-center py-4 text-sm text-black font-medium">
        © {new Date().getFullYear()} Park Interiors LLC. All rights reserved.
      </div>
    </footer>
  );
}