import React from "react";
import "../css/Event.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventBanner from "../components/Event/EventBanner";
import EventCard from "../components/Event/EventCard";
import EventSearchBar from "../components/Event/EventSearchBar";
import { useState, useEffect } from "react";
function Event() {
  //這邊是Link用的，啟學所有
  //讓每次進入頁面在最上方
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });

  }, []);

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
         
        </div>
      <Footer />
    </div>
  );
}

export default Event;
