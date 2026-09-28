import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Phone } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function NotFound() {
    return (
        <div className="bg-white text-gray-900">
            {/* SEO — keep 404s out of the index */}
            <Helmet>
                <title>404 — Page Not Found | Park Interiors</title>
                <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="max-w-xl mx-auto"
                >
                    {/* 404 */}
                    <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight text-[#c1a944]">
                        404
                    </h1>

                    <h2 className="mt-4 text-2xl md:text-3xl font-bold text-black">
                        Oops! Page Not Found
                    </h2>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        The page you're looking for doesn't exist, was moved, or is no
                        longer available. Let's get you back to building beautiful spaces.
                    </p>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-[#c1a944] text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
                        >
                            <Home size={18} /> Back to Home
                        </Link>

                        <a
                            href="tel:+18027770951"
                            className="inline-flex items-center gap-2 border border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
                        >
                            <Phone size={18} /> Call Us
                        </a>
                    </div>

                    {/* Quick links */}
                    <div className="mt-12">
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                            Popular Pages
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                            {[
                                { name: "About", path: "/about-us" },
                                { name: "Home Renovation", path: "/home-renovations" },
                                { name: "Roofing", path: "/roofing" },
                                { name: "Gallery", path: "/gallery" },
                                { name: "Blog", path: "/blog" },
                                { name: "Contact", path: "/contact-us" },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700 transition hover:bg-[#c1a944] hover:text-black"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
