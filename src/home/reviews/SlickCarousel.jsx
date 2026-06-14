import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { alJawadReviews } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="reviews-section">
      <h1>Customer Reviews</h1>

      <Slider {...settings}>
        {alJawadReviews.map((person) => {
          const { id, name, rating, comment } = person;

          return (
            <div key={id} className="slide-wrapper">
              <article className="review-card">
                <FaQuoteRight className="quote-icon" />

                <h3>{name}</h3>

                <p className="rating">⭐ {rating}/5</p>

                <p className="comment">{comment}</p>
              </article>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
