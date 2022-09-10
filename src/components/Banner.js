import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <motion.div
          className="banner-inner"
          initial={{ x: -600, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ease: [0.6, 0.01, -0.05, 0.95]}}
        >
          <div className="banner-heading">
            <p>you did not find the house you were looking for?</p>
          </div>
          <div className="banner-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            officiis illum, blanditiis minima placeat pariatur beatae id, ex
            facere a dignissimos magni. Similique, animi delectus.
          </div>
          <div className="banner-email">
            <input type="text" placeholder="Enter Your Email" />
            <button>submit</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
