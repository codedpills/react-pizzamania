import React from "react";

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-home">
      <a className="navbar-brand" href="#">
        PIZZA MANNIA{" "}
      </a>

      <div
        className="collapse navbar-collapse my_nav_links"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li>
            {" "}
            <a href="#">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about_us">About Us</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#pizza_types">Pizza Types</a>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
