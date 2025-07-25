import React from "react";
import BannerBg from "../../assests/BannerBg.jpg";
import BannerRight from "../../assests/BannerRight.png";
import { motion } from "framer-motion";
import { btnClick } from "../../animations";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/opacity.css";

const Banner = () => {
    const styles = { backgroundImage: `url(${BannerBg})` };

    return (
        <section
            className="relative w-full bg-black h-[450px] md:h-[70vh] text-white flex overflow-hidden "
            id="banner"
        >
            <aside className="flex mx-auto  w-[90%] xl:w-[80%]  z-30 h-full ">
                <div className="flex flex-col h-full py-8 justify-center md:w-3/5 gap-5 px-1 sm:px-0">
                    <h3 className="text-[36px] sm:text-[44px] font-bold">
                        Enjoy Our Delicious Meal
                    </h3>
                    <h5 className="font-[poppins] text-gray-300 opacity-90  sm:text-lg lg:pr-8">
                        A restaurant is a place where people go to enjoy a meal,
                        typically with friends, family, or colleagues.
                    </h5>

                    <motion.button
                        {...btnClick}
                        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-fit px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition duration-150"
                    >
                        <Link to="/menu" className="block w-full text-center">
                            See Our Menu
                        </Link>
                    </motion.button>
                </div>

                <LazyLoadImage
                    src={BannerRight}
                    alt="Banner Right"
                    className="w-[480px] h-[480px] lg:w-[520px] lg:h-[520px] z-30 hidden md:flex mt-10 mx-auto opacity-90 object-contain p-3"
                    effect="opacity"
                />
            </aside>

            {/* background image */}
            {/* <img src={BannerBg} className="h-full w-full absolute top-0 right-0 z-0 backdrop-filter  opacity-40 blur-[1px] " alt="Banner Bg" /> */}
            <div
                className="h-full w-full  absolute top-0 right-0 z-0   opacity-30 bg-scroll bg-no-repeat md:bg-fixed bg-cover"
                alt="Banner Bg"
                style={{ ...styles }}
            />
            {}
        </section>
    );
};

export default Banner;
