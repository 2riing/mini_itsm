import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getArticleAPI, deleteArticleAPI } from "../../lib/api/article";

function boardDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const productId = params.id;

  const [article, setArticle] = useState({});

  const getArticle = () => {
    const productId = params.id;
    console.log("article detail id :", productId);
    getArticleAPI(params.id).then((res) => {
      setArticle(res.data);
    });
  };

  const deleteArticle = () => {
    const productId = params.id;
    if (window.confirm("정말 삭제합니까?")) {
      deleteArticleAPI(params.id).then((res) => {
        console.log("delete data", res);
        navigate("/board");
      });
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div>
      <section className="notice">
        <div className="page-title">
          <div className="container">
            <h3>Sample Data</h3>
          </div>
        </div>
        <div id="board-list">
          <div className="container">
            <div className="board-create">
              <Link
                className="nav_item"
                to={`/edit/${params.id}`}
                state={{ cate: "update" }}
              >
                <button>글수정</button>
              </Link>
              <button onClick={deleteArticle}>글삭제</button>
            </div>
            <table className="board-table">
              <thead>
                <tr>
                  <th scope="col" className="th-num">
                    {article.title}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{article.content}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default boardDetail;
