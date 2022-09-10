import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Login = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
        type: "spring",
      },
    },
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { currentUser, isLoading, error } = useSelector((state) => state?.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    setLoading(isLoading);
    if (email === "" || password === "") {
      toast.error("Enter the Required feilds");
    } else {
      login(dispatch, { email, password });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Wrong Email or Password");
    } else if (currentUser) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, [currentUser, error]);
  return (
    <div className="login">
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="login-text">
          <div className="container">
            <div className="logo-name">
              <i className="fa-solid fa-house-chimney"></i>
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
              <motion.form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div className="details" variants={item}>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </motion.div>
                <motion.div className="details" variants={item}>
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </motion.div>
                <motion.div className="forget-remeber" variants={item}>
                  <div className="login-box">
                    <input type="checkbox" />
                    Remember me
                  </div>
                  {/* eslint-disable-next-line */}
                  <a href="#">forgot password</a>
                </motion.div>
                <motion.input
                  type="submit"
                  value="Log in"
                  className="form-btn"
                  variants={item}
                />
                <motion.p className="not-member" variants={item}>
                  not a member yet? <Link to="/signin">Sign Up</Link>
                </motion.p>
              </motion.form>
            </div>
          </div>
        </div>
      )}
      <motion.div
        className="login-screen"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <img
          src="https://media.wired.com/photos/5932213dedfced5820d0eb60/master/w_1600%2Cc_limit/overall_vert.jpg"
          alt="#"
        />
      </motion.div>
    </div>
  );
};

export default Login;
