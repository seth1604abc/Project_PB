import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../css/GiftCardCheckout.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useHistory } from "react-router-dom";

const GiftCardCheckout = () => {
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
  const history = useHistory();
  const pushWrite = () => {
    history.push("/giftcard-writing");
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
              focused={data.focus}
              name={data.name}
              number={data.number}
            />
            <form action="" className="d-flex flex-column my-3">
              <input
                type="tel"
                className="form-control my-1"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleFocus}
                pattern="[\d| ]{16,22}"
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
                type="tel"
                className="form-control my-1"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
                onFocus={handleFocus}
                pattern="\d{3,4}"
              />
            </form>
          </div>
          <div className="" style={{width: "400px"}}>
            <h3 className="giftCard-title p-3 mb-0">訂單摘要</h3>
            <div className="giftCard-order container p-4">
              <div className="row mb-2">
                <div className="col-6">商品</div>
                <div className="col">數量</div>
                <div className="col">金額</div>
              </div>
              <div className="row mb-2">
                <div className="col-6">禮物卡</div>
                <div className="col">1張</div>
                <div className="col">$NT 499</div>
              </div>
              <div className="row mb-3">
                <div className="col-6">商品總計</div>
                <div className="col"></div>
                <div className="col">$NT 499</div>
              </div>
              
              <hr className="mb-1" />
              <div className="row mb-3">
                <div className="col-6">合計:</div>
                <div className="col"></div>
                <div className="col">$NT 499</div>
              </div>
              <div className="d-flex justify-content-end">
              <Link to="/giftcard">
              <button className="btn GiftCardCheckout__btn__pre me-3">取消購買</button>
              </Link>
              
              <Link to="/giftcard-writing">
              <button className="btn GiftCardCheckout__btn__next" >下一步</button>
              </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GiftCardCheckout;
