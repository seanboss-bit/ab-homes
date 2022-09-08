import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const PropertyRent = ({ toggle, setToggle }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState();
  const [query, setQuery] = useState("");
  //eslint-disable-next-line
  let match = currentUser.product[0].rent.find((item) => {
    if (show === item?._id) {
      return item;
    }
  });
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <div className="container">
        <div className="rented-propeties">
          <div className="rent-heading mobile">
            <h4>rented properties</h4>
            <i
              className="fa-solid fa-bars"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
          <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Enter which Property You are Looking for By Name Or Location"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="rent-body">
            {/*eslint-disable-next-line */}
            {currentUser.product[0].rent
              .filter((propert) => {
                if (query === "") {
                  return propert;
                } else if (
                  propert.location
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                  propert.name.toLowerCase().includes(query.toLowerCase())
                ) {
                  return propert;
                }
              })
              .map((propert) => (
                <div
                  className="rent-card"
                  onClick={() => {
                    setDetail(true);
                    setShow(propert._id);
                  }}
                >
                  <div className="rent-card-img">
                    <img src={propert?.img} alt="#" />
                  </div>
                  <div className="rent-word">
                    <p className="name">{propert?.name}</p>
                    <p className="location">
                      loacation: <span>{propert?.location}</span>{" "}
                    </p>
                    <p>
                      Amount: <span>{numberWithCommas(propert?.amount)}</span>
                    </p>
                    <p>
                      Amount Paid:{" "}
                      <span>{numberWithCommas(propert?.amountPaid)}</span>
                    </p>
                    <p>
                      Amount Due:{" "}
                      <span>
                        {propert?.amountPaid >= 0
                          ? `You have paid to occupy here for ${
                              propert?.amountPaid / propert?.amount
                            } years`
                          : numberWithCommas(
                              propert?.amount - propert?.amountPaid
                            )}
                        {/* {} */}
                      </span>
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
                <img src={match?.img} alt="#" />
              </div>
              <div className="pop-up-name">{match?.name}</div>
              <div className="pop-details">
                <p>
                  <span>{match?.type.map((typ) => typ.bedroom)}</span>
                  <span>{match?.type.map((typ) => typ.toilet)}</span>
                  <span> {match?.price}</span>
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i>
                  {match?.fullAddress}
                </p>
              </div>
              <div className="pop-up-desc">
                <h3>Description</h3>
                {match?.description}
              </div>
              <h3 className="ps-2">Detail</h3>
              <div className="pop-up-slide">
                {match?.interior.map((de) => (
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

export default PropertyRent;
