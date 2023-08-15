import React, { useEffect, useState } from "react";
import CreateQ from "../CreateQ.js";
// import { useLocation } from "react-router-dom";

function edit() {
  //Link to 에서 넘겨주는 state data 받아오기
  // const location = useLocation();
  const [title, setTitle] = useState("Update Article");
  const [cate, setCate] = useState("update");

  return (
    <div>
      <h1>{title}</h1>
      <br />
      <br />
      <CreateQ cate="update" />
    </div>
  );
}

export default edit;
