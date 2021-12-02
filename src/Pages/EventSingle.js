import React, { useEffect, useState } from "react";
import "../css/EventSingle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventContent from "../components/EventSingle/EventContent";
import EventOtherCard from "../components/EventSingle/EventOtherCard";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventSingle() {
  let { id } = useParams()
  const [datas, setData] = useState([]);
  useEffect(async () => {
    let result = await axios.post("http://localhost:3001/event/other", { id: id })
    console.log(result.data);
    setData(result.data);
  }, [])
  
  return (
    <div>
      <Navbar />
      <main>
        <EventContent />
        <div className="text-center">
          <h3 className="my-5">瀏覽其它活動</h3>
        </div>
        <div className="container my-5" >
          <div className="row">
            <EventOtherCard datas={datas[0]} />
            <EventOtherCard datas={datas[1]} />
            <EventOtherCard datas={datas[2]} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EventSingle;