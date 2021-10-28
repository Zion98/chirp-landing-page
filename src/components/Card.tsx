import React from "react";

interface Details {
  image: string;
  title: string;
  text: string;
}
const Card = ({ image, title, text }: Details) => {
  return (
    <div className="card-one">
      <img src={image} alt="tr" style={{ margin: ".6rem 0", width: "30px" }} />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
