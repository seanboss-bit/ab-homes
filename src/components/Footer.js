import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <div className="foot-logo">
              <div className="logo-name">
                <i class="fa-solid fa-house-chimney"></i>
                <div className="logop">AB Homes</div>
              </div>
            </div>
            <p className="summary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              tenetur ratione et eos veritatis sint nesciunt necessitatibus,
              ducimus nemo provident.
            </p>
          </div>
          <div className="footer-links">
            <div className="foot-box">
              <div className="main">
                {/* eslint-disable-next-line */}
                <a href="#">services</a>
              </div>
              <div className="foot-others">
                {/* eslint-disable-next-line */}
                <a href="#">get buying advice</a>
                {/* eslint-disable-next-line */}
                <a href="#">construction</a>
              </div>
            </div>
            <div className="foot-box">
              <div className="main">
                {/* eslint-disable-next-line */}
                <a href="#">about</a>
              </div>
              <div className="foot-others">
                {/* eslint-disable-next-line */}
                <a href="#">our story</a>
                {/* eslint-disable-next-line */}
                <a href="#">benefits</a>
              </div>
            </div>
            <div className="foot-box">
              <div className="main">
                {/* eslint-disable-next-line */}
                <a href="#">follow us</a>
              </div>
              <div className="foot-others icon">
                {/* eslint-disable-next-line */}
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                {/* eslint-disable-next-line */}
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                {/* eslint-disable-next-line */}
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
