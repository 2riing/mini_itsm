import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./boardView.css";
import { getArticlesAPI } from "../../lib/api/article";

function boardView() {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    getArticlesAPI().then((res) => {
      setArticles(res.data);
      // setTotalPages(res.data.totalPages);
      console.log("articles data :", res.data);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section className="notice">
      <div className="page-title">
        <div className="container">
          <h3>Sample Data</h3>
        </div>
      </div>
      <div id="board-list">
        <div className="container">
          <div className="board-create">
            <Link className="nav_item" to="/new" state={{ cate: "create" }}>
              <button>글쓰기</button>
            </Link>
          </div>
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
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.id}</td>
                  <th>
                    <Link to={`/board/${article.id}`}>{article.title}</Link>
                  </th>
                  <td>2017.06.15</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default boardView;
