import React from "react";
import PhoneImage from "../../assests/Phone_img.png";

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "30,000 Restaurants Menus",
            description:
                "We’re working with many restaurants in your city to put food all in one place.",
        },
        {
            id: 2,
            title: "Easy Ordering by Phone",
            description:
                "This allows you to order quickly and easily. Accessible at any time.",
        },
        {
            id: 3,
            title: "Free Mobile Application",
            description:
                "Mobile App allows you to choose and order in a few clicks.",
        },
        {
            id: 4,
            title: "Easy Online Ordering",
            description:
                "Once logged in, you can easily navigate around the site to complete your order.",
        },
        {
            id: 5,
            title: "100% positive feedbacks",
            description:
                "We care about our customers, that is why we get 100% positive feedbacks.",
        },
        {
            id: 6,
            title: "Fast Guaranteed Delivery",
            description:
                "We take responsibility for making sure your order arrives quickly and safely.",
        },
    ];

    return (
        <section className="bg-white py-12 px-4 sm:px-10 md:px-20">
            <h2 className="text-3xl text-[#414549] font-bold text-center mb-2">
                WHY PEOPLE CHOOSE US
            </h2>
            <p className="text-center text-[#F14B23] font-semibold mb-10">
                Clients' Most Popular Choice
            </p>

            <div className="grid md:grid-cols-3 gap-10 items-center">
                {/* Left column */}
                <div className="space-y-8">
                    {features.slice(0, 3).map((item) => (
                        <div key={item.id}>
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#9AA6C3]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Center image */}
                <div className="flex justify-center">
                    <img
                        src={PhoneImage}
                        alt="Phone"
                        className="w-570 h-625 "
                    />
                </div>

                {/* Right column */}
                <div className="space-y-8">
                    {features.slice(3).map((item) => (
                        <div key={item.id}>
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#9AA6C3]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
