import React from "react";
import "./Home.css";

import PortfolioExample from "./PortfolioExample";

const Home = (props) => {
  return (
    <div className="Home">
      {/* <Navbar /> */}
      <header>
        <h1>Portfolio Matthijs Roukema</h1>
      </header>
      <PortfolioExample />
    </div>
  );
};
export default Home;
