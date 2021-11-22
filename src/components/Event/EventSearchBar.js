import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./App.css";

function EventSearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  return (
    <div className="event_searchBar_wrapper my-5">
      <div className="event_searchBar_container">
        <span className="mx-5 text-white h5">活動區間</span>
        <div>
          <DatePicker
            className="event_search_month"
            id="event_search_month"
            name="event_search_month"
            select={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <span className="text-white h5 mx-4">至</span>
        <div>
          <DatePicker
            className="event_search_month"
            id="event_search_month"
            name="event_search_month"
            select={finishDate}
            onChange={(date) => setFinishDate(date)}
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
