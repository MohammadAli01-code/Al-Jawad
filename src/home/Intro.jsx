import React from "react";
import intro from "../assets/intro.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <h1>Al-Jawad Restaurant</h1>
      <p>Welcome to Al-Jawad Restaurant</p>
      <img src={intro} alt="intro" />
      <button className="btn">Order Now</button>
    </div>
  );
};

export default Intro;
