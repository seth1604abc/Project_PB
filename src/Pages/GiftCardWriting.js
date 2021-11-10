import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GiftCardWriting = () => {
  return (
    <>
      <Navbar />
      <div className="sendGift container mb-5 w-50">
        <h3>送禮人資料</h3>
      </div>
      <div className="container d-flex justify-content-center">
        <label htmlFor="name">姓名:</label>
        <input type="text" id="name" className="me-5" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div className="getGift d-flex flex-column container w-50">
        <h3>禮物卡內容</h3>
        <label htmlFor="gift-name">姓名:</label>
        <input type="text" id="gift-name" />
        <label htmlFor="gift-email">Email:</label>
        <input type="email" id="gift-email" />
        <label htmlFor="message">訊息:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <Footer />
    </>
  );
};

export default GiftCardWriting;
