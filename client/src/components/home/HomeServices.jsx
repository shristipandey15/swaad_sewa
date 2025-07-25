import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaUtensils,
    FaRegClipboard,
    FaMotorcycle,
} from "react-icons/fa";

const steps = [
    { index: 0, icon: FaMapMarkerAlt, label: "Choose Location" },
    { index: 1, icon: FaUtensils, label: "Choose Restaurant" },
    { index: 2, icon: FaRegClipboard, label: "Make Your Order" },
    { index: 3, icon: FaMotorcycle, label: "Food is on the Way" },
];

const animationDuration = 6000;

const HomeService = () => {
    const [progress, setProgress] = useState(0);
    // const navigate = useNavigate();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            pathLength: 1,
            transition: {
                duration: animationDuration / 1000,
                ease: "linear",
                repeat: Infinity,
            },
        });

        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const newProgress =
                (elapsed % animationDuration) / animationDuration;
            setProgress(newProgress);
            requestAnimationFrame(animate);
        };

        const animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [controls]);

    const stopPercent = progress < 0.5 ? 50 * (progress / 0.5) : 50;

    const activeIndex = Math.floor(progress * steps.length);

    return (
        <div className="px-6 py-12 text-gray-800 bg-white">
            <div className="max-w-4xl mx-auto space-y-4 text-center">
                <h1 className="text-4xl font-bold text-[#414549]">
                    HOW TO ORDER ?
                </h1>
                <h3 className="flex items-center justify-center text-lg font-medium text-[#F14B23] gap-2">
                    Follow the Steps
                </h3>
            </div>

            <div className="relative max-w-6xl mx-auto mt-16">
                <svg
                    viewBox="0 0 800 200"
                    preserveAspectRatio="none"
                    className="absolute top-0 left-0 z-0 hidden w-full h-40 md:block"
                >
                    <defs>
                        <linearGradient
                            id="dynamicGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#FFBD2F" />
                            <stop
                                offset={`${stopPercent}%`}
                                stopColor="#FFBD2F"
                            />
                            <stop
                                offset={`${stopPercent}%`}
                                stopColor="#FFBD2F"
                            />
                            <stop offset="100%" stopColor="#FFBD2F" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M 120 80 Q 260 10, 410 60 T 690 50"
                        stroke="url(#dynamicGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={controls}
                    />
                </svg>

                <div className="relative z-10 flex flex-col items-center justify-between gap-10 px-6 mt-20 md:flex-row">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isActive = idx <= activeIndex;

                        return (
                            <div
                                key={idx}
                                className="flex flex-col items-center w-full p-4 text-center md:w-1/4 transition-transform duration-500"
                            >
                                <div
                                    className={`w-16 h-16 mb-2 rounded-full flex items-center justify-center text-3xl shadow-xl border ${
                                        isActive
                                            ? "bg-[#FFBD2F] text-white border-[#FFBD2F]"
                                            : "bg-white text-gray-500 border-gray-200"
                                    }`}
                                >
                                    <Icon />
                                </div>
                                <h2 className="text-base font-semibold text-[#9A9A9A] mt-2">
                                    {step.label}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center mt-6">
                {/* <div
                    onClick={() => navigate("/Service")}
                    className="bg-[#F14B23] text-white px-4 py-2 w-32 rounded-md hover:bg-[#d03d1b] transition-colors duration-200 text-center cursor-pointer"
                >
                    Read More
                </div> */}
            </div>
        </div>
    );
};

export default HomeService;
