import React from "react";
import "./createQ.css";

function createQ() {
  return (
    <div>
      <div id="create-container">
        <div id="create-btn-con">
          <label>
            <input type="checkbox" />
            템플릿 적용
          </label>
          <label>
            <input type="checkbox" />
            조치 완료
          </label>
        </div>
        <div id="c-form">
          <textarea id="create-input" />
        </div>
        <div>
          <button id="create-button">제출</button>
        </div>
      </div>
    </div>
  );
}

export default createQ;
