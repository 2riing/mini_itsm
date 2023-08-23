import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import "../components/board/BoardView.css";
import { filterAPI } from "../lib/api/filter.js";

function SearchBar() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("0001-01-01");
  const [endDate, setEndDate] = useState("9999-12-31");

  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  const getResults = (data) => {
    filterAPI(data, page, startDate, endDate).then((res) => {
      setResults(res.data.boardResponseDtos);
      setTotalPages(res.data.total);
    });
  };

  const handleQuery = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      // 엔터 키가 눌렸을 때 실행할 함수 호출
      console.log(event);
      getResults(query);
    }
  }

  useEffect(() => {
    getResults();
  }, []);

  // 페이지 바뀔 때마다 요청 보내기
  useEffect(() => {
    getResults();
  }, [page]);

  return (
    <div>
      <div id="search-container">
        <div>
          <Link to={"/"}>
            <img className="logo" src="so.png" />
          </Link>
          {/* 검색바 */}
          <div className="bar">
            <input
              className="searchbar"
              type="text"
              title="Search"
              onChange={(e) => handleQuery(e)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            {/* <button
              onClick={getResults}
              style={{ backgroundColor: "transparent" }}
            >
              <img className="voice" src="search.png" />
            </button> */}
          </div>

          <section className="notice">
            <div id="board-list">
              <div className="board-container">
                <div id="board-table">
                  {results ? (
                    <>
                      {results.map((result) => (
                        <Link
                          className="link-styled"
                          to={`/board/${result.id}`}
                          key={result.id}
                        >
                          <div className="item">
                            <span className="title">{result.title}</span>
                          </div>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <div>결과 값이 없습니다</div>
                  )}

                  {/* 페이징 */}
                  <div className="pagination">
                    <div className="btn-container">
                      <button
                        onClick={() => {
                          setPage(page - 1);
                          setCurrentPage(page - 2);
                        }}
                        disabled={page === 1}
                      >
                        &lt;
                      </button>

                      {/* 페이지 버튼 */}
                      {Array(5)
                        .fill()
                        .map((_, i) => {
                          return (
                            <button
                              border="true"
                              key={i + 1}
                              onClick={() => {
                                setPage(i + 1);
                              }}
                              aria-current={page === 1 + i ? "page" : null}
                              disabled={i >= totalPages}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      <button
                        onClick={() => {
                          setPage(page + 1);
                          setCurrentPage(page);
                        }}
                        disabled={page === totalPages}
                      >
                        &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
