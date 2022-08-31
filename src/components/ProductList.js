import React, { useState } from "react";
import { property } from "../data";
import { motion } from "framer-motion";

const ProductList = () => {
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState();
  //eslint-disable-next-line
  let match = property.find((item) => {
    if (show === item.id) {
      return item;
    }
  });
  return (
    <div>
      <div className="container">
        <div className="product-list-inner">
          {property.map((propert) => (
            <>
              <div
                className="product-list-box"
                onClick={() => {
                  setDetail(true);
                  setShow(propert.id);
                }}
              >
                <div className="product-img">
                  <img src={propert.img} alt="#" />
                </div>
                <div className="product-price-name">
                  <p>NGN {propert.amount}</p>
                  <p>{propert.name}</p>
                </div>
                <div className="small-details">
                  <p>
                    <i class="fa-solid fa-location-dot"></i>
                    {propert.fullAdress}
                  </p>
                  <p>
                    <i class="bi bi-arrows-angle-expand"></i>
                    {propert.size}
                  </p>
                  <p>
                    <i class="fa-solid fa-bath"></i>
                    {propert.type.map((typ) => typ.toilet)}
                  </p>
                  <p>
                    <i class="fa-solid fa-bed"></i>
                    {propert.type.map((typ) => typ.bed)}
                  </p>
                </div>
              </div>
            </>
          ))}
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
              <div className="property-button">
                  <button>buy now</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductList;
