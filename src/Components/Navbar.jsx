import { useState, useEffect } from "react";
import {
    MapPin, ChevronDown, PhoneCall, Mail, X, Menu, ChevronRight,
    Facebook,
    Instagram,
    Youtube
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/park-interior.png";
import QuotePopup from "./QuotePopup";


export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [quotePopup, setQuotePopup] = useState(false);

    // Auto-open popup when user first visits the website
    useEffect(() => {
        const timer = setTimeout(() => {
            setQuotePopup(true);
        }, 3000); // 3 second delay before auto-popup

        return () => clearTimeout(timer);
    }, []);

    // Lock background scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenu]);

    const services = [
        {
            title: "Home Renovation",
            slug: "home-renovations",
            subServices: [
                { title: "Full Home Renovation", id: "full-home-renovation" },
                { title: "Interior Renovation", id: "interior-renovation" },
                { title: "Exterior Renovation", id: "exterior-renovation" },
            ],
        },
        {
            title: "Home Remodeling",
            slug: "home-remodeling",
            subServices: [
                { title: "Kitchen Remodeling", id: "kitchen-remodeling" },
                { title: "Bathroom Remodeling", id: "bathroom-remodeling" },
                { title: "Basement Remodeling", id: "basement-remodeling" },
            ],
        },
        {
            title: "Home Additions",
            slug: "home-addition",
            subServices: [
                { title: "Room Additions", id: "room-addition" },
                { title: "Second Floor Additions", id: "second-floor" },
                { title: "Garage Additions", id: "garage-addition" },
            ],
        },
        {
            title: "Roofing",
            slug: "roofing",
            subServices: [
                { title: "Roof Installation", id: "roof-installation" },
                { title: "Roof Repair", id: "roof-repair" },
                { title: "Roof Replacement", id: "roof-replacement" },
                { title: "Architectural Shingles", id: "architectural-shingles" },
                { title: "Roof Coatings", id: "roof-coating" },
            ],
        },
        {
            title: "Siding",
            slug: "siding",
            subServices: [
                { title: "Siding Installation", id: "siding-installation" },
                { title: "Siding Repair", id: "siding-repair" },
                { title: "Vinyl Siding", id: "vinyl-siding" },
            ],
        },
        {
            title: "Painting",
            slug: "painting",
            subServices: [
                { title: "Interior Painting", id: "interior-painting" },
                { title: "Exterior Painting", id: "exterior-painting" },
                { title: "Commercial Painting", id: "commercial-painting" },
            ],
        },
    ];

    const area = [
        { title: "Burlington, VT", slug: "burlington-vt" },
        { title: "South Burlington, VT", slug: "south-burlington-vt" },
        { title: "Milton, VT", slug: "milton-vt" },
        { title: "Richmond, VT", slug: "richmond-vt" },
        { title: "Hinesburg, VT", slug: "hinesburg-vt" },
        { title: "Colchester, VT", slug: "colchester-vt" },
        { title: "Fairfax, VT", slug: "fairfax-vt" },
        { title: "Underhill, VT", slug: "underhill-vt" },
        { title: "Jericho, VT", slug: "jericho-vt" },
        { title: "Essex, VT", slug: "essex-vt" },
        { title: "Shelburne, VT", slug: "shelburne-vt" },
    ];


    return (
        <>
            {/* TOP INFO BAR */}
            <div className="hidden md:flex justify-between items-center px-8 py-3 bg-black text-sm">

                {/* LEFT - Contact Info */}
                <div className="flex items-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-white" aria-hidden="true" />
                        <span>Underhill, VT 05489</span>
                    </div>


                    <a href="tel:+18027770951"
                        className="flex items-center gap-2 hover:text-[#c1a944] transition-colors"
                        aria-label="Call Park Interiors"
                    >
                        <PhoneCall size={18} className="text-white" aria-hidden="true" />
                        <span>+1-802-777-0951</span>
                    </a>


                    <a href="mailto:info@parkinteriorsvt.com"
                        className="flex items-center gap-2 hover:text-[#c1a944] transition-colors"
                        aria-label="Email Park Interiors"
                    >
                        <Mail size={18} className="text-white" aria-hidden="true" />
                        <span>info@parkinteriorsvt.com</span>
                    </a>
                </div>

                {/* RIGHT - Social Icons + CTA */}
                <div className="flex items-center gap-5">

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">


                        <a href="https://www.facebook.com/profile.php?id=100069736200173"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Park Interiors on Facebook"
                            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-[#c1a944] text-black border border-transparent
                       transition-all duration-300
                       hover:bg-black hover:text-white hover:border-[#c1a944]
                       hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <Facebook size={20} aria-hidden="true" />
                        </a>


                        <a href="https://www.instagram.com/park_interiorsvt"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Park Interiors on Instagram"
                            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-[#c1a944] text-black border border-transparent
                       transition-all duration-300
                       hover:bg-black hover:text-white hover:border-[#c1a944]
                       hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <Instagram size={20} aria-hidden="true" />
                        </a>


                        <a href="https://www.youtube.com/@ParkInteriors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Park Interiors on YouTube"
                            className="w-9 h-9 flex items-center justify-center rounded-full
                       bg-[#c1a944] text-black border border-transparent
                       transition-all duration-300
                       hover:bg-black hover:text-white hover:border-[#c1a944]
                       hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <Youtube size={20} aria-hidden="true" />
                        </a>
                    </div>

                    {/* Divider */}
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>

                    {/* CTA Button - Opens Popup */}
                    {/* <button
                        onClick={() => setQuotePopup(true)}
                        className="bg-[#c1a944] text-black text-lg font-bold px-6 py-2 rounded-full shadow-md border border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-[#c1a944] hover:shadow-xl hover:-translate-y-0.5"
                        aria-label="Get a free quote — open form"
                    >
                        Get a Quote
                    </button> */}

                    <button
                        onClick={() => { window.location.href = "tel:+18027770951"; }}
                        className="bg-[#c1a944] text-black text-lg font-bold px-6 py-2 rounded-full shadow-md border border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-[#c1a944] hover:shadow-xl hover:-translate-y-0.5"
                        aria-label="Call us at +1 (802) 777-0951"
                    >
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <div className="bg-white text-black sticky top-0 z-40 backdrop-blur-md shadow-lg">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-4">                    {/* Logo */}

                    <div className="flex justify-start">
                        <NavLink to="/" className="flex items-center gap-3">

                            <img
                                src={Logo}
                                alt="Park-interiors"
                                className="w-20 h-20 sm:w-28 sm:h-28 object-contain transition-transform duration-300 hover:scale-105"
                            />

                            {/* Hide text on mobile */}
                            <div className="hidden sm:block leading-tight">
                                <div className="text-2xl font-bold tracking-wide">
                                    Park Interiors
                                </div>
                                <div className="text-md font-semibold text-[#c1a944]">
                                    Home Renovations
                                </div>
                            </div>

                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center justify-center gap-8 relative font-medium">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about-us" },
                        ].map((item) => (
                            <li key={item.name} className="relative cursor-pointer group">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#c1a944]"
                                            : "group-hover:text-[#c1a944] transition"
                                    }
                                >
                                    {item.name}
                                </NavLink>

                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c1a944] transition-all group-hover:w-full"></span>
                            </li>
                        ))}

                        {/* Services Dropdown */}
                        <li className="relative group cursor-pointer">
                            <div className="flex items-center gap-1">
                                Services <ChevronDown size={16} />
                            </div>

                            {/* Main Dropdown */}
                            <div className="absolute top-full left-0 mt-2 bg-white w-64 shadow-2xl rounded-lg p-2 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
    transition-all duration-200">

                                {services.map((service, i) => (
                                    <div key={i} className="relative group/sub">

                                        {/* Main Service */}
                                        <NavLink
                                            to={`/${service.slug}`}
                                            className="flex justify-between items-center px-3 py-2 text-sm font-medium 
                     hover:bg-gray-100 hover:text-[#c1a944]  rounded-md"
                                        >
                                            {service.title}
                                            {service.subServices && <ChevronRight size={14} />}
                                        </NavLink>

                                        {/* Submenu */}
                                        {service.subServices && (
                                            <div className="absolute top-0 left-full ml-2 bg-white w-56 shadow-xl rounded-lg p-2
            opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible
            transition-all duration-200">

                                                {service.subServices.map((sub, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={`/${service.slug}#${sub.id}`}
                                                        className="block px-3 py-2 text-sm text-gray-700 
           hover:bg-gray-100 hover:text-[#c1a944] 
           rounded-md transition-all duration-200"
                                                    >
                                                        {sub.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}

                                    </div>
                                ))}

                            </div>
                        </li>

                        <li className="relative group cursor-pointer">
                            <div className="flex items-center gap-1">
                                Areas <ChevronDown size={16} />
                            </div>

                            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 w-60 shadow-2xl rounded-lg p-4 space-y-2 
  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
  transition-all duration-200">

                                {area.map((area, i) => (
                                    <NavLink
                                        key={i}
                                        to={`/${area.slug}`}
                                        className={({ isActive }) =>
                                            `block text-sm font-medium transition ${isActive
                                                ? "text-[#c1a944]"
                                                : "text-gray-800 hover:text-[#c1a944]"
                                            }`
                                        }
                                    >
                                        {area.title}
                                    </NavLink>
                                ))}
                            </div>
                        </li>
                        {[
                            { name: "Gallery", path: "/gallery" },
                            { name: "Blog", path: "/blog" },
                            { name: "Contact", path: "/contact-us" },
                        ].map((item) => (
                            <li key={item.name} className="relative cursor-pointer group">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#c1a944]"
                                            : "group-hover:text-[#c1a944] transition"
                                    }
                                >
                                    {item.name}
                                </NavLink>

                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c1a944] transition-all group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <div className="flex justify-end md:hidden">
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="text-2xl text-black"
                        >
                            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenu && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 px-6 py-6 flex flex-col overflow-y-auto">
                        <div>
                            <div className="flex items-center justify-between mb-8">

                                <NavLink to="/" onClick={() => setMobileMenu(false)}>
                                    <img src={Logo} alt="logo" className="h-24 w-24" />
                                </NavLink>

                                <button onClick={() => setMobileMenu(false)}>
                                    <X size={28} color="red" />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <div className="space-y-5 text-lg font-medium text-black">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About", path: "/about-us" },
                                    { name: "Home Renovation", path: "/home-renovations" },
                                    { name: "Home Remodeling", path: "/home-remodeling" },
                                    { name: "Home Additions", path: "/home-addition" },
                                    { name: "Roofing", path: "/roofing" },
                                    { name: "Siding", path: "/siding" },
                                    { name: "Painting", path: "/painting" },
                                    { name: "Gallery", path: "/gallery" },
                                    { name: "Blog", path: "/blog" },
                                    { name: "Contact", path: "/contact-us" },
                                ].map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-[#c1a944] block"
                                                : "hover:text-[#c1a944] transition block"
                                        }
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA - Opens Popup */}
                        <div className="mt-8">
                            <button
                                onClick={() => {
                                    setMobileMenu(false);
                                    window.location.href = "tel:+18027770951";
                                }}
                                className="w-full bg-[#c1a944] text-black font-semibold py-3 rounded-full shadow-md border border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-[#c1a944] hover:shadow-lg"
                            >
                                Get a Quote
                            </button>
                        </div>

                    </div>
                )}
            </div>

            {/* QUOTE POPUP - Imported from separate component */}
            <QuotePopup
                isOpen={quotePopup}
                onClose={() => setQuotePopup(false)}
            />
        </>
    );
}