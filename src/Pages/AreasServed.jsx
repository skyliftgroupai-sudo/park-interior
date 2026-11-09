import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { AREAS } from "../data/areas";

export default function AreasServed() {
  return (
    <section className="py-20 px-6 bg-gray-50" aria-label="Service areas">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve in Chittenden County, VT</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Park Interiors builds additions, finishes basements and remodels kitchens and bathrooms
          in these towns and the communities around them.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {AREAS.map((a) => (
            <li key={a.slug}>
              <Link
                to={`/${a.slug}`}
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-4 font-semibold text-gray-800 hover:border-[#c1a944] hover:text-[#a08a2c] transition"
              >
                <MapPin size={18} className="text-[#c1a944]" />
                {a.name}, VT
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
