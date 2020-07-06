import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
      <PortfolioCard
        title="Winc Academy"
        description="goed verhaal"
        backgroundImage="Images/cropped-logoglat-small.png"
      />
      <PortfolioCard
        title="Front-End Developer"
        description="een test die laat zien dat ik ook goed een ontwerp kan maken"
        backgroundImage="Images/Front-End-Case.png"
      />
      <div> Projectje front end </div>
      <div> daschboard studenten? </div>
      <div> python iets? </div>
      <div> Snake </div>
      <div> Arduino </div>
    </div>
  );
};

export default Portfolio;
