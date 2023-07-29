import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleAPI } from "../../lib/api/article";

function boardDetail() {
  const params = useParams();
  const productId = params.id;

  const [article, setArticle] = useState({});

  const getArticle = () => {
    const productId = params.id;
    console.log(productId);
    getArticleAPI(params.id).then((res) => {
      setArticle(res.data);
    });
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
              <Link className="nav_item" to="/edit" state={{ cate: "update" }}>
                <button>글수정</button>
              </Link>
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
                  <td>{article.body}</td>
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
