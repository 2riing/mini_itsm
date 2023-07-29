import React from "react";
import "./createQ.css";
import { getArticlesAPI } from "../lib/api/article.js";

function createQ() {
  return (
    <div>
      <div id="create-container">
        <div id="create-btn-con">
          <label>
            <input type="checkbox" />
            Template
          </label>
        </div>
        <div id="c-form">
          <textarea id="create-input" />
        </div>
        <div>
          <button id="create-button">완료</button>
        </div>
      </div>
    </div>
  );
}

export default createQ;
