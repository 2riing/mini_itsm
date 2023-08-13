import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div>
      <div id="search-container">
        <div>
          <img className="logo" src="logo.png" />
          <div className="bar">
            <input className="searchbar" type="text" title="Search" />
            <a href="#">
              <img className="voice" src="search.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
