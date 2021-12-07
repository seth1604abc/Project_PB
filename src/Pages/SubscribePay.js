import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../css/GiftCardCheckout.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useHistory } from 'react-router-dom';
import Swal from "sweetalert2";

const SubscibePay = () => {
  const { time, price } = useParams();
  const [duration, setDuration] = useState({});
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
    focus: "",
  });
  

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setData({ ...data, focus: e.target.name });
  };
  useEffect(async () => {    
    let newData = {...duration};
    newData.text = time;
    newData.price = price;
    let result = await setDuration(newData)
  })
  
  const search = {
    "days": "七天",
    "months": "一個月",
    "years": "一年"
  }
  const history = useHistory()
  const nextStep = () => {
    Swal.fire("購買成功").then(() => {
      history.push("/member-info");
    })
  }
  const cancel = () => {
    history.push("/subscribe")
  }


  return (
    <>
      <Navbar />      
      <div className="container giftCardCheckoutPage d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-evenly align-items-center">
          <div id="PaymentForm" className="creditCard-group p-3">
            <Cards
              cvc={data.cvc}
              expiry={data.expiry}
              focus={data.focus}
              name={data.name}
              number={data.number}
              focused={data.focus}
            />
            <form action="" className="d-flex flex-column my-3">
              <input
                type="number"
                className="form-control my-1"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
              <input
                type="tel"
                className="form-control my-1"
                name="expiry"
                placeholder="Expire Date"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
              <input
                type="text"
                className="form-control my-1"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
              <input
                type="number"
                className="form-control my-1"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
            </form>
          </div>
          <div style={{width: "500px"}}>
            <h3 className="giftCard-title p-3 mb-0">訂單摘要</h3>
            <div className="giftCard-order container p-4">
              <div className="row mb-2">
                <div className="col-6">商品</div>
                <div className="col">期限</div>
                <div className="col">金額</div>
              </div>
              <div className="row mb-2">
                <div className="col-6">訂閱權限</div>
                <div className="col">{search[duration.text]}</div>
                <div className="col">NT ${duration.price}元</div>
              </div>
              
              
              <hr className="mb-1" />
              <div className="row mb-3">
                <div className="col-6">合計:</div>
                <div className="col"></div>
                <div className="col">NT ${duration.price}元</div>
              </div>
              <div className="d-flex justify-content-end">
              <button className="btn GiftCardCheckout__btn__pre me-3" onClick={cancel}>取消購買</button>
              <button className="btn GiftCardCheckout__btn__next" onClick={nextStep}>下一步</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubscibePay;