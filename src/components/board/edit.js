import React, { useEffect, useState } from "react";
import CreateQ from "../createQ.js";
import { useLocation } from "react-router-dom";

function edit() {
  //Link to 에서 넘겨주는 state data 받아오기
  const location = useLocation();
  const [title, setTitle] = useState("Article");

  useEffect(() => {
    const cate = location.state.cate;
    if (cate === "create") setTitle("New Article");
    else if (cate === "update") setTitle("Update Article");
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <br />
      <br />
      <CreateQ />
    </div>
  );
}

export default edit;
