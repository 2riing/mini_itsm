import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoardView.css";
import { getArticlesAPI } from "../../lib/api/article";

function BoardView() {
  const [articles, setArticles] = useState([
    {
      id: "1",
      title:
        "[썸레터] 박명수가 부른 SUPER SHY? 요즘 화제 'AI 노래 커버' 알아보기",
      created_at: {
        seconds: 1691928345,
        nanos: 698000000,
      },
    },
  ]);

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
    const date = new Date(milliseconds);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}. ${month}. ${day}`;
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section className="notice">
      <div id="board-list">
        <div className="board-container">
          <div id="board-table">
            <div className="board-header">자주 묻는 질문</div>
            <div className="board-create">
              <Link className="nav_item" to="/new" state={{ cate: "create" }}>
                <button>글쓰기</button>
              </Link>
            </div>
            {articles ? (
              <>
                {articles.map((article) => (
                  <Link
                    className="link-styled"
                    to={`/board/${article.id}`}
                    key={article.id}
                  >
                    <div className="item">
                      <span className="date">
                        {article.created_at ? (
                          <>
                            {"["}
                            {convertTimestampToDateTime(
                              article.created_at
                            ).toLocaleString()}
                            {"]"}
                          </>
                        ) : (
                          <></>
                        )}
                      </span>
                      <span className="title">{article.title}</span>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div>결과 값이 없습니다</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardView;
