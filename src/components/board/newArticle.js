import React, { useEffect, useState } from "react";
import CreateQ from "../createQ.js";
// import { useLocation } from "react-router-dom";

function newArticle() {
  //Link to 에서 넘겨주는 state data 받아오기
  // const location = useLocation();
  const [title, setTitle] = useState("New Article");

  return (
    <div>
      <h1>{title}</h1>
      <br />
      <br />
      <CreateQ cate="create" />
    </div>
  );
}

export default newArticle;
