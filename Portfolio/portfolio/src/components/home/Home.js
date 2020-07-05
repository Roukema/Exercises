import React from "react";
import "./Home.css";
import "./PortfolioExample.css";

import PortfolioExample from "./PortfolioExample";

const Home = (props) => {
  let fly = [];
  var quantity = 15;
  for (var i = 1; i <= quantity; i++) {
    fly.push(<div className="firefly"></div>);
  }

  return (
    <div className="Home">
      {/* <Navbar /> */}
      <header>
        {fly}
        <h1>Portfolio Matthijs Roukema</h1>
      </header>
      <PortfolioExample />
    </div>
  );
};
export default Home;
