import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setRent, setBought, setDashboard, toggle, setToggle }) => {
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

  return (
    <div>
      <div className="container">
        <div className="close">
          <i class="fa-solid fa-xmark" onClick={() => setToggle(!toggle)}></i>
        </div>
        <div className="side-nav-inner">
          <div className="user-details">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="#"
            />
            <div className="user-name">
              <p>mr/mrs abcde</p>
              <p className="user-email">abcde@gmail.com</p>
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
              <i class="fa-solid fa-building-columns"></i>
              dashboard
            </a>
            {/* eslint-disable-next-line */}
            <a
              href="#"
              onClick={(e) => {
                setPage("propertyB");
                setToggle(!toggle);
              }}
            >
              <i class="fa-solid fa-house-chimney-user"></i>
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
              <i class="fa-solid fa-arrow-trend-down"></i>
              property on rent
            </a>
            {/* eslint-disable-next-line */}
            <a href="#">
              <i class="fa-solid fa-circle-question"></i>
              help
            </a>
            {/* eslint-disable-next-line */}
            <Link to="/">
              <i class="fa-solid fa-right-from-bracket"></i>
              log out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
