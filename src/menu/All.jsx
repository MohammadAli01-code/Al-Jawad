import { data } from "./data";
import React from "react";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";
import "./style.css";

const All = () => {
  const [items, setItems] = React.useState(data);
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [categories, setCategories] = React.useState(allCategories);

  const filterCategory = (cat) => {
    if (cat === "all") {
      setItems(data);
      return;
    }

    setItems(data.filter((item) => item.category === cat));
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default All;
