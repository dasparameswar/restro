import React from "react";
import logo from "../assests/FFC-web-main-banner-1-2.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: ` url(${logo})` }}
      ></div>
      <div className="aboutBottom">
      <h1>ABOUT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        architecto libero tempore iure! Nihil accusantium fugiat dolores
        quisquam fuga aliquid natus repellat neque molestias cumque maxime
        deserunt, esse dolorum laborum.
      </p>
      </div>
    </div>
  );
}

export default About;
