import React from "react";
import Signin from "./Signin";

const Price = () => {
  return (
    <div className="price-plan">
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <h2 className="simple-title">One simple price plan.</h2>

        <p className="price-text">
          Start growing your Twitter account by analyzing your follower’s
          patterns.
        </p>

        <div className="plan-card">
          <h3 className="month">Monthly</h3>
          <p className="plan-amount">$9</p>
          <span className="plan-per">/mo</span>

          <ul className="plans-list">
            {/* <i className="fas fa-check-circle circle"></i>{" "} */}
            <li>Unlimited* scheduled tweets and threads.</li>
            <li>Schedule up to 3 weeks in advance.</li>
            <li>Real-time audience analytics tracking up to 5k followers.</li>
          </ul>
          <Signin text={"Start Trial with Twitter"} />
        </div>
      </div>
    </div>
  );
};

export default Price;
