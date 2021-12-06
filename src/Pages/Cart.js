import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formControlClasses } from "@mui/material";

function Cart() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [cList, setCList] = useState([]);
  const [uData, setUData] = useState({});
  useEffect(async()=>{
    let userData = await axios.get("http://localhost:3001/member/info", {
      withCredentials: true,
    });
    setUData(userData.data[0]);
    console.log(userData.data);
  },[])
  useEffect(async () => {
    // let cartList = await axios.get("http://localhost:3001/cart/list", {
    //   withCredentials: true,
    // });
    // setCList(cartList.data);
    // setList(
    //   cartList.data.map((item) => {
    //     return item.product_id;
    //   })
    // );
    

    // console.log(cartList.data);
    // console.log(cList);
  }, []);
  useEffect(async () => {
    let cartList = await axios.get("http://localhost:3001/cart/list", {
      withCredentials: true,
    });
    setCList(cartList.data);
    setList(
      cartList.data.map((item) => {
        return item.product_id;
      })
    );
  }, [isCheck]);

  //處理全選
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    if (isCheckAll) {
      setIsCheck([]);
    }else{setIsCheck(list);}
  };
  //處理勾選
  const handleClick = (e) => {
    const { id } = e.target;
    if (isCheck.includes(Number(id))) {
      let newIsCheck = isCheck.filter((thing) => thing !== Number(id));
      console.log(newIsCheck);
      setIsCheck(newIsCheck);
    } else {
      let newIsCheck = [...isCheck, Number(id)];
      console.log(newIsCheck);
      setIsCheck(newIsCheck);
    }
  };

  //處理多選刪除
  const handleDeleteSelected = () => {
    if (isCheck.length <= 0) {
      return;
    } else {
      // let checkList=isCheck.join(",");
      // console.log(checkList);
      for(let i=0;i<isCheck.length;i++){
        axios
        .delete(
          `http://localhost:3001/cart/delete/${isCheck[i]}`,
          // {
          //   data: {
          //     items: `${isCheck[i]}`,
          //   },
          // },
          { withCredentials: true }
        )
        .then(function (response) {
          console.log(response);
          setCList(
            cList.filter((item) => !isCheck.find((check) => item == check))
          );
          console.log(isCheck.join());
          console.log(cList);
          setIsCheck([]);
          setIsCheckAll(false);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
    }
  };

  //處理購物金
  const [usePoint, setUsePoint] = useState(0);
  const handlePoint = (e) => {
    if (e.target.value > uData.point) {
      e.target.value = uData.point;
    }
    if (e.target.value <= 0) {
      e.target.value = 0;
    }
    if (e.target.value > total) {
      e.target.value = total;
    }
    setUsePoint(e.target.value);
  };
  //初始總金額
  var total = 0;
  const handleAfterTotal = () => {
    return total - usePoint;
  };
  //map購物清單
  let cart = cList.map((item) => {
    let itemPrice = item.price * item.amount;
    if (isCheck.includes(item.product_id)) {
      total += itemPrice;
    }
    return (
      <>
        <div className="cart-content__box d-flex">
          <div className="cart-cotent__box__check">
            <input
              type="checkbox"
              key={item.product_id}
              id={item.product_id}
              name={item.product_id}
              onClick={handleClick}
              checked={isCheck.includes(item.product_id) ? true : false}
            />
          </div>
          <div className="cart-cotent__box__image">
            <img src={`./product_images/${item.name}`} alt="" />
          </div>
          <div className="cart-cotent__box__title me-3">
            <Link to={`/product-single/${item.category}/${item.product_id}`}>
              {item.title}
            </Link>
          </div>
          <div className="cart-cotent__box__count">
            <p>數量:</p>
            <input
              className="form-control"
              type="number"
              min="1"
              defaultValue={item.amount}
              onChange={async (e) => {
                // let newList=[...cList].filter((thing)=>thing.product_id!==item.product_id)
                let newList = [...cList];
                let newThing = newList[cList.indexOf(item)];
                newThing.amount = e.target.value;
                setCList(newList);
                await axios
                  .patch(
                    `http://localhost:3001/cart/list/${item.product_id}/${item.amount}`,
                    {},
                    { withCredentials: true }
                  )
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            />
          </div>
          <div className="cart-cotent__box__price">NT{item.price}元</div>
          <div className="cart-cotent__box__delete">
            <button
              className="btn"
              onClick={async() => {
                let newList = [...cList];
                let thing=newList.splice(newList.indexOf(item), 1);
                let newNewList=newList.filter(product=>product!==thing);
                await axios
                  .delete(
                    `http://localhost:3001/cart/delete/${item.product_id}`,
                    { withCredentials: true }
                  )
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                console.log(cList.indexOf(item))
                
                //   console.log(newList);
                setCList(newNewList);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <hr
          className={cList.indexOf(item) === cList.length - 1 ? "d-none" : ""}
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
          <div className="cart-content__list" style={{ marginRight: "30px" }}>
            <div className="cart-content__title p-3">
              <h3>購物車({cList.length}項)</h3>
            </div>
            <div className="cart-content__choose d-flex justify-content-between">
              <div style={{ padding: "3px" }}>
                <input
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  onChange={handleSelectAll}
                  checked={isCheckAll}
                />
                <span style={{ marginLeft: "3px" }}>選擇全部</span>
              </div>
              <button
                className="btn"
                style={
                  isCheck.length < 1
                    ? { backgroundColor: "#333" }
                    : { backgroundColor: "red" }
                }
                onClick={handleDeleteSelected}
              >
                刪除勾選
              </button>
            </div>
            <hr style={{ width: "100%", margin: "10px 0" }} />
            {cList.length <= 0 ? "購物車沒有商品" : cart}
          </div>

          <div className="cart-content__total">
            <div className="cart-content__title p-3">
              <h3>訂單摘要</h3>
            </div>
            <div className="cart-content__total__container">
              {/* <div className="cart-content__total__product d-flex justify-content-between">
                <div className="cart-content__total__product__title">
                  商品總計
                </div>
                <div className="cart-content__total__product__price">
                  
                </div>
              </div> */}
              <div className="cart-content__total__product d-flex justify-content-between">
                <div className="cart-content__total__product__title">
                  商品總計
                </div>
                <div className="cart-content__total__product__price">
                  {total}
                </div>
              </div>
              <div className="cart-content__total__benefit d-flex justify-content-between align-items-center">
                <div className="text-nowrap ">選擇紅利金</div>

                <div className="cart-content__total__benefit__count d-flex align-items-center justify-content-end">
                  <span
                    className="me-1"
                    style={{ fontSize: "0.8rem", color: "#333" }}
                  >
                    (目前擁有:{uData.point}點)
                  </span>
                  <input
                    type="number"
                    className="form-control w-50 align-self-end"
                    onChange={handlePoint}
                  />
                </div>
              </div>
              <hr />
              <div className="cart-content__total__product d-flex justify-content-between">
                <div className="cart-content__total__product__title">合計</div>
                <div className="cart-content__total__product__price">
                  {total - usePoint}
                </div>
              </div>
              <div className="d-flex justify-content-center my-3">
                <Link
                  to={{
                    pathname: "/cart-info",
                    state: {
                      checkList: cList.filter((item) =>
                        isCheck.includes(item.product_id)
                      ),
                      usePoint,
                      total: `${total - usePoint}`,
                      uData,
                    },
                  }}
                  className="btn"
                  style={
                    isCheck.length <= 0
                      ? {
                          backgroundColor: "#333",
                          color: "white",
                          border: "0px",
                          width: "100%",
                          pointerEvents: "none",
                        }
                      : {
                          backgroundColor: "#2571E3",
                          color: "white",
                          border: "0px",
                          width: "100%",
                        }
                  }
                >
                  下一步
                </Link>
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
