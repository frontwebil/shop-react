import React, { useState } from "react";
import "./Categories.css";

export default function Categories(props) {
  const [categories, setCategories] = useState([
    {
      key: "all",
      name: "Всі товари",
    },
    {
      key: "sofa",
      name: "Дивани",
    },
    {
      key: "table",
      name: "Столи",
    },
    {
      key: "chair",
      name: "Стільці",
    },
    {
      key: "lamp",
      name: "Лампи",
    },
  ]);

  const [activeCategorie, setActiveCategorie] = useState("all");

  const handleCategoryClick = (key) => {
    setActiveCategorie(key);
    props.chooseCategory(key);
  };

  return (
    <div className="categories">
      {categories.map((el) => {
        return (
          <div
            key={el.key}
            className={`categories-button ${
              el.key === activeCategorie ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(el.key)}
          >
            {el.name}
          </div>
        );
      })}
    </div>
  );
}
