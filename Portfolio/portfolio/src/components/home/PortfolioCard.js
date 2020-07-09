import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = (props) => {
  console.log(props.backgroundImage);
  let style = {
    backgroundImage: `url(${props.backgroundImage})`,
    "background-size": `${props.backgroundsize}`,
  };
  return (
    <div className="CardContainer">
      <div className="FlipCard">
        <div className="PortfolioCard" id={props.title} style={style}>
          <div className="CardText">
            <h3> {props.title} </h3>
          </div>
        </div>
        <div className="CardBack">
          <p> {props.description} </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
