import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Home from "../pages/home.js";

function Nav() {
  // const burgerMenu = document.querySelector(".burger-menu");
  // const navLinks = document.querySelector(".nav-links");

  // burgerMenu.addEventListener("click", () => {
  //   navLinks.classList.toggle("active");
  // });

  return (
    <div className="navbar">
      <div className="none">
        <Link to="/" className="nav_item">
          <img className="nav-logo" src="./logo.png" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/filter" className="nav_item">
            DataFilter
          </Link>
        </li>
        <li>
          <Link to="/board" className="nav_item">
            Board
          </Link>
        </li>
        {/* <li>
          <Link to="/etc" className="nav_item">
            ETC
          </Link>
        </li> */}
        <li>
          <Link to="/login" className="nav_item">
            Login
          </Link>
        </li>
      </ul>
      {/* <div class="burger-menu">&#9776;</div> */}
    </div>
  );
}

export default Nav;
