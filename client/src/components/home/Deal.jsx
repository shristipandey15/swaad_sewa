import React, { useEffect, useState } from "react";
import BannerBg from "../../assests/Fo.jpg"; // make sure the path is correct

const HotDealSection = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

    function getTimeUntilMidnight() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(23, 59, 59, 999);
        const diff = midnight - now;

        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return { hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeUntilMidnight());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-10 md:px-20 text-center"
            style={{ backgroundImage: `url(${BannerBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-4">
                    🔥 Today's Hot Deal
                </h2>
                <p className="text-lg sm:text-xl mb-6">
                    Get 20% off on all orders until midnight!
                </p>

                {/* Countdown Timer */}
                <div className="flex justify-center gap-6 font-bold text-2xl sm:text-3xl">
                    <div className="bg-white text-orange-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col justify-center items-center shadow-lg">
                        {String(timeLeft.hours).padStart(2, "0")}
                        <span className="block text-xs font-normal">Hours</span>
                    </div>

                    <div className="bg-white text-orange-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col justify-center items-center shadow-lg text-white">
                        {String(timeLeft.minutes).padStart(2, "0")}
                        <span className="block text-xs font-normal">
                            Minutes
                        </span>
                    </div>

                    <div className="bg-white text-orange-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col justify-center items-center shadow-lg text-white">
                        {String(timeLeft.seconds).padStart(2, "0")}
                        <span className="block text-xs font-normal">
                            Seconds
                        </span>
                    </div>
                </div>

                {/* Deal Button */}
                <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300">
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default HotDealSection;
