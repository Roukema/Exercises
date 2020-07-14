import React from "react";
import "./Home.css";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio";

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
        <div className="cropper">
          <img src="/Images/WINC-portretten-by-Marinke-Kho-Davelaar-Photography-1069843-2.jpg" />
        </div>
        <h1>Portfolio Matthijs Roukema</h1>
      </header>
      <Portfolio />
      <Contact />
    </div>
  );
};
export default Home;
