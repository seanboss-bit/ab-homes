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
      <Showcase
        heading="your dream home is around the corner"
        subtext=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti debitis dolorum at dolores ex, veritatis eniquaerat culpa involuptas, quam omnis voluptatibus fugiat sapiente!"
        img="https://media.architecturaldigest.com/photos/5d77ea32d6d1d60008832cce/master/w_1333,h_2000,c_limit/GettyImages-471443271.jpg"
      />
      <WhyUs />
      <BuyRent />
      <Rating />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
