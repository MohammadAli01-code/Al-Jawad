import React from "react";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <section className="about">
      <img src={about} alt="about" />

      <div className="about-content">
        <h1>About Us</h1>

        <p>
          Al Jawad Restaurant is a beloved Lebanese dining spot that began as a
          small bakery in Tyre in 1992 and has since grown into a popular chain
          known for its mix of Lebanese, Middle Eastern, and international
          flavors. Today, it’s recognized for its shawarma, pizzas, grilled
          meats, and casual dining atmosphere across multiple branches in
          Lebanon.
        </p>
      </div>
    </section>
  );
};

export default About;
