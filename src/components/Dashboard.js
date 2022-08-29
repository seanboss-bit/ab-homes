import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { property } from "../data";

const Dashboard = ({ toggle, setToggle, setRent, setBought, setDashboard }) => {
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState();
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

  // eslint-disable-next-line
  let match = property.find((item) => {
    if (show === item.id) {
      return item;
    }
  });
  return (
    <div className="dash">
      <div className="p-4">
        <div className="dash-heading">
          <h2>welcome mr abcde, happy to see you</h2>
          <i class="fa-solid fa-bars-staggered" onClick={() => setToggle(!toggle)}></i>
        </div>
        <div className="rented-propeties">
          <div className="rent-heading">
            <h4>rented properties</h4>
            {/* eslint-disable-next-line */}
            <a
              onClick={(e) => {
                setPage("propertyR");
              }}
            >
              see more
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="rent-body">
            {property.slice(0, 4).map((propert) => (
              <div
                className="rent-card"
                onClick={() => {
                  setDetail(true);
                  setShow(propert.id);
                }}
              >
                <div className="rent-card-img">
                  <img src={propert.img} alt="#" />
                </div>
                <div className="rent-word">
                  <p className="name">{propert.name}</p>
                  <p className="location">
                    loacation: <span>{propert.location}</span>{" "}
                  </p>
                  <p>
                    Amount: <span>{propert.amount}</span>
                  </p>
                  <p>
                    Amount Paid: <span>{propert.amountPaid}</span>
                  </p>
                  <p>
                    Amount Due: <span>{propert.amountDue}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rented-propeties">
          <div className="rent-heading">
            <h4>owned properties</h4>
             {/* eslint-disable-next-line */}
            <a
              onClick={(e) => {
                setPage("propertyB");
              }}
            >
              see more
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="rent-body">
            {property.slice(0, 4).map((propert) => (
              <div
                className="rent-card"
                onClick={() => {
                  setDetail(true);
                  setShow(propert.id);
                }}
              >
                <div className="rent-card-img">
                  <img src={propert.img} alt="#" />
                </div>
                <div className="rent-word">
                  <p className="name">{propert.name}</p>
                  <p className="location">
                    loacation: <span>{propert.location}</span>{" "}
                  </p>
                  <p>
                    Amount: <span>{propert.amount}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {detail && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.1 }}
          className="pop-up"
          onClick={() => setDetail(false)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
            className="pop-up-box"
          >
            <div>
              <div className="pop-up-mainimg">
                <img src={match.img} alt="#" />
              </div>
              <div className="pop-up-name">{match.name}</div>
              <div className="pop-details">
                <p>
                  <span>{match.type.map((typ) => typ.bed)}</span>
                  <span>{match.type.map((typ) => typ.toilet)}</span>
                  <span> {match.price}</span>
                </p>
                <p>
                  <i class="fa-solid fa-location-dot"></i>
                  {match.fullAdress}
                </p>
              </div>
              <div className="pop-up-desc">
                <h3>Description</h3>
                {match.desc}
              </div>
              <h3 className="ps-2">Detail</h3>
              <div className="pop-up-slide">
                {match.det.map((de) => (
                  <img src={de} alt="#" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
