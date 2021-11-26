import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cList, setCList] = useState([]);
  useEffect(async () => {
    let cartList = await axios.get("http://localhost:3001/cart/list", {
      withCredentials: true,
    });
    setCList(cartList.data);
    // console.log(cartList.data);
    console.log(cList);
  }, []);
  //map購物清單
  let cart = cList.map((item) => {
    return (
      <>
        <div className="cart-content__box d-flex">
          <div className="cart-cotent__box__check">
            <input  type="checkbox" name={item.product_id}/>
          </div>
          <div className="cart-cotent__box__image">
            <img src={`./product_images/${item.name}`} alt="" />
          </div>
          <div className="cart-cotent__box__title">
            <Link to={`/product-single/${item.category}/${item.product_id}`}>{item.title}</Link>
          </div>
          <div className="cart-cotent__box__count">
            <p>數量:</p>
            <input type="number" min="1" defaultValue={item.amount}/>
          </div>
          <div className="cart-cotent__box__price">NT{item.price}元</div>
          <div className="cart-cotent__box__delete">
          <button className="btn"
          onClick={()=>{
              let newList=[...cList];
              newList.splice(cList.indexOf(item),1);
            //   console.log(newList);
              setCList(newList)
          }}>
          <i className="fas fa-trash-alt"></i>
          </button>
            
          </div>
        </div>
        <hr className={cList.indexOf(item)===cList.length-1?"d-none":""} style={{ width: "100%", margin: "0" }} />
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
          <div className="cart-content__list" style={{ marginRight: "30px" }}>
            <div className="cart-content__title p-3">
              <h3>購物車({cList.length}項)</h3>
            </div>
            <div className="cart-content__choose d-flex justify-content-between">
              <div style={{ padding: "3px" }}>
                <input type="checkbox" />
                <span style={{ marginLeft: "3px" }}>選擇全部</span>
              </div>
              <button>刪除全部</button>
            </div>
            <hr style={{ width: "100%", margin: "10px 0" }} />
            {cList.length<=0?"購物車沒有商品":cart}
          </div>

          <div className="cart-content__total">
            <div className="cart-content__title p-3">
              <h3>訂單摘要</h3>
            </div>
            <div className="cart-content__total__container">
              <div className="cart-content__total__product d-flex justify-content-between">
                <div className="cart-content__total__product__title">
                  商品總計
                </div>
                <div className="cart-content__total__product__price">
                  NT 4,000
                </div>
              </div>
              <div className="cart-content__total__product d-flex justify-content-between">
                <div className="cart-content__total__product__title">
                  商品總計
                </div>
                <div className="cart-content__total__product__price">
                  NT 4,000
                </div>
              </div>
              <div className="cart-content__total__benefit d-flex justify-content-between">
                <div className="cart-content__total__benefit__check">
                  <input type="checkbox" />
                  <span>選擇紅利金</span>
                </div>
                <div className="cart-content__total__benefit__count">
                  -NT 100
                </div>
              </div>
              <hr />
              <div className="cart-content__total__product d-flex justify-content-between">
                <div className="cart-content__total__product__title">合計</div>
                <div className="cart-content__total__product__price">
                  NT 4,000
                </div>
              </div>
              <div className="d-flex justify-content-center my-3">
                <button
                  style={{
                    backgroundColor: "#2571E3",
                    color: "white",
                    border: "0px",
                    width: "100%",
                  }}
                >
                  下一步
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
