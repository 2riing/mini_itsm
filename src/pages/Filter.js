import React from "react";
import FilterResult from "../components/filter/FilterResult.js";
import FilterSelect from "../components/filter/FilterSelect.js";

function filter() {
  return (
    <div>
      <FilterSelect />
      <FilterResult />
      <br />
    </div>
  );
}

export default filter;
