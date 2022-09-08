import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Bought = () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const { select } = useSelector((state) => state.select);
  const [name, setname] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setname(select.name);
    setImages(select?.img);
    setDescription(select.description);
    setAmount(select.amount);
  }, [select]);

  const handlePay = async () => {
    try {
      const res = await publicRequest.post("/stripe/payment", {
        name,
        amount,
        description,
        images,
      });
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="innerbought">
          <div className="product-selected">
            <img src={select?.img} alt="#" />
            <div className="product-details">
              <div className="product-select-name">{select?.name}</div>
              <div className="product-select-price">
                {numberWithCommas(select?.amount)}
              </div>
            </div>
          </div>
          <div className="payment">
            <button type="submit" onClick={e => {
              e.preventDefault()
              navigate("/");
            }}>cancel</button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handlePay();
              }}
            >
              pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bought;
