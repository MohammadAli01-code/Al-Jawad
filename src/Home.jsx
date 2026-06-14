import React from "react";

import About from "./home/About";
import Intro from "./home/Intro";
import intro from "./home/intro.css";
import about from "./home/about.css";
import Locations from "./home/locations/Locations";
import locations from "./home/locations/locations.css";
import SlickCarousel from "./home/reviews/SlickCarousel";
import review from "./home/reviews/review.css";
import QA from "./home/QA/QA";
import qa from "./home/QA/qa.css";

const Home = () => {
  return (
    <section className="App">
      <Intro />
      <About />
      <Locations />
      <SlickCarousel />
      <QA />
    </section>
  );
};

export default Home;
