import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Footer from "./Footer";
import Triangle from "../../assests/Triangle.png";
import HomeService from "./HomeServices";
import Deal from "./Deal";
import Choice from "./Choice";
const Home = () => {
    return (
        <>
            <Hero />
            <img
                src={Triangle}
                className=" h-[13px] w-full object-cover opacity-90"
                alt="Triangle"
            />
            <Banner />
            <HomeService />
            <Deal />
            <Choice />
            <Footer />
        </>
    );
};

export default Home;
