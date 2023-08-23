import React, { useEffect, useState } from "react";
import CreateQ from "../CreateQ.js";
// import { useLocation } from "react-router-dom";

function NewArticle() {
  //Link to 에서 넘겨주는 state data 받아오기
  // const location = useLocation();
  const [title, setTitle] = useState("New Article");

  return (
    <div>
      <br />
      <br />
      <CreateQ cate="create" />
    </div>
  );
}

export default NewArticle;
