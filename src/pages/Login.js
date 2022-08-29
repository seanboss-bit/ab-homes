import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
            <h2>Login</h2>
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
                <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Enter Email" />
              </div>
              <div className="details">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Enter Password" />
              </div>
              <div className="forget-remeber">
                <div className="login-box">
                  <input type="checkbox" />
                  Remember me
                </div>
                {/* eslint-disable-next-line */}
                <a href="#">forgot password</a>
              </div>
              <input type="submit" value="Log in" className="form-btn" />
              <p className="not-member">
                not a member yet? <Link to="/signin">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="login-screen">
        <img
          src="https://media.wired.com/photos/5932213dedfced5820d0eb60/master/w_1600%2Cc_limit/overall_vert.jpg"
          alt="#"
        />
      </div>
    </div>
  );
};

export default Login;
