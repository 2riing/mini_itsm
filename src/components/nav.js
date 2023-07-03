import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Home from "../pages/home.js";

function Nav() {
  return (
    <div>
      <div id="nav-container">
        <div class="item">
          <img class="nav-logo" src="logo.png" />
        </div>

        <div class="item">
          <Link to="/home">🏠</Link>
        </div>
        <div class="item">
          <Link to="/board">DataFilter</Link>
        </div>
        <div class="item">
          <Link to="/">Board</Link>
        </div>
        <div class="item">
          <Link to="/">ETC</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
