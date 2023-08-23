import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import "../components/board/BoardView.css";
import { filterAPI } from "../lib/api/filter.js";

function SearchBar() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState("0001-01-01");
  const [endDate, setEndDate] = useState("9999-12-31");

  const getResults = () => {
    console.log(startDate, endDate);
    filterAPI(query, page, startDate, endDate)
    .then((res) => {
      setResults(res.data.boardResponseDtos);
      console.log("results data :", res.data);
    });
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <div id="search-container">
        <div>
          <img className="logo" src="so.png" />
          <div className="bar">
            {/*  */}
            <input className="searchbar" type="text" title="Search" />
            <span onClick={getResults}>
              <img className="voice" src="search.png" />
            </span>
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
