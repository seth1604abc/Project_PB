import React from "react";
import "../css/EventSingle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventContent from "../components/EventSingle/EventContent";
import EventOtherCard from "../components/EventSingle/EventOtherCard";
import GoogleMap from "../components/EventSingle/GoogleMap";

function EventSingle() {
  return (
    <div>
      <Navbar />
      <main>
        <EventContent />
        <EventOtherCard />
        <GoogleMap />
      </main>
      <Footer />
    </div>
  );
}

export default EventSingle;