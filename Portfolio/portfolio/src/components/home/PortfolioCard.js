import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = (props) => {
  console.log(props.backgroundImage);
  let imgLink = props.backgroundImage;
  return (
    <div
      className="PortfolioCard"
      id={props.title}
      style={{ backgroundImage: `url(${props.backgroundImage}` }}
    >
      <h3> {props.title} </h3>
      <p> {props.description} </p>
    </div>
  );
};

export default PortfolioCard;
