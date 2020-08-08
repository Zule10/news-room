import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  {
    id: "1",
    name: "POLÍTICA"
  },
  {
    id: "2",
    name: "INTERNACIONALES"
  },
  {
    id: "3",
    name: "TECNOLOGÍA"
  },
  {
    id: "4",
    name: "ESPECTÁCULOS"
  },
  {
    id: "5",
    name: "DEPORTE"
  },
  {
    id: "6",
    name: "DISEÑO"
  }
];
const Categories = () => {
  return categories.map(category => (
    <li>
      <NavLink
        to={`/news/category/${category.id}`}
        key={category.id}
        className="nav-item"
        activeClassName="active"
      >
        {category.name}
      </NavLink>
    </li>
  ));
};

export default Categories;
