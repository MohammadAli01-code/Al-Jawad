import React from "react";

const MenuItem = ({ name, img, description, price }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={name} className="img" />
      <div className="item-info">
        <header>
          <h5>{name}</h5>
          <span className="item-price">
            <p>${price}</p>
          </span>
        </header>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default MenuItem;
