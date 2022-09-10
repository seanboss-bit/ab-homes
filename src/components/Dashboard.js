import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Dashboard = ({ toggle, setToggle, setRent, setBought, setDashboard }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const { currentUser } = useSelector((state) => state.user);
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
  let match =
    // eslint-disable-next-line
    currentUser?.product[0].bought?.find((item) => {
      if (show === item._id) {
        return item;
      }
    }) ||
    // eslint-disable-next-line
    currentUser?.product[0].rent?.find((item) => {
      if (show === item._id) {
        return item;
      }
    });
    const arrayToSortB = [...currentUser.product[0].bought]?.sort((a,b) => a.amount - b.amount)
    const arrayToSortR = [...currentUser.product[0].rent]?.sort((a,b) => a.amountPaid - b.amountPaid)
  return (
    <div className="dash">
      <div className="p-4">
        <div className="dash-heading">
          <h2>welcome mr/mrs {currentUser.name}, happy to see you</h2>
          <i
            className="fa-solid fa-bars-staggered"
            onClick={() => setToggle(!toggle)}
          ></i>
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
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="rent-body">
            {arrayToSortR?.slice(0, 4)?.map((propert) => (
              <div
                className="rent-card"
                onClick={() => {
                  setDetail(true);
                  setShow(propert._id);
                }}
                key={propert._id}
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
                      {propert?.amountPaid >= 0 ? `You have paid to occupy here for ${propert?.amountPaid / propert?.amount} years` : numberWithCommas(propert?.amount - propert?.amountPaid)}
                      {/* {} */}
                    </span>
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
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="rent-body">
            {arrayToSortB?.slice(0, 4)?.map((propert) => (
              <div
                className="rent-card"
                onClick={() => {
                  setDetail(true);
                  setShow(propert?._id);
                }}
                key={propert?._id}
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
              <div className="pop-up-name">{match.name}</div>
              <div className="pop-details">
                <p>
                  <span>{match.type?.map((typ) => typ.bedroom)}</span>
                  <span>{match.type?.map((typ) => typ.toilet)}</span>
                  <span> {match?.price}</span>
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i>
                  {match.fullAddress}
                </p>
              </div>
              <div className="pop-up-desc">
                <h3>Description</h3>
                {match?.description}
              </div>
              <h3 className="ps-2">Detail</h3>
              <div className="pop-up-slide">
                {match.interior?.map((de) => (
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
