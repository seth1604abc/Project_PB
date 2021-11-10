import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import $ from "jquery";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  //===========================動畫開始===========================

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


  //===========================動畫結束===========================
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const registerData = {
    email: email,
    password: password,
    checkPassword: checkPassword
  }
  //message為錯誤訊息設置
  const [message, setMessage] = useState("");

  const register = async () => {
    if(!email || !password || !checkPassword) {
      setMessage("有未輸入的欄位");
    } else if(password !== checkPassword) {
      setMessage("密碼必須相符");
    } else {
      try {
        let response = await axios.post("http://localhost:3001/auth/register", registerData);
        //如果有錯誤訊息
        if(response.data.code != 0){
          setMessage(response.data.message);
          console.log(response.data.message)
        } else {
          //沒有錯誤訊息        
          history.push("/");
        }
        
      } catch (e) {
        console.log("error: ", e);
      }
    }
  }

  const loginData = {
    email: email,
    password: password
  }
  const login = async () => {
    let result = await axios.post("http://localhost:3001/auth/login", loginData);
    if(result.data.message) {
      setMessage(result.data.message);
    } else {
      history.push("/");
    }
  }


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

              <div className="login-error-message">{message}</div>

              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-envelope"></i>
                </label>
                <input type="email" placeholder="電子信箱" onChange={
                  (e) => {
                    setEmail(e.target.value);
                  }
                }/>
              </div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-unlock-alt"></i>
                </label>
                <input type="password" placeholder="密碼" onChange={
                  (e) => {
                    setPassword(e.target.value);
                  }
                }/>

              </div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-unlock-alt"></i>
                </label>
                <input type="password" placeholder="確認密碼" onChange={
                  (e) => {
                    setCheckPassword(e.target.value);
                  }
                }/>
              </div>
              <button className="login-btn" onClick={register}>下一步</button>
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
              <div className="login-error-message">{message}</div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-envelope"></i>
                </label>
                <input type="text" placeholder="電子信箱" onChange={
                  (e) => {
                    setEmail(e.target.value);
                  }
                }/>
              </div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-unlock-alt"></i>
                </label>
                <input type="text" placeholder="密碼" onChange={
                  (e) => {
                    setPassword(e.target.value);
                  }
                }/>
              </div>
              <button className="register-btn" onClick={login}>登入</button>
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
