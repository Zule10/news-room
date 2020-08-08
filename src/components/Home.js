import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <li>
    <NavLink className="nav-item" to="/" exact>
      INICIO
    </NavLink>
  </li>
);

export default Home;
