import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const Showcase = (props) => {
  const navigate = useNavigate();
  const changePage = (page) => {
    console.log(page);
    navigate(`/${page}`);
  };

  return (
    <motion.div
      className="showcase"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container">
        <div className="showcase-inner">
          <div className="showcase-inner-text">
            <motion.p
              className="showcase-heading"
              initial={{
                opacity: 0,
                y: -500,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 3, ease: [0.6, 0.01, -0.05, 0.95] }}
            >
              {props.heading}
            </motion.p>
            <motion.p
              className="showcase-text"
              initial={{
                opacity: 0,
                x: -600,
              }}
              animate={{
                opacity: 1,
                x: 0,
                type: "spring",
              }}
              transition={{ duration: 3.5, ease: [0.6, 0.01, -0.05, 0.95] }}
            >
              {props.subtext}
            </motion.p>
            <motion.p
              className="showcase-buttons"
              initial={{
               scale: 0
              }}
              animate={{
                scale: 1,
                type: "spring",
              }}
              transition={{ duration: 4, ease: [0.6, 0.01, -0.05, 0.95] }}
            >
              <button
                value="product"
                onClick={(e) => changePage(e.target.value)}
              >
                explore all offer
              </button>
              <button
                value="contact"
                onClick={(e) => changePage(e.target.value)}
              >
                contact us
              </button>
            </motion.p>
          </div>
          <div className="showcase-inner-pic">
            <div className="solid">
              <img src={props.img} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Showcase;
