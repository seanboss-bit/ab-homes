import React from "react";
import { useNavigate } from "react-router-dom";

const Showcase = (props) => {
  const navigate = useNavigate();
  const changePage = (page) => {
    console.log(page);
    navigate(`/${page}`);
  };

  return (
    <div className="showcase">
      <div className="container">
        <div className="showcase-inner">
          <div className="showcase-inner-text">
            <p className="showcase-heading">{props.heading}</p>
            <p className="showcase-text">{props.subtext}</p>
            <p className="showcase-buttons">
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
            </p>
          </div>
          <div className="showcase-inner-pic">
            <div className="solid">
              <img src={props.img} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
