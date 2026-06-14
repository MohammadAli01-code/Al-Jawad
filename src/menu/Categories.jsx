import React from "react";

const Categories = ({ categories, filterCategory }) => {
  return (
    <div className="menu-btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterCategory(category)}
          type="button"
          className="btn"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
