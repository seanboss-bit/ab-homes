import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(true);
  return (
    <div className="nav-navbar">
      <div className="container">
        <div className="nav-navbr-inner">
          <div className="logo-name">
            <i class="fa-solid fa-house-chimney"></i>
            <div className="logop">AB Homes</div>
          </div>
          <div className="nav-open">
            <i
              class="fa-solid fa-bars-staggered"
              onClick={() => setOpenNav(!openNav)}
            ></i>
          </div>
          <div className={openNav ? "links" : "links active"}>
            <div className="nav-open">
              <i
                class="fa-solid fa-xmark"
                onClick={() => setOpenNav(!openNav)}
              ></i>
            </div>
            <div className="topage-link">
              <Link to="/">home</Link>
              <Link to="/product">Products</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="login-signup">
              <Link to="/login">Log in</Link>
              <Link to="/signin" className="sign-btn">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
