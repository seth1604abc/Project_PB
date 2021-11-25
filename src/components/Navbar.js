import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';


function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(false);  
  const[cartData,setCartData]=useState([])
  useEffect( async () => {
    let res = await axios.get("http://localhost:3001/auth/login", { withCredentials: true });    
    if(res.data.userId) {
      setIsLoggedin(true);
    }
    let cartList=  await axios.get("http://localhost:3001/cart/list", { withCredentials: true });    
    setCartData(cartList.data);
    console.log(cartList.data);
  }, [])

  //map購物車
  const cartList=cartData.map((item)=>{
    return(
        <div className="d-flex align-items-center">
        <img src={`./product_images/${item.name}`} alt="" style={{width:"5rem"}}/>
          <h5 className="text-nowrap">{item.title}</h5>
          <div className="text-end">
          <div>{item.amount}x</div>
          <div>price:{`${item.price*item.amount}`}</div>
          </div>
        </div>
    )
  })




  const showDiv = () => {
    if(document.querySelector(".navbar-login-li__div").style.display == "block") {
      document.querySelector(".navbar-login-li__div").style.display = "none";
    } else {
      document.querySelector(".navbar-login-li__div").style.display = "block";
    }   
  }

  const logout = async () => {
    let result = await axios.post("http://localhost:3001/auth/logout", { withCredentials: true });
    console.log(result);
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
          <li style={{ justifyContent: "end" }} className="navbar__cart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <div className="navbar__cart__content">{cartList}</div>
          </li>
          {           
            isLoggedin ? (
            <li className="navbar-login-li" onClick={showDiv}>
              <span>
                <i className="fas fa-user"></i>
              </span>
              <div className="navbar-login-li__div">
                <div>
                  <Link to="/member-info">
                    會員中心
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
