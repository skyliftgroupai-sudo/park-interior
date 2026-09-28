import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import blogs from "./Blog/blogData";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Blog() {
    return (
        <div className="bg-white text-gray-900">

            {/* ===== SEO META TAGS ===== */}
            <Helmet>
                <title>Blog | Home Remodeling & Interior Design Tips | Park Interiors</title>
                <meta
                    name="description"
                    content="Read the Park Interiors blog for expert tips on home remodeling, renovation, and residential interior design that create comfortable, functional, and stylish living spaces."
                />
                <meta
                    name="keywords"
                    content="home remodeling blog, interior design tips, home renovation ideas, Jericho remodeling, residential interior design, Park Interiors"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.parkinteriorsvt.com/blog" />
            </Helmet>

            {/* HERO */}
            <section className="relative py-28 px-6 text-center bg-black">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                    >
                        Our Blog
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Insights, ideas, and expert advice on home remodeling, renovation,
                        and interior design from the Park Interiors team.
                    </motion.p>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="max-w-6xl mx-auto py-20 px-6">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.slug}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <Link to={`/blog/${blog.slug}`} className="block overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </Link>

                            {/* Body */}
                            <div className="flex flex-1 flex-col p-6">
                                <span className="mb-3 inline-block w-fit rounded-full bg-[#c1a944] px-3 py-1 text-xs font-semibold text-black">
                                    {blog.category}
                                </span>

                                <Link to={`/blog/${blog.slug}`}>
                                    <h2 className="text-xl font-bold leading-snug text-black transition-colors group-hover:text-[#c1a944]">
                                        {blog.title}
                                    </h2>
                                </Link>

                                <p className="mt-3 flex-1 text-gray-600 leading-relaxed">
                                    {blog.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <User size={15} className="text-[#c1a944]" />
                                        {blog.author}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={15} className="text-[#c1a944]" />
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={15} className="text-[#c1a944]" />
                                        {blog.readTime}
                                    </span>
                                </div>

                                {/* Read more */}
                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-black transition-colors hover:text-[#c1a944]"
                                >
                                    Read More
                                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#c1a944] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Ready to Start Your Project?
                </h2>
                <p className="text-black mb-6">
                    Contact us today for a free consultation and let's bring your home
                    remodeling or interior design project to life.
                </p>
                <a
                    href="/contact-us"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                    Get a Quote
                </a>
            </section>

        </div>
    );
}
