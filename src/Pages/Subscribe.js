import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Subscribe() {
  return (
    <>
      <div className="main-nav-sub" style={{ position: "relative" }}>
        <div className="sub-nav">
          <div className="main-nav__logo">
            <img src="/image/pblogo.png" alt="" />
          </div>
          <div className="main-nav__link d-flex align-items-center">
            <ul className="main-nav__ul d-flex align-items-center">
              <li>
                <Link to="/course">課程</Link>
              </li>
              <li>
                <Link to="/product">商城</Link>
              </li>
              <li>
                <Link to="/subscribe">訂閱</Link>
              </li>
              <li>
                <Link to="/">活動</Link>
              </li>
              <li style={{ marginRight: "50px" }}>
                <Link to="/article">文章</Link>
              </li>
              <li style={{ justifyContent: "end" }}>
                <Link to="/">
                  <i style={{}} className="fas fa-shopping-cart"></i>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="fas fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sub-nav__title">
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bolder",
              letterSpacing: "10px",
              width: "100%",
              textAlign: "right",
            }}
          >
            免費使用七天
          </p>
          <p
            style={{
              width: "100%",
              textAlign: "right",
              fontSize: "30px",
              letterSpacing: "10px",
            }}
          >
            之後每個月只要$499.00
          </p>
          <div style={{ width: "100%", textAlign: "right" }}>
            <button
              style={{
                backgroundColor: "#ffecd2",
                color: "black",
                borderRadius: "20px",
                padding: "10px 25px",
                border: "1px solid transparent",
              }}
            >
              查看方案
            </button>
          </div>
        </div>
        <img
          src="/image/sub-nav.png"
          alt=""
          style={{
            height: "80%",
            position: "absolute",
            right: "100px",
            bottom: "-100px",
          }}
        />
      </div>
      {/* 內容 */}
      <div className="sub-main-container">
        <div className="text-center">
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bolder",
              letterSpacing: "10px",
            }}
          >
            成為訂閱者的好處?
          </p>
          <div className="row" style={{ margin: "50px auto", width: "80%" }}>
            <div className="col subscribe-benefit-box">
              <img src="./image/sub-content-1.png" alt="" />
              <p>影片</p>
              <span>可以無限觀看</span>
            </div>
            <div className="col subscribe-benefit-box">
              <img src="/image/sub-content-2.png" alt="" />
              <p>商城</p>
              <p>購買商品</p>
              <span>可以獲得回饋點數</span>
            </div>
            <div className="col subscribe-benefit-box">
              <img src="/image/sub-content-3.png" alt="" />
              <p>活動</p>
              <span>參加訂閱者獨享活動</span>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: "200px" }}>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bolder",
              letterSpacing: "10px",
            }}
          >
            選擇適合自己的方案
          </p>
          <div className="row" style={{ margin: "50px auto", width: "80%" }}>
            <div className="col" style={{ paddingTop: "50px" }}>
              <div className="sub-method-card">
                <div style={{ borderBottom: "1px solid lightgray" }}>
                  <p className="sub-choice__title">免費試用</p>
                  <p className="sub-choice__eng">Free Trial</p>
                  <p className="sub-choice__day">Free/7天</p>
                </div>
                <div style={{ textAlign: "left", marginTop: "10px" }}>
                  搶先免費試用，試用期間擁有所有訂閱者福利喔!
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="sub-method-card"
                style={{ width: "320px", height: "400px" }}
              >
                <div style={{ borderBottom: "1px solid lightgray" }}>
                  <p
                    style={{ textAlign: "left", fontSize: "22px", margin: "0" }}
                  >
                    年度方案
                  </p>
                  <p
                    style={{ textAlign: "left", fontSize: "18px", margin: "0" }}
                  >
                    Year
                  </p>
                  <p style={{ textAlign: "right", letterSpacing: "3px" }}>
                    $350/30天
                  </p>
                </div>
                <div className="sub-choice-year">
                  <p>
                    <i className="fas fa-check-circle"></i>一般會員福利
                  </p>
                  <p>
                    <i className="fas fa-check-circle"></i>商品紅利點數
                  </p>
                  <p>
                    <i className="fas fa-check-circle"></i>參加獨享活動
                  </p>
                  <p>
                    <i className="fas fa-check-circle"></i>會員方案七折優惠
                  </p>
                </div>
              </div>
            </div>
            <div className="col" style={{ paddingTop: "50px" }}>
              <div className="sub-method-card">
                <div style={{ borderBottom: "1px solid lightgray" }}>
                  <p className="sub-choice__title">月方案</p>
                  <p className="sub-choice__eng">Month</p>
                  <p className="sub-choice__day">$499/30天</p>
                </div>
                <div className="sub-choice-month">
                  <p>
                    <i className="fas fa-check-circle"></i>一般會員福利
                  </p>
                  <p>
                    <i className="fas fa-check-circle"></i>商品紅利點數
                  </p>
                  <p>
                    <i className="fas fa-check-circle"></i>參加獨享活動
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ padding: "100px 0" }}
        >
          <div style={{ width: "25%" }}>
            <img
              src="/image/sub-giftcard.png"
              alt=""
              style={{ width: "400px" }}
            />
          </div>
          <div style={{ color: "#537895" }}>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "bolder",
                letterSpacing: "8px",
              }}
            >
              與好友一起運動
            </p>
            <p style={{ fontSize: "22px" }}>想跟好友分享運動的快樂嗎?</p>
            <p style={{ fontSize: "22px" }}>
              前往商城購買禮物卡，送給你的好友一
            </p>
            <p style={{ fontSize: "22px" }}>個月的會員福利!</p>
            <button
              style={{
                backgroundColor: "#1D6CF5",
                padding: "10px 25px",
                borderRadius: "10px",
                color: "white",
                border: "1px solid transparent",
              }}
            >
              馬上開始
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Subscribe;
