import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Home from "../pages/home.js";

function Nav() {
  return (
    <div>
      <div id="nav-container">
        <div className="item">
          <img className="nav-logo" src="logo.png" />
        </div>
        <div className="item">
          <Link to="/">🏠</Link>
        </div>
        <div className="item">
          <Link to="/filter">DataFilter</Link>
        </div>
        <div className="item">
          <Link to="/board">Board</Link>
        </div>
        <div className="item">
          <Link to="/etc">ETC</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
