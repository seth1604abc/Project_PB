import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function Navbar(props) {
  const history = useHistory();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [role, setRole] = useState({});
  useEffect(async () => {
    let res = await axios.get("http://localhost:3001/auth/login", {
      withCredentials: true,
    });
    if (res.data.userId) {
      setIsLoggedin(true);
      setRole(res.data);
    }
  }, []);
  useEffect(async()=>{
    let cartList = await axios.get("http://localhost:3001/cart/list", {
      withCredentials: true,
    });
    setCartData(cartList.data);
    console.log(cartList.data);
  },[])

  //map購物車
  const [cartTotal,setCartTotal]=useState(0);
  const cartList = cartData.map((item) => {
    return (
      <>
      <div className="d-flex align-items-center justify-content-start">
        <div
          className="mx-1"
          style={{ width: "5rem", backgroundColor: "white" }}
        >
          <img
            src={`/product_images/${item.name}`}
            alt=""
            style={{ width: "5rem", fontSize: "0.8rem" }}
          />
        </div>
        <div className="d-flex flex-column me-3">
          <dic className="" style={{ width: "10rem" }}>
            {item.title}
          </dic>
          <div className="text-end">
            <div>{item.amount}x</div>
            <div>NTD$ {`${item.price * item.amount}`}</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <hr className="border-0" style={{size:"0.05rem",color:"#333",width:"90%",align:"center"}}/>
      </div>
      
      </>
    );
  });


  const showDiv = () => {
    if (
      document.querySelector(".navbar-login-li__div").style.display == "block"
    ) {
      document.querySelector(".navbar-login-li__div").style.display = "none";
    } else {
      document.querySelector(".navbar-login-li__div").style.display = "block";
    }
  };

  
  const logout = async () => {
    Swal.fire({
      title: "確定要登出嗎?",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消",
    }).then(async (res) => {
      if(res.isConfirmed){
        let result = await axios.get("http://localhost:3001/auth/logout", { withCredentials: true });
        sessionStorage.clear();
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
          <li style={{ justifyContent: "end" }} className="navbar__cart">
            <Link to={isLoggedin?"/cart":"/login"}
            onPointerEnter={async()=>{
              let cartList = await axios.get("http://localhost:3001/cart/list", {
      withCredentials: true,
    });
    setCartData(cartList.data);
            }}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <div className="navbar__cart__content  flex-column align-items-center">
              <div className="my-2">{cartList.length<1?"購物車為空":cartList}</div>
              {/* <div>總計:{cartList>0&&cartTotal}</div> */}
              {isLoggedin?"":"尚未註冊"}
              <Link
                to={isLoggedin?"/cart":"/login"}
                className="btn my-2 text-white text-nowrap text-center mx-1"
                style={{ backgroundColor: "#1d6cf5",minWidth:"100px", width: "80%" }}
              >
                {isLoggedin?"購買":"註冊會員"}
              </Link>
            </div>
          </li>
          {isLoggedin ? (
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
              <Link to="/login" style={{ fontSize: "14px" }}>
                註冊/登入
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
