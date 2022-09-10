import React from "react";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <motion.div
      className="whyus"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="why-us-inner">
          <div className="why-us-title">
            <h3>why Us</h3>
          </div>
          <div className="reasons">
            <div className="reasons-box">
              <i className="fa-solid fa-house-chimney"></i>
              <p className="title">building project</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nesciunt omnis blanditiis voluptatibus vitae aut!
              </p>
            </div>
            <div className="reasons-box">
              <i className="fa-solid fa-users"></i>
              <p className="title">top consultants</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nesciunt omnis blanditiis voluptatibus vitae aut!
              </p>
            </div>
            <div className="reasons-box">
              <i className="fa-solid fa-heart"></i>
              <p className="title">customer satisfaction</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nesciunt omnis blanditiis voluptatibus vitae aut!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
