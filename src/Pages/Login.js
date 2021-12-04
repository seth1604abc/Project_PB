import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import $ from "jquery";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {ZipCodeTW} from "zipcode-tw-react";

const registerData = {    
  firstName: "",
  lastName: "",
  birth: "",
  phone: "",    
}

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
  
  //message為後端錯誤訊息設置
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");

  const registerNext = async () => {    
      try {
        registerData.email = $('input[name="email"]').val();
        registerData.password = $('input[name="password"]').val();        
        let response = await axios.post("http://localhost:3001/auth/register-check", registerData);
        
        //如果有錯誤訊息(code: 0 為沒有錯誤)
        if(response.data.code != 0){
          setMessage(response.data.message);
          console.log(response.data.message)
        } else {
          //沒有錯誤訊息        
          $('.loginCard').hide();
          $('.register-next').show();
        }        
      } catch (e) {
        console.log("error: ", e);
      }
    }   
  

  const backToLogin = () => {
    $('.loginCard').show();
    $('.register-next').hide();
  }

  const register = async () => {
    let city = $(".countyClass option:selected").text();
    let area = $(".districtClass option:selected").text();
    let addr = $("#address").val();        
    registerData.city = city;
    registerData.area = area;
    registerData.address = addr;
    registerData.firstName = $("input[name='firstName']").val();
    registerData.lastName = $("input[name='lastName']").val();
    registerData.birth = birth;
    registerData.phone = $("input[name='phone']").val();
        
    let data = await axios.post("http://localhost:3001/auth/register", registerData);
    if(data.data.message){
      console.log(data.data.message);
    }
    if(data.data.code == 0) {
      history.go(0);
    }
  }
  
  const loginData = {};

  const login = async () => {
    loginData.email = $('input[name="loginEmail"]').val();
    loginData.password = $('input[name="loginPassword"]').val();
    let result = await axios.post("http://localhost:3001/auth/login", loginData, { withCredentials: true });
    if(result.data.message) {
      setMessage(result.data.message);
    } else {
      history.push("/");
    }
  }

  const initialValues = {
    email: "",
    password: "",
    checkPassword: "",
  };

  const initialRegister = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  }
  const phoneReg = /^09[0-9]{8}$/
  const registerSchema = yup.object().shape({
    firstName: yup.string().required("請輸入姓氏"),
    lastName: yup.string().required("請輸入名字"),
    phone: yup.string().matches(phoneReg, "請輸入正確格式手機號碼").required("請輸入手機號碼"),
    address: yup.string().required("請輸入地址"),
  })

  const registerCheckSchema = yup.object().shape({
    email: yup.string().email("請輸入正確Email格式").required("請輸入Email"),
    password: yup.string().min(6, "密碼最少為6位").max(15, "密碼最多為15位").required("請輸入密碼"),
    checkPassword: yup.string().oneOf([yup.ref("password"), null], "確認密碼與密碼不相符!"),
  })

  return (    
    <>      
      <Navbar />
      <div
        className="loginContainer"
        style={{
          background: "url(/image/login-background.png) center no-repeat",
          position: "relative"
        }}
      >
        <div className="loginCard">
        {/* ====================================註冊頁面===================================== */}
          <div className="signup-box">
            <div className="signup-box-l">
              <p>註冊帳號</p>
              <Formik initialValues={initialValues} validationSchema={registerCheckSchema} onSubmit={registerNext}>
                <Form>              
                  <div className="login-error-message">{message}</div> {/* 後端錯誤訊息 */}
                  <ErrorMessage name="email" component="p" className="formik-error"/>  
                  <div className="login-input-box">
                    <label htmlFor="">
                      <i className="fas fa-envelope"></i>
                    </label>
                    <Field placeholder="電子信箱" name="email" />
                  </div>
                  <ErrorMessage name="password" component="p" className="formik-error"/>
                  <div className="login-input-box">
                    <label htmlFor="">
                      <i className="fas fa-unlock-alt"></i>
                    </label>
                    <Field type="password" placeholder="密碼" name="password"/>
                  </div>
                  <ErrorMessage name="checkPassword" component="p" className="formik-error"/>
                  <div className="login-input-box">
                    <label htmlFor="">
                      <i className="fas fa-unlock-alt"></i>
                    </label>
                    <Field type="password" placeholder="確認密碼" name="checkPassword"/>
                  </div>                
                  
                  <button className="login-btn">下一步</button>
                </Form>
              </Formik>
              
              {/* <p
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
              </div> */}
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
          {/* ====================================註冊頁面結束===================================== */}

          {/* ====================================登入頁面===================================== */}
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
                <input type="text" placeholder="電子信箱" name="loginEmail"/>
              </div>
              <div className="login-input-box">
                <label htmlFor="">
                  <i className="fas fa-unlock-alt"></i>
                </label>
                <input type="text" placeholder="密碼" name="loginPassword"/>
              </div>
              <button className="register-btn" onClick={login}>登入</button>
              {/* <p
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
              </div> */}
            </div>
          </div>
          {/* ====================================登入頁面結束===================================== */}
          <div className="login-slide-bar__login"></div>
        </div>

        <div className="register-next">
          <div className="register-next-container">
            <h3>註冊資料</h3>
            <Formik initialValues={initialRegister} validationSchema={registerSchema} onSubmit={register}>
              <Form>
                <ErrorMessage name="firstName" component="p" className="formik-error-reg"/>
                <div className="register-next-container__div">
                  <label htmlFor="">姓氏</label>
                  <Field type="text" placeholder="請輸入姓氏" name="firstName"/>
                </div>
                <ErrorMessage name="lastName" component="p" className="formik-error-reg"/>
                <div className="register-next-container__div">
                  <label htmlFor="">名字</label>
                  <Field type="text" placeholder="請輸入名字" name="lastName"/>
                </div>
                
                <div className="register-next-container__div">            
                  <label htmlFor="">生日</label>
                  <input type="date" placeholder="請輸入生日" onChange={
                    (e) => {
                      setBirth(e.target.value);
                    }
                  }/>
                </div>
                <ErrorMessage name="phone" component="p" className="formik-error-reg"/>            
                <div className="register-next-container__div">            
                  <label htmlFor="">電話</label>
                  <Field type="text" placeholder="請輸入手機號碼" name="phone"/>
                </div>              
                <div className="register-next-container__div">
                  <label htmlFor="">地址</label>
                  <ZipCodeTW displayType="text" zipStyle={{display: "none"}} districtStyle={{marginLeft: "20px"}} districtClass="districtClass" countyClass="countyClass"/>
                </div>
                <ErrorMessage name="address" component="p" className="formik-error-reg"/>            
                <div className="register-next-container__div">
                  <Field style={{width: "80%"}} type="text" placeholder="請輸入地址" id="address" name="address"/>
                </div>
              
                <div className="register-next-container__btn">
                  <button type="button" style={{backgroundColor: "#ffecd2", color: "black"}} onClick={backToLogin}>取消</button>
                  <button type="submit" style={{backgroundColor: "#2571e3", color: "white", marginLeft: "20px"}}>註冊</button>              
                </div>
            </Form>
            </Formik>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Login;
