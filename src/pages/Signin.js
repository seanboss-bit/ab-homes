import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
      <div className="login-text">
        <div className="container">
          <div className="logo-name">
            <i class="fa-solid fa-house-chimney"></i>
            <div className="logop">AB Homes</div>
          </div>
          <div className="login-title">
            <h2>Sign Up</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              recusandae ipsum distinctio iure temporibus dolore!
            </p>
          </div>
          <div className="login-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              <div className="details">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="details">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Enter Email" />
              </div>
              <div className="details">
                <i class="fa-solid fa-phone"></i>
                <input type="text" placeholder="Enter Phone Number" />
              </div>
              <div className="details">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Enter Password" />
              </div>
              <div className="forget-remeber">
                <div className="login-box">
                  <input type="checkbox" />i agree with TERMS and POLICIES
                </div>
              </div>
              <input type="submit" value="Sign In" className="form-btn" />
              <p className="not-member">
                already a member? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="login-screen">
        <img
          src="https://www.citypeopleonline.com/wp-content/uploads/2021/08/New-Skyscrappers-Spring-Up-In-IKOYI-LEKKI-BANANA-ISLAND.jpg"
          alt="#"
        />
      </div>
    </div>
  );
};

export default Signin;
