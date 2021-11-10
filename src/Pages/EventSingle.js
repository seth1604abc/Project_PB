import React from "react";
import "../css/EventSingle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventContent from "../components/EventSingle/EventContent";
import EventOtherCard from "../components/EventSingle/EventOtherCard";

function EventSingle() {
  return (
    <div>
      <Navbar />
      <main>
        <EventContent />
        <EventOtherCard />
      </main>
      <Footer />
    </div>
  );
}

export default EventSingle;