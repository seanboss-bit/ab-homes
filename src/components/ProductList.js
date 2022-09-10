import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addUp } from "../features/selected";

const ProductList = () => {
  const navigate = useNavigate();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState();
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState();
  //eslint-disable-next-line
  let match = properties?.find((item) => {
    if (show === item._id) {
      return item;
    }
  });
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      y: 400,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 2 },
    },
  };

  const buyProduct = async () => {
    if (currentUser === null) {
      toast.error("You Need To Login First");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      dispatch(addUp(match));
      navigate("/productbuy");
    }
  };
  const rentProduct = async () => {
    if (currentUser === null) {
      toast.error("You Need To Login First");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      dispatch(addUp(match));
      navigate("/productrent");
    }
  };
  useEffect(() => {
    setLoading(true);
    const getAllProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProperties(res.data.product);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
    getAllProducts();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <motion.div
            className="product-list-inner"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {properties?.map((property) => (
              <div key={property?._id}>
                <motion.div
                  className="product-list-box"
                  onClick={() => {
                    setDetail(true);
                    setShow(property?._id);
                  }}
                  variants={item}
                >
                  <div className="product-img">
                    <img src={property?.img} alt="#" />
                  </div>
                  <div className="product-price-name">
                    <p>NGN {numberWithCommas(property.amount)}</p>
                    <p>{property?.name}</p>
                  </div>
                  <div className="small-details">
                    <p>
                      <i class="fa-solid fa-location-dot"></i>
                      {property?.fullAddress}
                    </p>
                    <p>
                      <i class="bi bi-arrows-angle-expand"></i>
                      {property?.size} sqft
                    </p>
                    <p>
                      <i class="fa-solid fa-bath"></i>
                      {property?.type.map((typ) => typ.toilet)}
                    </p>
                    <p>
                      <i class="fa-solid fa-bed"></i>
                      {property?.type.map((typ) => typ.bedroom)}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      )}
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
            <div key={match?._id}>
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
                  <i class="fa-solid fa-location-dot"></i>
                  {match?.fullAddress}
                </p>
              </div>
              <div className="pop-up-desc">
                <h3>Description</h3>
                {match?.description}
              </div>
              <h3 className="ps-2">Detail</h3>
              <div className="pop-up-slide">
                {match?.interior?.map((de) => (
                  <img src={de} alt="#" />
                ))}
              </div>
              <div className="property-button">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    buyProduct();
                  }}
                >
                  buy now
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    rentProduct();
                  }}
                >
                  rent
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductList;
