import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function Navbar() {
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

  return (
    <div className="main-nav d-flex justify-content-between align-items-center">
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
          <li style={{ marginRight: "50px" }}>
            <Link to="/article">文章</Link>
          </li>
          <li style={{ justifyContent: "end" }}>
            <Link to="/">
              <i className="fas fa-shopping-cart"></i>
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
  );
}

export default Navbar;
