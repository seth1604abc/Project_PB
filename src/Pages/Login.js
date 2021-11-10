import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import $ from "jquery";

function Login() {
  const changeToLogin = () => {
    $(".login-slide-bar__login").addClass("animate-r-to-l");
    $(".signup-box").css("display", "none");
    $(".signin-box").css("display", "flex");
    setTimeout(function () {
      $(".login-slide-bar__login").addClass("login-slide-bar__register");
      $(".login-slide-bar__login").removeClass("animate-r-to-l");
      $(".login-slide-bar__login").removeClass("login-slide-bar__login");
    }, 2000);
  };

  const changeToRegister = () => {
    $(".login-slide-bar__register").addClass("animate-l-to-r");
    $(".signin-box").css("display", "none");
    $(".signup-box").css("display", "flex");
    setTimeout(function () {
      $(".login-slide-bar__register").addClass("login-slide-bar__login");
      $(".login-slide-bar__register").removeClass("animate-l-to-r");
      $(".login-slide-bar__register").removeClass("login-slide-bar__register");
    }, 1250);
  };

  return (
    <>
      <Navbar />
      <div
        className="loginContainer"
        style={{
          background: "url(/image/login-background.png) center no-repeat",
        }}
      >
        <div className="loginCard">
          <div className="signup-box">
            <div className="signup-box-l">
              <p>註冊帳號</p>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-envelope"></i>
                </label>
                <input type="text" placeholder="電子信箱" />
              </div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-unlock-alt"></i>
                </label>
                <input type="text" placeholder="密碼" />
              </div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-unlock-alt"></i>
                </label>
                <input type="text" placeholder="確認密碼" />
              </div>
              <button className="login-btn">註冊</button>
              <p
                style={{
                  color: "#C2BEBE",
                  fontSize: "14px",
                  marginTop: "50px",
                }}
              >
                或使用社群帳號登入
              </p>
              <div className="login-social">
                <i className="fab fa-facebook" style={{ color: "#2251D4" }}></i>
                <i className="fab fa-google" style={{ color: "#F81735" }}></i>
                <i className="fab fa-twitter" style={{ color: "#1D6CF5" }}></i>
              </div>
            </div>
            <div className="signup-box-r text-center">
              <p style={{ fontSize: "40px" }}>您好，朋友</p>
              <p>已經有帳號了嗎?</p>
              <p>點擊下方登入</p>
              <button
                className="login-slide-bar__login-btn"
                onClick={changeToLogin}
              >
                登入
              </button>
            </div>
          </div>

          <div className="signin-box">
            <div className="signin-box-l">
              <p style={{ fontSize: "40px" }}>歡迎回來，朋友</p>
              <p>還沒有帳號嗎?</p>
              <p>點擊下方註冊</p>
              <button
                className="login-slide-bar__login-btn"
                onClick={changeToRegister}
              >
                註冊
              </button>
            </div>
            <div className="signin-box-r text-center">
              <p>登入</p>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-envelope"></i>
                </label>
                <input type="text" placeholder="電子信箱" />
              </div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-unlock-alt"></i>
                </label>
                <input type="text" placeholder="密碼" />
              </div>
              <button className="register-btn">登入</button>
              <p
                style={{
                  color: "#C2BEBE",
                  fontSize: "14px",
                  marginTop: "50px",
                }}
              >
                或使用社群帳號登入
              </p>
              <div className="login-social">
                <i className="fab fa-facebook" style={{ color: "#2251D4" }}></i>
                <i className="fab fa-google" style={{ color: "#F81735" }}></i>
                <i className="fab fa-twitter" style={{ color: "#1D6CF5" }}></i>
              </div>
            </div>
          </div>

          <div className="login-slide-bar__login"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
