import React from "react";
import "./searchBar.css";

function SearchBar() {
  return (
    <div>
      <div id="search-container">
        <div>
          <img class="logo" src="logo.png" />
          <div class="bar">
            <input class="searchbar" type="text" title="Search" />
            <a href="#">
              <img class="voice" src="search.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
