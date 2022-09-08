import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initilaYear } from "../features/year";
import { publicRequest } from "../requestMethods";

const Rent = () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const dispatch = useDispatch();
  const { select } = useSelector((state) => state.select);
  const { years } = useSelector((state) => state.years);
  const [name, setname] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setname(select.name);
    setImages(select?.img);
    setDescription(select.description);
    setAmount(select.amount / 4);
    // eslint-disable-next-line
  }, []);
  const handlePay = async () => {
    try {
      const res = await publicRequest.post("/stripe/payment/rent", {
        name,
        amount,
        description,
        images,
        years,
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
                {numberWithCommas(select?.amount / 4)}
              </div>
            </div>
            <div className="years-pay">
              <p>how many years do you want to pay for:</p>
              <select onChange={(e) => dispatch(initilaYear(e.target.value))}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="payment">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              cancel
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handlePay();
              }}
            >
              rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
