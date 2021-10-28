import React from "react";
import user1 from "../assets/userAvatar01.png";
import jack from "../assets/jack1.png"
import jessica from "../assets/jessica.png"
import SecondCard from "./SecondCard";
const What = () => {
  return (
    <div className="what-section">
      <h2 className="what-title">What our customers say</h2>
      <div className="d-flex card-container down">
        <SecondCard
          profileName={"Sara May"}
          twitterUserName={"@sara_may"}
          profileText={
            "I just tried out @chirp and it’s amazing, love all the analytics I can see."
          }
          likes={"2"}
          dates={"March 2, 2021"}
          image={user1}
        />
        <SecondCard
          profileName={"Jack Scott"}
          twitterUserName={"@jackscott_"}
          profileText={
            "I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game."
          }
          likes={"32"}
          dates={"March 2, 2021"}
          image={jack}
        />
        <SecondCard
          profileName={"Jessica May "}
          twitterUserName={"@jmay98"}
          profileText={
            "Absolutely love everything about Chirp, from the design to how everything works smoothly."
          }
          likes={"221"}
          dates={"March 2, 2021"}
          image={jessica}
        />
      </div>
    </div>
  );
};

export default What;
