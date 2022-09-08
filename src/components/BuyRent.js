import React, { useState } from "react";

const BuyRent = () => {
  const [toggleState, setToggleState] = useState("buy");

  return (
    <div>
      <div className="container">
        <div className="buy-inner">
          <div className="tabs">
            <p
              className={
                toggleState === "buy" ? "tab-button active" : "tab-button"
              }
              onClick={() => setToggleState("buy")}
            >
              buy
            </p>
            <p
              className={
                toggleState === "rent" ? "tab-button active" : "tab-button"
              }
              onClick={() => setToggleState("rent")}
            >
              rent
            </p>
          </div>
          <div
            className={
              toggleState === "buy" ? "tab-content" : "tab-content not"
            }
          >
            <div className="tab-box">
              <div className="tab-box-icon">
                <i class="fa-solid fa-location-dot"></i>
                location
              </div>
              <div className="tab-input">
                <select>
                  <option value="garki">garki</option>
                  <option value="lokogoma">lokogoma</option>
                  <option value="asokoro">asokoro</option>
                  <option value="katampe">katampe</option>
                  <option value="kubwa">kubwa</option>
                </select>
              </div>
            </div>
            <div className="tab-box">
              <div className="tab-box-icon">
                <i className="fa-solid fa-calendar-days"></i>
                year built
              </div>
              <div className="tab-input">
                <select>
                  <option value="2019-2020">2019 -2020</option>
                  <option value="2020-2021">2020 -2021</option>
                  <option value="2021-2022">2021 -2022</option>
                </select>
              </div>
            </div>
            <div className="tab-box">
              <div className="tab-box-icon">
                <i className="fa-solid fa-money-bill"></i>
                price
              </div>
              <div className="tab-input">
                <input type="number" placeholder="Enter Your Price" />
              </div>
            </div>
            <div className="searcbtn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div
            className={
              toggleState === "rent" ? "tab-content" : "tab-content not"
            }
          >
            <div className="tab-box">
              <div className="tab-box-icon">
                <i className="fa-solid fa-location-dot"></i>
                location
              </div>
              <div className="tab-input">
                <select>
                  <option value="garki">garki</option>
                  <option value="lokogoma">lokogoma</option>
                  <option value="asokoro">asokoro</option>
                  <option value="katampe">katampe</option>
                  <option value="kubwa">kubwa</option>
                </select>
              </div>
            </div>
            <div className="tab-box">
              <div className="tab-box-icon">
                <i className="fa-solid fa-calendar-days"></i>
                year built
              </div>
              <div className="tab-input">
                <select>
                  <option value="2019-2020">2019 -2020</option>
                  <option value="2020-2021">2020 -2021</option>
                  <option value="2021-2022">2021 -2022</option>
                </select>
              </div>
            </div>
            <div className="tab-box">
              <div className="tab-box-icon">
                <i className="fa-solid fa-calendar-days"></i>
                amount in years
              </div>
              <div className="tab-input">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div className="tab-box">
              <div className="tab-box-icon">
                <i className="fa-solid fa-money-bill"></i>
                price
              </div>
              <div className="tab-input">
                <input type="number" placeholder="Enter Your Price" />
              </div>
            </div>
            <div className="searcbtn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyRent;
