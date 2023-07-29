import React from "react";
import "./boardView.css";

function boardView() {
  return (
    <section className="notice">
      <div className="page-title">
        <div className="container">
          <h3>공지사항</h3>
        </div>
      </div>

      <div id="board-list">
        <div className="container">
          <table className="board-table">
            <thead>
              <tr>
                <th scope="col" className="th-num">
                  번호
                </th>
                <th scope="col" className="th-title">
                  제목
                </th>
                <th scope="col" className="th-date">
                  등록일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <th>
                  <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                  <p>테스트</p>
                </th>
                <td>2017.07.13</td>
              </tr>

              <tr>
                <td>2</td>
                <th>
                  <a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>2017.06.15</td>
              </tr>

              <tr>
                <td>1</td>
                <th>
                  <a href="#!">공지사항 안내입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>2017.06.15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default boardView;
