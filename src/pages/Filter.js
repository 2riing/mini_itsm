import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/board/BoardView.css";
import { filterAPI } from "../lib/api/filter.js";

function Filter() {
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [numPages, setnumPages] = useState(0);
  // const [currPage, setCurrPage] = useState(page)
  let firstNum = currentPage - (currentPage % 5) + 1
  let lastNum = currentPage - (currentPage % 5) + 5

  // filter 요청 보내기
  const getResults = () => {
    filterAPI(query, page, startDate, endDate).then((res) => {
      saveData(res.data);
      console.log("results data :", res.data);
    });
  };

  const saveData = (data) => {
    setResults(data.boardResponseDtos);
    setTotalPages(data.total);
  } 

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

  // 첫 로딩시 초기 날짜 설정
  useEffect(() => {
    setEndDate(getEndDate());
    setStartDate(getStartDate());
  }, []);

  // 시작, 끝 날짜 바뀔 때마다 요청 보내기
  useEffect(() => {
    if (startDate && endDate) {
      getResults();
    }
  }, [endDate, startDate]);

  // 페이지 바뀔 때마다 요청 보내기
  useEffect(() => {
    getResults();
  }, [page]);

  useEffect(() => {console.log('page',page)}, [page])
  useEffect(() => {console.log('current', currentPage)}, [currentPage])

  return (
    <div>
      <section className="notice">
        <div id="board-list">
          <div className="board-container">
            <div id="board-table">
              <div className="board-header">날짜 필터 결과</div>

              {/* 날짜선택 */}
              <div
                className="date-picker"
                style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
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

              {/* 결과 값 */}
              {results ? (
                <>
                  {results.map((result) => (
                    <Link
                      className="link-styled"
                      to={`/board/${result.id}`}
                      key={result.updated_at.seconds}
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
                        setPage(page-1); 
                        setCurrentPage(page-2);}} 
                        disabled={page===1}>
                      &lt;
                  </button>

                  {/* 페이지 버튼 */}
                  {Array(5).fill().map((_, i) =>{
                        return (
                          <button
                            border="true" 
                            key={i+1} 
                            onClick={() => {setPage(i+1)}}
                            aria-current={page === 1+i ? "page" : null}
                            disabled={i>=totalPages}
                            >
                            {i+1}
                          </button>
                        )
                  })}
                  <button 
                      onClick={() => {setPage(page+1); setCurrentPage(page);}} 
                      disabled={
                        page===numPages
                        }>
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
