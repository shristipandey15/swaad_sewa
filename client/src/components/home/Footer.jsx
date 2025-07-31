import React from "react";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-orange-400 text-white px-4 sm:px-10 md:px-16 lg:px-24 py-10 font-[Poppins] xl:px-28 2xl:px-40 mb-10 md:mb-0"
        >
            <div className="grid grid-cols-1 gap-8 mx-auto max-w-screen-2xl sm:grid-cols-2 md:grid-cols-4">
                {/* Logo and Description */}
                <div>
                    <img
                        src="/Logo.png"
                        alt="food app logo"
                        className="h-28 w-auto max-w-[180px] mb-4"
                    />
                    <p className="max-w-xs px-2 text-sm leading-relaxed sm:text-base">
                        Craving something delicious? Get your favorite meals
                        delivered hot and fresh right to your doorstep — fast,
                        easy, and reliable.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="px-2">
                    <h3 className="mb-3 text-lg font-bold sm:text-xl">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>Home</li>
                        <li>Browse Menu</li>
                        <li>Offers & Deals</li>
                        <li>Track Order</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Help & Legal */}
                <div className="px-2">
                    <h3 className="mb-3 text-lg font-bold sm:text-xl">
                        Help & Legal
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>Help Center</li>
                        <li>FAQs</li>
                        <li>Refund Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="px-2">
                    <h3 className="mb-3 text-lg font-bold sm:text-xl">
                        Contact Us
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>Butwal, Devinagar - 10</li>
                        <li>Nepal</li>
                        <li>support@fooddelivery.com</li>
                        <li>+977-9800000000</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col items-center justify-between gap-2 pt-6 mx-auto mt-10 text-sm text-center border-t border-white sm:flex-row sm:text-base sm:text-left max-w-screen-2xl">
                <p>© 2025 FoodDelivery. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
