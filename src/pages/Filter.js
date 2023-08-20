import React from "react";
import FilterResult from "../components/filter/FilterResult.js";
import FilterSelect from "../components/filter/FilterSelect.js";

function Filter() {
  return (
    <div>
      <FilterSelect />
      <FilterResult />
      <br />
    </div>
  );
}

export default Filter;
