import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/user/userRedux";
import { done } from "../features/selected";
import { past } from "../features/year";

const Sidebar = ({
  setRent,
  setBought,
  setDashboard,
  toggle,
  setToggle,
  currentUser,
}) => {
  const [page, setPage] = useState("");
  const changePage = () => {
    if (page === "dashboard") {
      setDashboard(true);
      setRent(false);
      setBought(false);
    } else if (page === "propertyB") {
      setBought(true);
      setDashboard(false);
      setRent(false);
    } else if (page === "propertyR") {
      setRent(true);
      setBought(false);
      setDashboard(false);
    } else {
      setDashboard(true);
    }
  };
  useEffect(() => {
    changePage();
    // eslint-disable-next-line
  }, [page]);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div className="close">
          <i class="fa-solid fa-xmark" onClick={() => setToggle(!toggle)}></i>
        </div>
        <div className="side-nav-inner">
          <div className="user-details">
            <img
              src={
                currentUser.img
                  ? currentUser.img
                  : "https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
              }
              alt="#"
            />
            <div className="user-name">
              <p>mr/mrs {currentUser.name}</p>
              <p className="user-email">{currentUser.email}</p>
            </div>
          </div>
          <div className="side-nav-links">
            {/* eslint-disable-next-line */}
            <a
              href="#"
              onClick={(e) => {
                setPage("dashboard");
                setToggle(!toggle);
              }}
            >
              <i className="fa-solid fa-building-columns"></i>
              dashboard
            </a>
            <Link to="/product">
            <i className="fa-solid fa-box"></i>
            products
            </Link>
            {/* eslint-disable-next-line */}
            <a
              href="#"
              onClick={(e) => {
                setPage("propertyB");
                setToggle(!toggle);
              }}
            >
              <i className="fa-solid fa-house-chimney-user"></i>
              property bought
            </a>
            {/* eslint-disable-next-line */}
            <a
              href="#"
              onClick={(e) => {
                setPage("propertyR");
                setToggle(!toggle);
              }}
            >
              <i className="fa-solid fa-arrow-trend-down"></i>
              property on rent
            </a>
            {/* eslint-disable-next-line */}
            <a href="#">
              <i className="fa-solid fa-circle-question"></i>
              help
            </a>
            {/* eslint-disable-next-line */}
            <a
              href="#"
              onClick={() => {
                dispatch(logout());
                dispatch(done());
                dispatch(past());
              }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              log out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
