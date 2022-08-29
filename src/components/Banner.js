import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="banner-inner">
          <div className="banner-heading">
            <p>you did not find the house you were looking for?</p>
          </div>
          <div className="banner-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            officiis illum, blanditiis minima placeat pariatur beatae id, ex
            facere a dignissimos magni. Similique, animi delectus.
          </div>
          <div className="banner-email">
            <input type="text" placeholder="Enter Your Email" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
