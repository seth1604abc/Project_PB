import React from "react";
import "../css/Event.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventBanner from "../components/Event/EventBanner";
import EventCard from "../components/Event/EventCard";
import EventSearchBar from "../components/Event/EventSearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

function Event() {
  //這邊是Link用的，啟學所有
  //讓每次進入頁面在最上方
  const [event, setEvent] = useState([]);
  useEffect(async () => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });

    let resEvent = await axios.get("http://localhost:3001/event/coach-event", {
      withCredentials: true,
    });   
    setEvent(resEvent.data);
    console.log(resEvent.data);
  }, []);
  
  const search = async () => {
    let start = $("#start").val();
    let end = $("#end").val();
    let result = await axios.post("http://localhost:3001/event/search-event", {start: start, end: end});
    console.log(result);
    setEvent(result.data);
  }
  
  const eventList = event.map((data) => {
    return <EventCard key={data.id} id={data.id} title={data.title} event_time_month ={data.event_time_month} 
      event_time_day={data.event_time_day}
      event_time_weekday={data.event_time_weekday}
      time={data.datetime}
      quota={data.quota}   
      coach={data.coach}
      image={data.coachImage}
      event_img={data.image} 
    />;
  })

  return (
    <div>
      <Navbar />
      <nav>
        <EventBanner />
      </nav>
      <div className="event_container">
        <div>
          <h3>訂閱會員限定 活動報名中</h3>
        </div>
        <EventSearchBar search={search}/>
        {eventList}
      </div>
      <Footer />
    </div>
  );
}

export default Event;
