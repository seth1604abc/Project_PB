import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./App.css";

function EventSearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="event_searchBar_wrapper my-5">
      <div className="event_searchBar_container">
        <span className="text-white h5 event_rangeText">活動區間</span>
        <div>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
        </div>
        <span className="text-white h5 mx-4">至</span>
        <div>
        <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
        </div>
        <button type="event_search_submit" className="event_search_submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default EventSearchBar;
