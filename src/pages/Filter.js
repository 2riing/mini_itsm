import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/board/BoardView.css";
import { filterAPI } from "../lib/api/filter.js";

function Filter() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("2");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  // const numPages = Math.ceil(5/5)
  // const [currPage, setCurrPage] = useState(page)
  let firstNum = currentPage - (currentPage % 5) + 1
  let lastNum = currentPage - (currentPage % 5) + 5

  // filter 요청 보내기
  const getResults = () => {
    console.log(startDate, endDate);
    filterAPI(query, page, startDate, endDate).then((res) => {
      setResults(res.data.boardResponseDtos);
      console.log("results data :", res.data);
    });
  };

  // 오늘 날짜 가져오기
  function getEndDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // 일주일 전 날짜 가져오기
  function getStartDate() {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const year = sevenDaysAgo.getFullYear();
    const month = String(sevenDaysAgo.getMonth() + 1).padStart(2, "0");
    const day = String(sevenDaysAgo.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  
  // 시작 날짜 변경 
  const handleStartDateChange = (date) => {
    const startDateObj = new Date(date);
    const endDateObj = new Date(endDate);
    if (startDateObj > endDateObj) {
      alert("시작날짜가 끝나는 날보다 늦습니다");
    } else {
      setStartDate(date);
    }
  };

  // 끝나는 날짜 변경
  const handleEndDateChange = (date) => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(date);
    if (startDateObj > endDateObj) {
      alert("끝나는 날짜가 시작하는 날짜보다 빠릅니다");
    } else {
      setEndDate(date);
    }
  };

  // 페이지 변경
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // 첫 로딩시 초기 날짜 설정
  useEffect(() => {
    setEndDate(getEndDate());
    setStartDate(getStartDate());
    console.log("초기 날짜 설정", endDate, startDate);
  }, []);

  // 시작, 끝 날짜 바뀔 때마다 요청 보내기
  useEffect(() => {
    console.log("end바뀜", endDate);
    if (startDate && endDate) {
      getResults();
    }
  }, [endDate, startDate]);

  // 페이지 바뀔 때마다 요청 보내기
  useEffect(() => {
    getResults();
  }, [currentPage]);

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
                        <span className="title">{result.title}</span>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <div>결과 값이 없습니다</div>
              )}
              <div className="pagination">
              <div className="btn-container">
                <button 
                    onClick={() => {setPage(page-1); setCurrentPage(page-2);}} 
                    disabled={page===1}>
                    &lt;
                </button>
                <button 
                    onClick={() => setPage(firstNum)}
                    aria-current={page === firstNum ? "page" : null}>
                    {firstNum}
                </button>
                {Array(4).fill().map((_, i) =>{
                    if(i <=2){
                        return (
                            <button
                                border="true" 
                                key={i+1} 
                                onClick={() => {setPage(firstNum+1+i)}}
                                aria-current={page === firstNum+1+i ? "page" : null}>
                                {firstNum+1+i}
                            </button>
                        )
                    }
                    else if(i>=3){
                        return (
                            <button
                                border="true" 
                                key ={i+1}
                                onClick={() => setPage(lastNum)}
                                aria-current={page === lastNum ? "page" : null}>
                                {lastNum}
                            </button>
                        )  
                    }
                })}
                <button 
                    onClick={() => {setPage(page+1); setCurrentPage(page);}} 
                    disabled={page===numPages}>
                    &gt;
                </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Filter;
