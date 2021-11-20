import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function EventSearchBar() {

    const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  return (
    <div className="event_searchBar_wrapper my-5">
    <span className="mx-5 text-white h5">活動區間</span>
    <DatePicker
      type="month"
      className="event_search_month"
      id="event_search_month"
      name="event_search_month"
      select= {startDate} 
      onChange={(date) => setStartDate(date)}
    />
    <span className="text-white h5 mx-4">至</span>
    <DatePicker
      type="month"
      className="event_search_month"
      id="event_search_month"
      name="event_search_month"
      select= {finishDate} 
      onChange={(date) => setFinishDate(date)}
    />
    <button type="event_search_submit" className="event_search_submit">
      <i className="fa fa-search"></i>
    </button>
  </div>
  )

}


export default EventSearchBar;