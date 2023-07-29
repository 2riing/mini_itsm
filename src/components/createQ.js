import React, { useEffect, useState } from "react";
import "./createQ.css";
import { useNavigate, useParams } from "react-router";
import { getArticlesAPI } from "../lib/api/article.js";
import { putArticleAPI, postArticleAPI } from "../lib/api/article.js";

function createQ(props) {
  const navigate = useNavigate();
  const params = useParams();

  const updateArticle = () => {
    const productId = params.id;
    if (window.confirm("글을 수정하시겠습니까?")) {
      putArticleAPI(productId).then((res) => {
        console.log("update article data :", res);
      });
      alert("글이 수정되었습니다.");
      navigate(`/board/detail/${productId}`);
    } else {
      alert("취소합니다.");
    }
  };

  const createArticle = () => {
    if (window.confirm("글을 생성하시겠습니까?")) {
      postArticleAPI().then((res) => {
        console.log("create article data : ", res);
        alert("글이작성되었습니다 목업에서는 표시 안되는게 정상임");
        navigate(`/board/detail/${res.data.id}`);
      });
    } else {
      alert("취소합니다.");
    }
  };

  const onBtnClick = () => {
    if (props.cate === "update") {
      updateArticle();
    } else {
      createArticle();
    }
  };

  useEffect(() => {
    // console.log(cate.cate);
  }, []);

  return (
    <div>
      <div id="create-container">
        <div id="create-btn-con">
          <label>
            <input type="checkbox" />
            Template
          </label>
        </div>
        <div id="create-form">
          <div>
            <input type="text" />
          </div>
          <div>
            <textarea id="create-input" />
          </div>
        </div>
        <div>
          <button id="create-button" onClick={onBtnClick}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default createQ;
