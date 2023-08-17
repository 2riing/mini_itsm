import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoardDetail";
import { getArticlesAPI } from "../../lib/api/article";

function BoardView() {
  const [articles, setArticles] = useState([]);
  const [created, setCreated] = useState("");

  const getArticles = () => {
    getArticlesAPI().then((res) => {
      setArticles(res.data);
      console.log("articles data :", res.data);
    });
  };

  function convertTimestampToDateTime(timestamp) {
    const seconds = timestamp.seconds;
    const nanos = timestamp.nanos;

    const milliseconds = seconds * 1000 + nanos / 1000000;
    return new Date(milliseconds);
  }

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
                  <td>
                    {convertTimestampToDateTime(
                      article.created_at
                    ).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default BoardView;