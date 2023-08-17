import React, { useState } from "react";
import { filterByDateAPI } from "../lib/api/filter";

function filter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [content, setContent] = useState({});

  // StartData > EndDate 유효성 검증 
  // StartData => 오늘 날짜보다 전이어야함
  // EndDate -> 오늘 날짜보다 전이어야함
  // Enddate -> 선택시 바로 검색하는 함수 호출함

  return (
    <div>
      <div>
        <input 
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          />
        <input 
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value)
            // filter 결과 호출하는 API
            filterByDateAPI(startDate, e.target.value);
          }}
          />
      </div>
        <div>Filter 된 Contents</div>
      <br />
    </div>
  );
}

export default filter;
