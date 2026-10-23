import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import aboutImg from "../assets/work/image3.jpeg";
import AboutSection from './AboutSection';
import CTASection from './Cta';
import { Mail, MapPin, PhoneCall } from 'lucide-react';

const ContactUs = () => {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    // Load the LeadConnector form embed script
    useEffect(() => {
        const scriptId = "leadconnector-form-script";

        // Avoid loading the script more than once
        if (document.getElementById(scriptId)) return;

        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up on unmount
            const existing = document.getElementById(scriptId);
            if (existing) existing.remove();
        };
    }, []);

    // Structured data for the Contact page
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Park Interiors",
        "url": "https://www.parkinteriorsvt.com/contact-us",
        "description": "Contact Park Interiors for professional home remodeling, roofing, siding, painting, and home addition services in Vermont. Free consultations and honest quotes.",
        "mainEntity": {
            "@type": "GeneralContractor",
            "name": "Park Interiors",
            "telephone": "+1-802-777-0951",
            "email": "info@parkinteriorsvt.com",
            "url": "https://www.parkinteriorsvt.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Underhill",
                "addressRegion": "VT",
                "postalCode": "05489",
                "addressCountry": "US"
            },
            "areaServed": {
                "@type": "State",
                "name": "Vermont"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "16:00"
                }
            ]
        }
    };

    return (
        <div className="bg-white">

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

            {/* HERO */}
            <section
                className="relative py-32 px-6 text-center text-white"
                style={{
                    backgroundImage: `url(${aboutImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                aria-label="Contact Park Interiors hero section"
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Let's Start Your Next Project
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Whether it's a kitchen remodel, roof replacement, new siding, fresh
                        paint, or a full home addition — Park Interiors is ready to guide
                        you every step of the way. Contact us today for reliable service,
                        honest pricing, and quality craftsmanship you can trust.
                    </motion.p>
                </div>
            </section>

            {/* ABOUT CONTENT */}
            {/* <AboutSection /> */}

            {/* CTA */}
            {/* <CTASection /> */}

            {/* CONTACT SECTION */}
            <section className="py-20 px-6 bg-gray-50" aria-label="Contact form and information">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* LEFT - LEADCONNECTOR FORM */}
                    <div className="bg-[#f7f4e7] shadow-lg rounded-2xl p-4 md:p-6">
                        <h2 className="text-2xl font-bold mb-4 px-2">Send Us a Message</h2>
                        <p className="text-gray-600 mb-4 px-2">
                            Fill out the form below and our team will get back to you within
                            24 hours with a free quote.
                        </p>

                        <div className="w-full" style={{ minHeight: "796px" }}>
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/bD14eSaRKCHgEdgQFruA"
                                style={{
                                    width: "100%",
                                    height: "796px",
                                    border: "none",
                                    borderRadius: "8px",
                                }}
                                id="inline-bD14eSaRKCHgEdgQFruA"
                                data-layout='{"id":"INLINE"}'
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Website Form"
                                data-height="796"
                                data-layout-iframe-id="inline-bD14eSaRKCHgEdgQFruA"
                                data-form-id="bD14eSaRKCHgEdgQFruA"
                                title="Park Interiors Contact Form"
                            />
                        </div>
                    </div>

                    {/* RIGHT - INFO */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold mb-4">
                            Let's Build Something Great Together
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Whether you're planning a kitchen renovation, roof replacement,
                            siding upgrade, or starting a new home addition, the Park
                            Interiors team is ready to help. Reach out for expert advice,
                            transparent pricing, and high-quality results you can trust.
                        </p>

                        <div className="space-y-5">

                            {/* PHONE */}

                            <a href="tel:+18027770951"
                                className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition group"
                                aria-label="Call Park Interiors at +1 802-777-0951"
                            >
                                <div className="p-3 rounded-lg bg-[#c1a944]">
                                    <PhoneCall
                                        size={20}
                                        className="text-black font-bold group-hover:scale-110 transition"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Call Us</p>
                                    <p className="text-gray-900 font-semibold group-hover:text-[#c1a944]">
                                        +1 802-777-0951
                                    </p>
                                </div>
                            </a>

                            {/* EMAIL */}

                            <a href="mailto:info@parkinteriorsvt.com"
                                className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition group"
                                aria-label="Email Park Interiors at info@parkinteriorsvt.com"
                            >
                                <div className="p-3 rounded-lg bg-[#c1a944]">
                                    <Mail
                                        size={20}
                                        className="text-black font-bold group-hover:scale-110 transition"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Email Us</p>
                                    <p className="text-gray-900 font-semibold group-hover:text-[#c1a944]">
                                        info@parkinteriorsvt.com
                                    </p>
                                </div>
                            </a>

                            {/* ADDRESS */}

                            <a href="https://maps.app.goo.gl/pk5caELXTVETEhBM7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition group"
                                aria-label="View Park Interiors location on Google Maps"
                            >
                                <div className="p-3 rounded-lg bg-[#c1a944]">
                                    <MapPin
                                        size={20}
                                        className="text-black font-bold group-hover:scale-110 transition"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Our Location</p>
                                    <p className="text-gray-900 font-semibold group-hover:text-[#c1a944]">
                                        Underhill, VT 05489
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>

                </div>
            </section>

            {/* MAP */}
            <section className="py-16 px-6 bg-white" aria-label="Park Interiors location map">
                        <div className="max-w-6xl mx-auto">
                            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288028.42045907374!2d-73.0832459!3d44.47277055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4506c8e134d1c32f%3A0x8d6af9ef6cb7ae5b!2sPark%20Interiors!5e1!3m2!1sen!2s!4v1773941013062!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title="Park Interiors Location on Google Maps"
                                />
                            </div>
                        </div>
                    </section>

            {/* MAP SECTION */}
            {/* <section className="py-16 px-6 bg-white" aria-label="Park Interiors location map">
                <div className="max-w-6xl mx-auto">
                    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288028.42045907374!2d-73.0832459!3d44.47277055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4506c8e134d1c32f%3A0x8d6af9ef6cb7ae5b!2sPark%20Interiors!5e1!3m2!1sen!2s!4v1773941013062!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                            title="Park Interiors Location on Google Maps"
                        />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default ContactUs;