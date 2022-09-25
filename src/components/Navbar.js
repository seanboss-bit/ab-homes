import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [openNav, setOpenNav] = useState(true);
  return (
    <div className="nav-navbar">
      <div className="container">
        <div className="nav-navbr-inner">
          <div className="logo-name">
            <i className="fa-solid fa-house-chimney"></i>
            <div className="logop">AB Homes</div>
          </div>
          <div className="nav-open">
            <i
              className="fa-solid fa-bars-staggered"
              onClick={() => setOpenNav(!openNav)}
            ></i>
          </div>
          <div className={openNav ? "links" : "links active"}>
            <div className="nav-open">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setOpenNav(!openNav)}
              ></i>
            </div>
            <div className="topage-link">
              <Link to="/">home</Link>
              <Link to="/product">Products</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            {currentUser === null ||
            currentUser.message === "A Confirmation Email Has Been Sent!!!" ? (
              <div className="login-signup">
                <Link to="/login">Log in</Link>
                <Link to="/signin" className="sign-btn">
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="current-user">
                <img
                  onClick={() => navigate("/dashboard")}
                  src={
                    currentUser.img
                      ? currentUser.img
                      : "https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
                  }
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
