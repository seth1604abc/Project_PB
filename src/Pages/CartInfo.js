import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {ZipCodeTW} from "zipcode-tw-react";

function CartInfo() {
  const location = useLocation();
  const list = location.state.checkList;
  const point = location.state.usePoint;
  const total = location.state.total;
  const user = location.state.uData;
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
const[checked,setChecked]=useState(false);
  const handleName=(e)=>{
      if(e.target.value!==userName){
          setChecked(false);
      }
      setUserName(e.target.value)
  }
  const handlePhone=(e)=>{
    if(e.target.value!==userPhone){
        setChecked(false);
    }
      setUserPhone(e.target.value)
  }
  
  const handleUserData = (e) => {
    if (checked) {
      setUserName("");
      setUserPhone("");
      setChecked(false);
    } else {
      setUserName(`${user.first_name}${user.last_name}`);
      setUserPhone(user.phone);
      setChecked(true);
    }
  };

  useEffect(() => {
    // console.log(location);
    console.log(list, point, total, user);
  }, []);
  //map商品
  const buyList = list.map((item) => {
    return (
      <>
        <div className="cart-content__box d-flex align-items-center">
          <div className="cart-cotent__box__image me-3">
            <img src={`./product_images/${item.name}`} alt="" />
          </div>
          <div className="cart-cotent__box__title me-4">
            <span className="text-black">{item.title}</span>
          </div>
          <div className="cart-cotent__box__count ">數量:{item.amount}</div>
          <div className="cart-cotent__box__price me-3">NT{item.price}元</div>
        </div>
        <hr
          className={list.indexOf(item) === list.length - 1 ? "d-none" : ""}
          style={{ width: "100%", margin: "0" }}
        />
      </>
    );
  });
  return (
    <>
      <Navbar />
      <div className="cart-contanier">
        <div className="cart-progress-bar d-flex justify-content-between">
          <div className="cart-progress-bar__box">
            <div className="cart-progress-bar__box__ball">1</div>
            <div className="cart-progress-bar__box__txt">購物清單</div>
          </div>
          <div className="cart-progress-bar__box">
            <div className="cart-progress-bar__box__ball">2</div>
            <div className="cart-progress-bar__box__txt">填寫資料</div>
          </div>
          <div className="cart-progress-bar__box">
            <div className="cart-progress-bar__box__ball">3</div>
            <div className="cart-progress-bar__box__txt">訂單確認</div>
          </div>
          <hr className="cart-progress-bar__line" />
        </div>

        <div className="cart-content">
          <div className="cart-content-l me-5">
            <div className="cart-content__title p-3">
              <h3>訂單摘要</h3>
            </div>
            <div className="cart-content-l__info">{buyList}</div>

            <div className="cart-content__title p-3 mt-4">
              <h3>收件人資料</h3>
            </div>
            <div className="cart-content-l__info">
              <div className="cart-content-l__info__check d-flex align-items-center">
                <input id="memberData" type="checkbox" onChange={handleUserData} checked={checked} />
                <label for="memberData" className="ms-2">同會員資料</label>
              </div>
              <div className="cart-content-l__info__data">
                <p>收件人名稱</p>
                <input type="text" placeholder="請輸入收件人名稱" onChange={handleName} value={userName} 

                />
              </div>
              <p style={{ fontSize: "14px", color: "red" }}>
                請填入收件人真實姓名，以確保順利收件
              </p>
              <div className="cart-content-l__info__data">
                <p>收件人電話</p>
                <input type="text" placeholder="請輸入收件人電話號碼" onChange={handlePhone} value={userPhone} />
              </div>
            </div>
          </div>
          <div className="cart-content-r">
            <div className="cart-content__title p-3">
              <h3>選擇運送及付款方式</h3>
            </div>
            <div className="cart-content-r__payment">
              {/* <div className="cart-content-l__paymethod"> */}
              <div className="cart-content-l__paymethod__data">
                <p>運送方式</p>
                <select name="" id="">
                  <option value="">宅配到府</option>
                  <option value="">超商取貨</option>
                </select>
              </div>
              <div className="cart-content-l__paymethod__data">
                <p>付款方式</p>
                <select name="" id="">
                  <option value="">貨到付款</option>
                  <option value="">信用卡</option>
                </select>
              </div>
              {/* </div> */}

              <p>運送地址(宅配)</p>
              {/* <select name="" id="">
                <option value="">台北市</option>
                <option value="">桃園市</option>
              </select>
              <select name="" id="" style={{ marginLeft: "20px" }}>
                <option value="">東區</option>
                <option value="">北區</option>
              </select>
              <div style={{ margin: "10px 0" }}>
                <input
                  style={{ padding: "10px", width: "95%" }}
                  type="text"
                  placeholder="請輸入地址"
                />
              </div> */}
              <ZipCodeTW displayType="text"/>

              <p>運送地址(超商)</p>
              <select name="" id="">
                <option value="">台北市</option>
                <option value="">桃園市</option>
              </select>
              <select name="" id="" style={{ marginLeft: "20px" }}>
                <option value="">東區</option>
                <option value="">北區</option>
              </select>
              <div style={{ margin: "10px 0" }}>
                <input
                  style={{ padding: "10px", width: "95%" }}
                  type="text"
                  placeholder="選擇超商門市"
                />
              </div>

              <p>付款方式: 貨到付款</p>

              <p>付款方式: 信用卡</p>
              <input type="radio" />
              <i
                style={{ fontSize: "18px", marginLeft: "10px" }}
                class="fab fa-cc-visa"
              ></i>
              <span>(●●●●●●-1234)</span>

              <p
                style={{
                  textDecoration: "underline",
                  color: "#2571E3",
                  fontSize: "14px",
                }}
              >
                +新增信用卡
              </p>
            </div>
            <div className="cart-content-r__btn">
              <button
                style={{
                  marginRight: "20px",
                  backgroundColor: "#ffecd2",
                  color: "black",
                }}
              >
                上一步
              </button>
              <button style={{ backgroundColor: "#2571e3", color: "white" }}>
                確認訂單
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartInfo;
