import React from "react";
import rightSide from "../assets/rightSide.svg";
import avatars from "../assets/avatars.png";
import rightSideTab from "../assets/rightsidetab.png";
import Signin from "./Signin";

const Cta = () => {
  return (
    // align-items-center
    <main className="d-flex cta-section">
      <div className="leftSide">
        <h1 className="main-cta-text">
          Twitter analytics taken to a whole new level.
        </h1>
        <p className="main-cta-text2">
          Chirp is a suite of Twitter analytics that will help you better
          understand your audience, which tweets they like, and most
          importantly, when they are the most active on Twitter.
        </p>

        <div className="d-flex align-items-center ctas-btns">
          <Signin text={"Sign in with Twitter"} />
          <a href="/" className="learnmore">
            Learn more <i class="fas fa-arrow-right"></i>
          </a>
        </div>

        <img src={avatars} alt="avatars" className="overlap" />

        <p className="join">
          Join <span>195</span> others who have analyzed their followers and
          scheduled <span>1342</span> tweets!
        </p>
      </div>

      <div classname="rightSide">
        <div className="profile-cta">
          <img src={rightSide} alt="rightside" className="right-img web-view" />
          <img
            src={rightSideTab}
            alt="rightside"
            className="right-img tab-view"
          />
        </div>
      </div>
    </main>
  );
};

export default Cta;
