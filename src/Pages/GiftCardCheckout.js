import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../css/GiftCardCheckout.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GiftCardCheckout = () => {
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div>結帳步驟</div>
      <div className="container giftCardCheckoutPage d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-evenly align-items-center">
          <div id="PaymentForm" className="creditCard-group p-3">
            <Cards
              cvc={data.cvc}
              expiry={data.expiry}
              focus={data.focus}
              name={data.name}
              number={data.number}
            />
            <form action="" className="d-flex flex-column my-3">
              <input
                type="number"
                className="form-control my-1"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
              />
              <input
                type="date"
                className="form-control my-1"
                name="expiry"
                placeholder="Expire Date"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control my-1"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
              />
              <input
                type="number"
                className="form-control my-1"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
              />
            </form>
          </div>
          <div className="w-50 ">
            <h2 className="giftCard-title p-3 mb-0">訂單摘要</h2>
            <div className="giftCard-order container p-4">
              <div className="row mb-2">
                <div className="col-6">商品</div>
                <div className="col">數量</div>
                <div className="col">金額</div>
              </div>
              <div className="row mb-2">
                <div className="col-6">禮物卡</div>
                <div className="col">3張</div>
                <div className="col">$NT 499</div>
              </div>
              <div className="row mb-3">
                <div className="col-6">商品總計</div>
                <div className="col"></div>
                <div className="col">$NT 3000</div>
              </div>
              <div className="row mb-3 align-items-start">
                <div className="col-6 text-nowrap">
                  選擇紅利金<span>(剩餘點數:150點)</span>:
                </div>
                <div className="col"></div>
                <input type="number" className="col  me-1" />
              </div>
              <hr className="mb-1" />
              <div className="row mb-3">
                <div className="col-6">合計:</div>
                <div className="col"></div>
                <div className="col">$NT3000</div>
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
