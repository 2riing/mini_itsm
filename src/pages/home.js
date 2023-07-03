import React from "react";
import SearchBar from "../components/SearchBar";
import CreateQ from "../components/createQ";

function home() {
  return (
    <div>
      ▶문의 내용 검색◀
      <br />
      <SearchBar />
      <br />
      ▶문의 내용 추가◀
      <br />
      <CreateQ />
    </div>
  );
}

export default home;
