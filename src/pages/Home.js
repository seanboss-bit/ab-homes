import React from "react";
import Banner from "../components/Banner";
import BuyRent from "../components/BuyRent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Rating from "../components/Rating";
import Showcase from "../components/Showcase";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <WhyUs />
      <BuyRent />
      <Rating />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
