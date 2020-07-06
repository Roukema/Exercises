import React from "react";
import "./Home.css";
import "./Portfolio.css";

import Portfolio from "./Portfolio";

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
      <Portfolio />
    </div>
  );
};
export default Home;
