import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { logout } from "../features/user/userRedux";
import { done } from "../features/selected";
import { past } from "../features/year";
import { useState } from "react";
const SuccessRent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { select } = useSelector((state) => state.select);

  const { years } = useSelector((state) => state.years);
  const { currentUser } = useSelector((state) => state.user);
  // eslint-disable-next-line
  let amountSent = useState((select.amount = select.amount / 4));
  // eslint-disable-next-line
  let amountPaidSent = useState((select.amountPaid = select.amount * years));

  useEffect(() => {
    // eslint-disable-next-line
    amountSent = select.amount;
    // eslint-disable-next-line
    amountPaidSent = select.amountPaid;
    const rentProduct = async () => {
      try {
        // eslint-disable-next-line
        const res = await publicRequest.put("/users/" + currentUser._id, {
          product: [
            {
              bought: [...currentUser.product[0].bought],
              rent: [...currentUser.product[0].rent, select],
            },
          ],
        });
        dispatch(logout());
      } catch (error) {
        console.log(error);
      }
    };
    const AddOrder = async () => {
      try {
        // eslint-disable-next-line
        const res = await publicRequest.post("/order", {
          name: currentUser.name,
          nameOfProductBought: select.name,
          bought: false,
          rent: true,
          amount: select.amount,
          amountPaid: select.amountPaid,
          img: select.img,
          userImg: currentUser.img
        });
      } catch (error) {
        console.log(error);
      }
    };
    AddOrder();
    rentProduct();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="container">
        <div className="succes-bought-inner">
          <p>
            {" "}
            you have successfully rented a <span>{select?.name} </span> from ab
            homes congratulations
          </p>
          <img
            src="https://www.plendify.com/assets/images/check_mark.png"
            alt="#"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              dispatch(logout());
              dispatch(done());
              dispatch(past());
            }}
          >
            back to home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessRent;
