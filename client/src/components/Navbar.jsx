import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Swaad from "../assests/Logo.png";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setShowMobileMenu(false);
    }, [location.pathname]);

    // Prevent scrolling when mobile menu open
    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [showMobileMenu]);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Menu", path: "/menu" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full bg-white ">
            <div className="flex items-center justify-between w-full h-16 px-4 mx-auto lg:px-28 sm:px-6 md:h-24 2xl:px-36">
                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setShowMobileMenu((prev) => !prev)}
                        aria-label="Toggle menu"
                        className="text-gray-800 text-2xl"
                    >
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Logo + Text */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={Swaad}
                        alt="Logo"
                        className="h-20 w-auto md:h-20"
                    />
                    <div className="leading-tight">
                        <span className="block font-cobbler text-[#602F0A] text-lg md:text-2xl font-semibold">
                            SWAAD
                        </span>
                        <span className="block font-serif text-[#ECB132] text-sm md:text-xl">
                            Sewa
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 font-cobbler text-lg">
                    {navLinks.map(({ label, path }) => (
                        <Link
                            key={label}
                            to={path}
                            className={`relative px-1 transition-colors duration-300 ${
                                isActive(path) ? "text-[#ECB132]" : "text-black"
                            }`}
                        >
                            {label}
                            <span
                                className={`absolute left-0 -bottom-1 h-1 w-full bg-[#ECB132] rounded-full transition-transform duration-300 origin-left ${
                                    isActive(path)
                                        ? "scale-x-100 opacity-100"
                                        : "scale-x-0 opacity-0"
                                }`}
                            />
                        </Link>
                    ))}

                    {/* Contact button */}
                    <Link
                        to="/contact"
                        className="bg-orange-400  text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#d43c18] transition duration-300"
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Mobile Menu */}
            {showMobileMenu && (
                <nav className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 border-t border-gray-200">
                    {navLinks.map(({ label, path }) => (
                        <Link
                            key={label}
                            to={path}
                            onClick={() => setShowMobileMenu(false)}
                            className={`block text-base font-medium ${
                                isActive(path)
                                    ? "text-[#F14B23] font-semibold"
                                    : "text-gray-800"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
