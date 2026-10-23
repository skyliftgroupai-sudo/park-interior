import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
    Calendar,
    User,
    Clock,
    ChevronDown,
    ChevronUp,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";
import blogs from "./Blog/blogData";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function BlogDetail() {
    const { slug } = useParams();
    const [openIndex, setOpenIndex] = useState(null);

    const blog = blogs.find((b) => b.slug === slug);

    // Fallback when a blog slug does not exist
    if (!blog) {
        return (
            <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-3xl font-bold text-black mb-4">Blog Not Found</h1>
                <p className="text-gray-600 mb-8">
                    Sorry, the article you're looking for doesn't exist.
                </p>
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 bg-[#c1a944] text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
                >
                    <ArrowLeft size={18} /> Back to Blog
                </Link>
            </div>
        );
    }

    // Show the 3 most recent other posts (newest are appended last in the data).
    const relatedBlogs = blogs
        .filter((b) => b.slug !== blog.slug)
        .slice(-3)
        .reverse();

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Renders paragraph text, converting any defined phrases into backlinks.
    // Internal URLs (starting with "/") use React Router; external open in a new tab.
    const renderText = (text, links) => {
        if (!links || links.length === 0) return text;

        // Build a regex that matches any of the link phrases.
        const escaped = links.map((l) =>
            l.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );
        const regex = new RegExp(`(${escaped.join("|")})`, "g");
        const parts = text.split(regex);

        return parts.map((part, i) => {
            const link = links.find((l) => l.text === part);
            if (!link) return part;

            const isInternal = link.url.startsWith("/");
            if (isInternal) {
                return (
                    <Link
                        key={i}
                        to={link.url}
                        className="font-semibold text-[#c1a944] underline underline-offset-2 hover:text-black transition-colors"
                    >
                        {part}
                    </Link>
                );
            }
            return (
                <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#c1a944] underline underline-offset-2 hover:text-black transition-colors"
                >
                    {part}
                </a>
            );
        });
    };

    return (
        <div className="bg-white text-gray-900">

            

            {/* HERO */}
            <section
                className="relative py-32 px-6 text-center"
                style={{
                    backgroundImage: `url(${blog.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="mb-4 inline-block rounded-full bg-[#c1a944] px-4 py-1 text-sm font-semibold text-black">
                        {blog.category}
                    </span>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                        {blog.title}
                    </motion.h1>

                    <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-200">
                        <span className="flex items-center gap-1.5">
                            <User size={16} className="text-[#c1a944]" />
                            {blog.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={16} className="text-[#c1a944]" />
                            {blog.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={16} className="text-[#c1a944]" />
                            {blog.readTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* ARTICLE BODY */}
            <section className="max-w-3xl mx-auto py-16 px-6">
                <article className="prose-custom">
                    {blog.content.map((block, i) => {
                        if (block.type === "h2") {
                            return (
                                <h2
                                    key={i}
                                    className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4"
                                >
                                    {block.text}
                                </h2>
                            );
                        }
                        if (block.type === "h3") {
                            return (
                                <h3
                                    key={i}
                                    className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3"
                                >
                                    {block.text}
                                </h3>
                            );
                        }
                        if (block.type === "img") {
                            return (
                                <img
                                    key={i}
                                    src={block.src}
                                    alt={block.alt}
                                    className="my-8 w-full rounded-2xl shadow-lg"
                                    loading="lazy"
                                />
                            );
                        }
                        return (
                            <p key={i} className="text-gray-700 leading-relaxed mb-5">
                                {renderText(block.text, block.links)}
                            </p>
                        );
                    })}
                </article>

                {/* Inline CTA */}
                <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
                    <h3 className="text-2xl font-bold text-black mb-3">
                        {blog.moreInfoUrl ? (
                            <a
                                href={blog.moreInfoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#c1a944] transition-colors"
                            >
                                Get More Information!
                            </a>
                        ) : (
                            "Get More Information!"
                        )}
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Contact the Park Interiors team today and start building the home
                        your family truly deserves.
                    </p>
                    <a
                        href="/contact-us"
                        className="inline-block bg-[#c1a944] text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>

            {/* FAQs */}
            {blog.faqs && blog.faqs.length > 0 && (
                <section className="max-w-3xl mx-auto pb-16 px-6">
                    <h2 className="text-3xl font-bold text-black mb-8 text-center">
                        FAQs
                    </h2>
                    <div className="space-y-4">
                        {blog.faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(i)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition"
                                >
                                    <span className="font-semibold text-lg pr-4">
                                        {faq.question}
                                    </span>
                                    {openIndex === i ? (
                                        <ChevronUp size={22} className="shrink-0 text-[#c1a944]" />
                                    ) : (
                                        <ChevronDown size={22} className="shrink-0 text-[#c1a944]" />
                                    )}
                                </button>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="px-6 py-4 border-t border-gray-200 text-gray-700"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* RELATED POSTS */}
            {relatedBlogs.length > 0 && (
                <section className="bg-gray-50 py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-black mb-10 text-center">
                            Related Articles
                        </h2>
                        <div className="grid gap-10 md:grid-cols-2">
                            {relatedBlogs.map((rel) => (
                                <article
                                    key={rel.slug}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <Link to={`/blog/${rel.slug}`} className="block overflow-hidden">
                                        <img
                                            src={rel.image}
                                            alt={rel.title}
                                            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className="flex flex-1 flex-col p-6">
                                        <Link to={`/blog/${rel.slug}`}>
                                            <h3 className="text-lg font-bold leading-snug text-black transition-colors group-hover:text-[#c1a944]">
                                                {rel.title}
                                            </h3>
                                        </Link>
                                        <p className="mt-3 flex-1 text-gray-600 leading-relaxed">
                                            {rel.excerpt}
                                        </p>
                                        <Link
                                            to={`/blog/${rel.slug}`}
                                            className="mt-5 inline-flex items-center gap-2 font-semibold text-black transition-colors hover:text-[#c1a944]"
                                        >
                                            Read More
                                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-[#c1a944] hover:text-black transition"
                            >
                                <ArrowLeft size={18} /> Back to All Blogs
                            </Link>
                        </div>
                    </div>
                </section>
            )}

        </div>
    );
}
