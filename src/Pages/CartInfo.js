import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { ZipCodeTW } from "zipcode-tw-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FormControlUnstyled } from "@mui/core";
import * as cheerio from "cheerio";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
const request = require("request");

function CartInfo() {
  const history = useHistory();
  const location = useLocation();
  const list = location.state.checkList;
  const point = location.state.usePoint;
  const total = location.state.total;
  const user = location.state.uData;
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({});
  const [martList, setMartList] = useState([]);
  const handleName = (e) => {
    if (e.target.value !== userName) {
      setChecked(false);
    }
    setUserName(e.target.value);
  };
  const handlePhone = (e) => {
    if (e.target.value !== userPhone) {
      setChecked(false);
    }
    setUserPhone(e.target.value);
  };
  //通會員資料
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
    setData(user);
  }, []);

  useEffect(async () => {
    // console.log(location);
    //抓超商資料
    await axios
      .post("http://localhost:3001/cart/mart", {
        city: `${data.city}`,
        area: `${data.area}`,
      })
      .then(function (response) {
        const afterReplace = response.data.replace(
          /<\?xml.+\?>|<!DOCTYPE.+]>/g,
          ""
        );

        var result = afterReplace.match(/<POIName>(.*?)<\/POIName>/g);
        // console.log(result);
        if (result !== null) {
          let mart = result.map((name) => name.replace(/<\/?POIName>/g, ""));
          setMartList(mart);
          console.log(martList);
        }
      });
  }, [data.city, data.area]);

  //處理信用卡
  const [cData, setCData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
    focus: "",
  });

  const handleFocus = (e) => {
    setCData({ ...cData, focus: e.target.name });
  };
  const handleInputNumber = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length > 16) {
      return;
    } else {
      setCData({ ...cData, [e.target.name]: e.target.value });
    }
  };

  const handleInputChange = (e) => {
    setCData({ ...cData, [e.target.name]: e.target.value });
  };
  //處理縣市
  const handleCountyChange = async (e) => {
    const { countyValue ,districtValue} = e;
    let newData = { ...data };
    newData.city = countyValue;
    newData.area = districtValue;
    await setData(newData);
  };

  const handleDistrictChange = async (e) => {
    const { districtValue } = e;
    let newData = { ...data };
    newData.area = districtValue;
    await setData(newData);
  };
  //MAP超商列表
  const [martSelect, setMartSelect] = useState([]);
  useEffect(() => {
    let martOption = martList.map((name) => {
      return <option value={name}>{name}</option>;
    });
    setMartSelect(martOption);
  }, [martList]);

  //處理地址
  const handleAddress = (e) => {
    let newData = { ...data };
    newData.addressDetail = e.target.value;
    setData(newData);
  };
  //處理送貨方式
  const [shipment, setShipment] = useState(1);
  const handleShipment = (e) => {
    setShipment(Number(e.target.value));
  };
  //處理付款方式
  const [payment, setPayment] = useState(1);
  const handlePayment = (e) => {
    setPayment(Number(e.target.value));
  };
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
            <div className="cart-content-l__info">
              {buyList}
              <hr />
              <div className="text-end me-1 mb-1">使用點數:{point}</div>
              <div className="text-end me-1">總金額:{total}</div>
            </div>

            <div className="cart-content__title p-3 mt-4">
              <h3>收件人資料</h3>
            </div>
            <div className="cart-content-l__info">
              <div className="cart-content-l__info__check d-flex align-items-center">
                <input
                  id="memberData"
                  type="checkbox"
                  onChange={handleUserData}
                  checked={checked}
                />
                <label for="memberData" className="ms-2">
                  同會員資料
                </label>
              </div>
              <div className="cart-content-l__info__data">
                <p>收件人名稱</p>
                <input
                  className="form-control"
                  type="text"
                  placeholder="請輸入收件人名稱"
                  onChange={handleName}
                  value={userName}
                />
              </div>
              <p style={{ fontSize: "14px", color: "red" }}>
                請填入收件人真實姓名，以確保順利收件
              </p>
              <div className="cart-content-l__info__data">
                <p>收件人電話</p>
                <input
                  className="form-control"
                  type="text"
                  placeholder="請輸入收件人電話號碼"
                  onChange={handlePhone}
                  value={userPhone}
                />
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
                <select
                  className="form-select"
                  name=""
                  id=""
                  onChange={handleShipment}
                >
                  <option value="1">宅配到府</option>
                  <option value="2">超商取貨</option>
                </select>
              </div>

              {/* </div> */}

              <p>運送地址{shipment === 1 ? "(宅配)" : "(超商)"}</p>
              <ZipCodeTW
                displayType="text"
                zipStyle={{ display: "none" }}
                districtStyle={{ marginLeft: ".5rem" }}
                districtClass="districtClass form-select d-inline"
                countyClass="countyClass form-select d-inline"
                countyValue={data.city}
                handleChangeCounty={handleCountyChange}
                districtValue={data.area}
                handleChangeDistrict={handleDistrictChange}
              />

              {shipment === 1 ? (
                <input
                  type="text"
                  placeholder="請輸入詳細地址"
                  className="my-3 w-75 form-control"
                  onChange={handleAddress}
                  onClick={() => console.log(data)}
                />
              ) : (
                <select
                  className="form-select d-inline mx-2"
                  name=""
                  id=""
                  onChange={handleAddress}
                  // onChange={handlePayment}
                >
                  {martList.length > 0 ? martSelect : "請選擇地區"}
                </select>
              )}
              {/* <input
                type="text"
                placeholder="請輸入詳細地址"
                className="my-3 w-75 form-control"
                onChange={handleAddress}
                onClick={() => console.log(data)}
              /> */}
              <div className="cart-content-l__paymethod__data">
                <p>付款方式</p>
                <select
                  className="form-select"
                  name=""
                  id=""
                  onChange={handlePayment}
                >
                  <option value="1">貨到付款</option>
                  <option value="2">信用卡</option>
                </select>
              </div>
              <p>付款方式: {payment === 1 ? "貨到付款" : `信用卡`}</p>
              {payment == 2 ? (
                <div id="PaymentForm" className="creditCard-group p-3">
                  <Cards
                    cvc={cData.cvc}
                    expiry={cData.expiry}
                    focused={cData.focus}
                    name={cData.name}
                    number={cData.number}
                  />
                  <form action="" className="d-flex flex-column my-3">
                    <input
                      type="tel"
                      className="form-control my-1"
                      name="number"
                      placeholder="信用卡號"
                      onChange={handleInputNumber}
                      pattern="[\d| ]{16,22}"
                      value={cData.number}
                      onFocus={handleFocus}
                    />
                    <input
                      type="text"
                      className="form-control my-1"
                      name="name"
                      placeholder="持有人姓名"
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                    />
                    <input
                      type="text"
                      className="form-control my-1"
                      name="expiry"
                      placeholder="到期日"
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                    />
                    <input
                      type="tel"
                      className="form-control my-1"
                      name="cvc"
                      placeholder="CVC"
                      onChange={handleInputChange}
                      maxLength="3"
                      pattern="\d{3,4}"
                      onFocus={handleFocus}
                    />
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="cart-content-r__btn d-flex align-items-center justify-content-end">
              <Link
                to="cart"
                style={{
                  marginRight: "20px",
                  backgroundColor: "#ffecd2",
                  color: "black",
                  fontSize: "1.5rem",
                }}
                className="btn px-3"
              >
                上一步
              </Link>
              <button
                className="btn px-3"
                style={{
                  backgroundColor: "#2571e3",
                  color: "white",
                  fontSize: "1.5rem",
                }}
                onClick={async () => {
                  console.log(
                    `${data.countyValue}${data.districtValue}${data.addressDetail}`
                  );
                  await axios
                    .post(
                      `http://localhost:3001/cart/add-order`,
                      {
                        total: `${total}`,
                        user_id: `${data.id}`,
                        point: `${point}`,
                        address: `${data.city}${data.area}${data.addressDetail}`,
                        payment: `${payment}`,
                        shipment: `${shipment}`,
                        gainPoint: `${total / 100}`,
                      },
                      { withCredentials: true }
                    )
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                  await axios.delete(
                    "http://localhost:3001/cart/delete-selected",
                    {
                      data: {
                        items: `${list.map((item) => item.product_id)}`,
                      },
                    },{withCredentials: true}
                  );
                  await axios.patch(
                    `http://localhost:3001/cart/gain-point/${
                      point - total / 100
                    }`,{},
                    { withCredentials: true }
                  );

                  await list.forEach((item) => {
                    if (item.amount <= 0 || item.product_id <= 0) {
                      return;
                    } else {
                      axios.patch(
                        `http://localhost:3001/cart/product-amount/${item.amount}/${item.product_id}`,
                        {},
                        { withCredentials: true }
                      );
                    }
                    return;
                  });
                  let orderid = await axios.get(
                    "http://localhost:3001/cart/getorderid",
                    { withCredentials: true }
                  );
                  console.log(orderid);
                  await list.forEach((item) =>
                    axios.post(
                      "http://localhost:3001/cart/add-orderdetail",
                      {
                        id: `${item.product_id}`,
                        amount: `${item.amount}`,
                        price: `${item.price * item.amount}`,
                        order: `${orderid.data - 1}`,
                      },
                      { withCredentials: true }
                    )
                  );

                  Swal.fire({
                    title: "購買完成!",
                    text: `已成功購買${list.length}項商品`,
                    icon: "success",
                    confirmButtonText: "繼續購物",
                    confirmButtonColor: "#1d6cf5",
                  }).then(history.push("/product"));
                }}
              >
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
