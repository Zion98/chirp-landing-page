import React from "react";
import analytics from "../assets/analytics.png";
import smart from "../assets/smile.png";
import schedule from "../assets/schedule.png";
import dark from "../assets/dark.svg";
import Card from "./Card";
const Features = () => {
  return (
    <div className="features">
      <h1 className="features-header">Features that help you Tweet smarter.</h1>

      <div className="card-container d-flex">
        <Card
          image={analytics}
          title={"Analytics"}
          text={
            "We constantly monitor your audience as it grows — so you can Tweet when your followers are most likely to be online and ready to engage with your content."
          }
        />

        <Card
          image={smart}
          title={"Smart Analyzer"}
          text={
            "Chirp automatically recognizes your followers’ most active times and automatically sends you notifications if you’re missing out on an opportunity."
          }
        />
        <Card
          image={schedule}
          title={"Scheduled Your Tweets"}
          text={
            " Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read."
          }
        />
        <Card
          image={dark}
          title={"Dark Mode"}
          text={
            "Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times."
          }
        />
      </div>
    </div>
  );
};

export default Features;
