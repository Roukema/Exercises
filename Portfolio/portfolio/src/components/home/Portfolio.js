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
        backgroundsize="contain"
      />
      <PortfolioCard
        title="Front-End Developer"
        description="een test die laat zien dat ik ook goed een ontwerp kan maken"
        backgroundImage="Images/Front-End-Case.png"
        backgroundsize="contain"
      />
      <PortfolioCard
        title="Winc Eindopdracht"
        description="met gegevens uit een database een dashboard bouwen zodat de gevens in duidelijk grafieken worden weergeven. "
        backgroundImage="Images/Front-End-Case.png"
        backgroundsize="contain"
      />
      <PortfolioCard
        title="Python Snake"
        description="een test die laat zien dat ik ook goed een ontwerp kan maken"
        backgroundImage="Images/Front-End-Case.png"
        backgroundsize="cover"
      />
      <PortfolioCard
        title="Arduino"
        description="In mijn vrije tijd vindt ik het erg leuk om met arduino verschillend projectjes te maken. Hier komen Elektrotechniek en Programeren samen."
        backgroundImage="Images/Front-End-Case.png"
        backgroundsize="unset"
      />
    </div>
  );
};

export default Portfolio;
