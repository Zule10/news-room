import React from "react";
import Home from "./Home";
import Categories from "./Categories";
import Search from "./Search";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <Home />
          <Categories />
          <Search />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
