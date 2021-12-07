import React from "react";
import "../css/GiftCardWriting.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';
import $ from 'jquery';
import Swal from "sweetalert2";
import { useHistory } from "react-router";

const GiftCardWriting = () => {
  let giftData = {};
  const history = useHistory();
  const submit = async () => {
    giftData.name = $('#name').val();
    giftData.giftName = $('#gift-name').val();
    giftData.giftEmail = $('#gift-email').val();
    giftData.giftMessage = $('#gift-message').val();

    let response = await axios.post("http://localhost:3001/gift", giftData,{withCredentials: true});
    console.log(response);
    if(response){
      Swal.fire("購買成功!").then(() => {
        history.push("/giftcard");
      })
    }
  }

  return (
    <>
      <Navbar />
      <div className="GiftCardWriting__position d-flex flex-column justify-content-center align-items-center">
        <div className="sendGift container mb-5 w-50  p-0">
          <h3 className="p-3">送禮人資料</h3>          
          <div className="d-flex justify-content-center  my-3 mx-2">
            <div className="d-flex align-items-center">
              <label className="me-1 text-nowrap" htmlFor="name">
                姓名:
              </label>
              <input type="text" id="name" className="me-5 form-control" name="name"/>
            </div>
            <div className="d-flex align-items-center">
              <label className="me-1 " htmlFor="email">
                Email:
              </label>
              <input type="email" id="email" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="getGift d-flex flex-column align-items-stretch container w-50 p-0 mb-4">
          <h3 className="p-3">禮物卡內容</h3>
          <div className="mx-5 my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="gift-name" className="text-nowrap me-3">姓名:</label>
              <input type="text" id="gift-name" className="form-control" name="gift-name"/>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="gift-email" className="text-nowrap me-1">Email:</label>
              <input type="email" id="gift-email" className="form-control" name="gift-email"/>
            </div>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <label htmlFor="message" className="text-nowrap me-3">訊息:</label>
              <textarea name="gift-message" id="gift-message" cols="" rows="10" className="form-control"></textarea>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end container w-50 p-0">
            <button className="btn GiftCardWriting__btn__pre me-3 " onClick={() => {
              history.push("/giftcard-checkout")
            }}>上一步</button>
            <button className="btn GiftCardWriting__btn__next " onClick={submit}>下一步</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GiftCardWriting;
