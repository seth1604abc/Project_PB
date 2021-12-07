import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from 'axios';
import Navbar from "../components/Navbar";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


function Subscribe() {
  const history = useHistory();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [role, setRole] = useState({});  
  useEffect( async () => {
    let res = await axios.get("http://localhost:3001/auth/login", { withCredentials: true });        
    if(res.data.userId) {
      setIsLoggedin(true);
      setRole(res.data);
    }    
  }, [])

  const showDiv = () => {
    if(document.querySelector(".navbar-login-li__div").style.display == "block") {
      document.querySelector(".navbar-login-li__div").style.display = "none";
    } else {
      document.querySelector(".navbar-login-li__div").style.display = "block";
    }   
  }

  const logout = async () => {
    Swal.fire({
      title: "確定要登出嗎?",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消",
    }).then(async (res) => {
      if(res.isConfirmed){
        let result = await axios.get("http://localhost:3001/auth/logout", { withCredentials: true });
        history.push("/login");
      }
    })   
  }

  const sub = async (e) => {
    let value = e.target.value;
    let price = e.target.id;   
    let result = await axios.post("http://localhost:3001/member/subscribe", {value: value}, {withCredentials:true});    
    if(result.data == "loginerror"){
      history.push("/login");
    }    
    if(result.data.message == "您已經是訂閱會員"){
      Swal.fire(result.data.message);
    } else {
      history.push(`/subscribe-pay/${value}/${price}`);      
    }
  }

  const pushsub = () => {
    history.push("/giftcard")
  }

  return (
    <>
      <div className="main-nav-sub" style={{ position: "relative" }}>
        <div className="sub-nav">
          <Link to="/">
            <div className="main-nav__logo">
              <img src="/image/pblogo.png" alt="" />
            </div>
          </Link>
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
                <Link to="/event">活動</Link>
              </li>              
              <li style={{ justifyContent: "end" }}>
                <Link to="/cart">
                  <i style={{}} className="fas fa-shopping-cart"></i>
                </Link>
              </li>
              {           
                isLoggedin ? (
                <li className="navbar-login-li" onClick={showDiv}>
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <div className="navbar-login-li__div">
                    <div>
                      <Link to={role.url}>
                        {role.role}
                      </Link>
                    </div>
                    <div style={{marginTop: "10px"}} onClick={logout}>登出</div>
                  </div>
                </li>
                ) : (
                  <li>
                    <Link to="/login" style={{fontSize: "14px"}}>註冊/登入</Link>                
                  </li>
                )
              }
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
            <a href="#plan" style={{color: "black", textDecoration: "none"}}>查看方案</a>              
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
              <span>購買商品</span>
              <span>可以獲得回饋點數</span>
            </div>
            <div className="col subscribe-benefit-box">
              <img src="/image/sub-content-3.png" alt="" />
              <p>活動</p>
              <span>參加訂閱者獨享活動</span>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: "200px" }} id="plan">
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
                <button value="days" id="0" className="sub-start-btn" style={{marginTop: "50px"}} onClick={sub}>馬上開始</button>
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
                <button value="years" id="4200" className="sub-start-btn" style={{marginTop: "20px", padding: "5px 40px"}} onClick={sub}>馬上開始</button>
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
                <button value="months" id="499" className="sub-start-btn" style={{marginTop: "10px"}} onClick={sub}>馬上開始</button>
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
              src="/images/giftcard.png"
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
              onClick={pushsub}
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
