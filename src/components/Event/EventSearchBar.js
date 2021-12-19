import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function EventSearchBar({search}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  

  return (
    <div className="event_searchBar_wrapper my-5">
      <div className="event_searchBar_container py-3 px-5">
        <span className="text-white mx-4" style={{fontSize:"1.2rem"}}>活動區間</span>
        <div>
        <DatePicker
        className= "form-select event_searchBar_datepicker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        id="start"
      />
        </div>
        <span className="text-white mx-3" style={{fontSize:"1.2rem"}}>至</span>
        <div>
        <DatePicker
        className= "form-select event_searchBar_datepicker"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        id="end"
      />
        </div>
        <button type="event_search_submit" className="btn event_search_submit mx-4" onClick={search}>
          <i className="text-white fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default EventSearchBar;
