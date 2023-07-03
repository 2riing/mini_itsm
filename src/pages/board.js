import React from "react";
import SearchBar from "../components/SearchBar";
import CreateQ from "../components/createQ";
import boardView from "../components/board/boardView";

function board() {
  return (
    <div>
      보드
      <br />
      <boardView />
    </div>
  );
}

export default board;
