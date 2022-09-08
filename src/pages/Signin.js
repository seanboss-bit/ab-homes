import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { publicRequest } from "../requestMethods";
import { RegisterSuccess } from "../features/user/userRedux";

const Signin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {currentUser} = useSelector(state => state.user)

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
      } catch (error) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    if(currentUser){
      navigate('/dashboard')
    }
    //eslint-disable-next-line
  }, [currentUser]);
  return (
    <div className="login">
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  registerUser();
                }}
              >
                <div className="details">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="details">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="details">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="details">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
