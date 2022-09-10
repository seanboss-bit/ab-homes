import { motion } from "framer-motion";
import React from "react";
import Showcase from "./Showcase";

const AboutPage = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2, type: "spring" },
    },
  };
  return (
    <div>
      <Showcase
        img="https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        heading="about us"
        subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a cupiditate, ratione quod cum ab quas esse corrupti, necessitatibus magni perspiciatis quaerat, minima quisquam recusandae rerum. Aut rerum numquam eos!"
      />
      <div className="container">
        <div className="about-inner">
          <h1>our infatructures</h1>
          <div className="aboutus-section">
            <div className="about-us-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias ut mollitia at nesciunt explicabo corrupti aperiam?
                Officia eaque, hic error officiis distinctio, nesciunt totam
                dicta sapiente accusamus a est veritatis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam nesciunt qui nostrum
                accusantium non reiciendis consequuntur earum assumenda impedit
                ipsum veritatis laboriosam ipsam ex in incidunt, hic odit,
                cupiditate odio? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa eveniet omnis natus laboriosam, dolorum
                praesentium cupiditate fuga eius esse, expedita itaque voluptas
                ab porro odit est voluptatem beatae. Itaque, cupiditate?
              </p>
            </div>
            <div className="about-us-pic">
              <img
                src="https://smartcity.press/wp-content/uploads/2018/05/high-rise-building.jpg"
                alt="#"
              />
              <img
                src="https://images.adsttc.com/media/images/5cb0/e8f8/284d/d129/ce00/006d/large_jpg/CPH_COMMON_HOUSE_1_FRONTSIDE_VIEW_-%C2%ACTREDJE_NATUR___LENDAGER_GROUP.jpg?1555097828"
                alt="#"
              />
              <img
                src="https://architizer-prod.imgix.net/media/147339737942977d8fa6f3a7c37b42c469a3b8dcee80d.jpg?fit=max&w=1680&q=60&auto=format&auto=compress&cs=strip"
                alt="#"
              />
            </div>
          </div>
          <div className="whychooseus">
            <h2>why choose us?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              ad.
            </p>
            <motion.div
              className="whychooseus-slide"
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              <motion.div className="whychooseusbox" variants={item}>
                <i className="fa-solid fa-wallet"></i>
                <p className="whyusname">flexible payment plans</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum omnis commodi aperiam sit harum expedita quis eius,
                  libero similique ut.
                </p>
              </motion.div>
              <motion.div className="whychooseusbox" variants={item}>
                <i className="fa-regular fa-handshake"></i>
                <p className="whyusname">premium infastructure</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum omnis commodi aperiam sit harum expedita quis eius,
                  libero similique ut.
                </p>
              </motion.div>
              <motion.div className="whychooseusbox" variants={item}>
                <i className="fa-solid fa-key"></i>
                <p className="whyusname">insurance</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum omnis commodi aperiam sit harum expedita quis eius,
                  libero similique ut.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="mission-vision"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
