import React from "react";
import FilterResult from "../components/filter/filterResult.js";
import FilterSelect from "../components/filter/filterSelect.js";

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
