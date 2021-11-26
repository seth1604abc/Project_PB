import React from "react";
import "../css/Event.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventBanner from "../components/Event/EventBanner";
import EventCard from "../components/Event/EventCard";
import EventSearchBar from "../components/Event/EventSearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

function Event() {
  //這邊是Link用的，啟學所有
  //讓每次進入頁面在最上方
  useEffect(async () => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });

    let resEvent = await axios.get("http://localhost:3001/event", {
      withCredentials: true,
    });   
    setEvent(resEvent.data);
    console.log(resEvent.data);
  }, []);

  const [event, setEvent] = useState([]);


  const EventData = [
    {
      id: 1,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 2,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 3,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 4,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 5,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
  ];

  const eventList = EventData.map((data) => {
    return <EventCard key={data.id} id={data.id} title={data.title} event_time_month ={data.event_time_month} 
      event_time_day={data.event_time_day}
      event_time_weekday={data.event_time_weekday}
      time={data.time}
      quota={data.quota}   
      coach={data.coach}    
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
        <EventSearchBar />
        {eventList}
      </div>
      <Footer />
    </div>
  );
}

export default Event;
