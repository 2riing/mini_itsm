import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/board/BoardView.css";
import { filterAPI } from "../lib/api/filter.js";

function Filter() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("dd");
  const [page, setPage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const getResults = () => {
    console.log(startDate, endDate);
    filterAPI(query, page, startDate, endDate).then((res) => {
      setResults(res.data);
      console.log("results data :", res.data);
    });
  };

  function getEndDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getStartDate() {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const year = sevenDaysAgo.getFullYear();
    const month = String(sevenDaysAgo.getMonth() + 1).padStart(2, "0");
    const day = String(sevenDaysAgo.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleStartDateChange = (date) => {
    const startDateObj = new Date(date);
    const endDateObj = new Date(endDate);
    if (startDateObj > endDateObj) {
      alert("시작날짜가 끝나는 날보다 늦습니다");
    } else {
      setStartDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(date);
    if (startDateObj > endDateObj) {
      alert("끝나는 날짜가 시작하는 날짜보다 빠릅니다");
    } else {
      setEndDate(date);
    }
  };

  useEffect(() => {
    setEndDate(getEndDate());
    setStartDate(getStartDate());
    console.log("초기 날짜 설정", endDate, startDate);
  }, []);

  useEffect(() => {
    console.log("end바뀜", endDate);
    if (startDate && endDate) {
      getResults();
    }
  }, [endDate, startDate]);

  return (
    <div>
      <section className="notice">
        <div id="board-list">
          <div className="board-container">
            <div id="board-table">
              <div className="board-header">날짜 필터 결과</div>
              <div
                className="date-picker"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <input
                  type="date"
                  vlaue={startDate}
                  onChange={(e) => handleStartDateChange(e.target.value)}
                />
                <input
                  type="date"
                  vlaue={endDate}
                  onChange={(e) => handleEndDateChange(e.target.value)}
                />
              </div>
              {results ? (
                <>
                  {results.map((result) => (
                    <Link
                      className="link-styled"
                      to={`/board/${result.id}`}
                      key={result.id}
                    >
                      <div className="item">
                        <span className="date">
                          {result.created_at ? (
                            <>
                              {"["}
                              {convertTimestampToDateTime(
                                result.created_at
                              ).toLocaleString()}
                              {"]"}
                            </>
                          ) : (
                            <></>
                          )}
                        </span>
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
  );
}

export default Filter;
