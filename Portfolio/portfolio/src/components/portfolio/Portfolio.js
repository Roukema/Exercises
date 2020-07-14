import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./portfolioCards/PortfolioCard";

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
      <PortfolioCard
        title="Winc Academy"
        description="Bij Winc Academy heb ik mijn programeer-basis gelegd, zij hebben mij in 6 weken de basis van het programmeren bijgebracht. Op github kun je zien hoe ik steeds verder kwam door opdrachten te maken. "
        githubLink="https://github.com/Roukema/Winc-Academy"
        netlifyLink=""
        backgroundImage="Images/cropped-logoglat-small.png"
        backgroundsize="contain"
      />
      <PortfolioCard
        title="Front-End Case"
        description="Deze Case laat zien goed zien dat ik een ontwerp kan vertalen naar en website. In eerste instantie is deze site gemaakt als Wordpress-thema"
        githubLink="https://github.com/Roukema/Front-End-Case"
        netlifyLink="https://vigorous-hugle-d6a2f4.netlify.app/"
        backgroundImage="Images/Front-End-Case.png"
        backgroundsize="cover"
      />
      <PortfolioCard
        title="Winc Eindopdracht"
        description="Opdracht was om met gegevens uit een database een dashboard bouwen. De focus ligt dus vooral op het verwerken van de gegevens. "
        githubLink="https://github.com/Roukema/StudentDashboard"
        netlifyLink="https://brave-pike-fa11f1.netlify.app/"
        backgroundImage="Images/studenten-dashboard.png"
        backgroundsize="cover"
      />
      <PortfolioCard
        title="Python Snake"
        description="Op mijn Raspberry-pi ben ik ook flink aan het experimenten. Ik heb bijvoorbeeld een spelletje Snake gemaakt."
        githubLink="https://github.com/Roukema/Raspberry_Python_Projecten/blob/master/snakeGame.py"
        netlifyLink=""
        backgroundImage="Images/Snake_pygame.png"
        backgroundsize="cover"
      />
      <PortfolioCard
        title="Arduino"
        description="In mijn vrije tijd vind ik het erg leuk om met arduino verschillend projectjes te maken. Hier komen Elektrotechniek en Programeren samen."
        githubLink="https://github.com/Roukema/Arduino_Stoplicht/blob/master/stoplichtdagnachtbutton.ino"
        netlifyLink=""
        backgroundImage="Images/IMG_8204.jpg"
        backgroundsize="cover"
      />
    </div>
  );
};

export default Portfolio;
