import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { publicRequest } from "../requestMethods";
import { RegisterSuccess } from "../features/user/userRedux";
import { motion } from "framer-motion";

const Signin = () => {
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
        duration: 1,
        type: "spring",
      },
    },
  };
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const registerUser = async () => {
    setLoading(true);
    if (email === "" || password === "" || phone === "" || name === "") {
      toast.error("Enter the Required feilds");
      setLoading(false);
    } else {
      try {
        const res = await publicRequest.post("/users/register", {
          name: name,
          email: email,
          password: password,
          phone: phone,
        });
        dispatch(RegisterSuccess(res.data.data));
        if(res){
          setLoading(false)
        }
        console.log(res);
      } catch (error) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    if (currentUser?.isVerified) {
      navigate("/dashboard");
    }else{
      console.log('nope not allowed')
    }
    //eslint-disable-next-line
  }, [currentUser]);
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
              <h2>Sign Up</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                recusandae ipsum distinctio iure temporibus dolore!
              </p>
            </div>
            <div className="login-form">
              <motion.form
                initial="hidden"
                animate="show"
                variants={container}
                onSubmit={(e) => {
                  e.preventDefault();
                  registerUser();
                }}
              >
                <motion.div className="details" variants={item}>
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </motion.div>
                <motion.div className="details" variants={item}>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </motion.div>
                <motion.div className="details" variants={item}>
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
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
                    <input type="checkbox" />i agree with TERMS and POLICIES
                  </div>
                </motion.div>
                <motion.input variants={item} type="submit" value="Sign In" className="form-btn" />
                <motion.p className="not-member" variants={item}>
                  already a member? <Link to="/login">Login</Link>
                </motion.p>
              </motion.form>
            </div>
          </div>
        </div>
      )}
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
