import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Delivery from "../../assests/Delivery.png";
import HeroBg from "../../assests/Hero.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16 py-10"
            id="home"
        >
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center gap-6">
                {/* Delivery Badge */}
                <div className="flex items-center gap-3 bg-orange-100 px-3 py-2 rounded-full w-fit shadow-sm">
                    <p className="text-sm md:text-base text-orange-500 font-semibold">
                        Bike Delivery
                    </p>
                    <div className="w-9 h-9 bg-white rounded-full overflow-hidden shadow-md">
                        <img
                            src={Delivery}
                            alt="delivery"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-3xl lg:text-5xl font-bold text-[#414549] text-headingColor leading-tight">
                    The Fastest Delivery in{" "}
                    <span className="text-[#ECB132] text-4xl lg:text-6xl block mt-1">
                        Your City
                    </span>
                </h1>

                {/* Description */}
                <p className="text-base font-[poppins] text-[#5B5E5D] md:w-[80%] text-justify md:text-left">
                    Enjoy our delicious meals delivered right to your doorstep
                    with speed, quality, and taste. Order now and satisfy your
                    cravings!
                </p>

                {/* Order Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => navigate("/menu")}
                    className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-fit px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition duration-150"
                >
                    Order Now
                </motion.button>
            </div>

            {/* RIGHT CONTENT with Up-Down Animation */}
            <motion.div
                animate={{ x: [0, 20, 0] }} // left → right → center
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex items-center justify-center pt-8 relative min-h-[300px]"
                style={{ overflow: "visible" }}
            >
                <LazyLoadImage
                    src={HeroBg}
                    alt="Hero Background"
                    effect="opacity"
                    className="w-full max-w-[500px] h-auto object-contain"
                />
            </motion.div>
        </section>
    );
};

export default Home;
