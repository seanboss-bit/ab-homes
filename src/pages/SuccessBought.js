import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { logout } from "../features/user/userRedux";
import { done } from "../features/selected";
import { toast } from "react-toastify";

const SuccessBought = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { select } = useSelector((state) => state.select);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const updateAfterSuccess = async () => {
      if (currentUser !== null) {
        try {
          // eslint-disable-next-line
          const res = await publicRequest.put("/users/" + currentUser._id, {
            product: [
              {
                bought: [...currentUser.product[0].bought, select],
                rent: [...currentUser.product[0].rent],
              },
            ],
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error("You Need To Login First");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    };
    const AddOrder = async () => {
      try {
        // eslint-disable-next-line
        const res = await publicRequest.post("/order", {
          name: currentUser.name,
          nameOfProductBought: select.name,
          bought: true,
          rent: false,
          amount: select.amount,
          amountPaid: select.amount,
          img: select.img,
        });
      } catch (error) {
        console.log(error);
      }
    };
    AddOrder();
    updateAfterSuccess();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="container">
        <div className="succes-bought-inner">
          <p>
            {" "}
            you have successfully purchased a <span>{select?.name} </span> from
            ab homes congratulations
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
            }}
          >
            back to home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessBought;
