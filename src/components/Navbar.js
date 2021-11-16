import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
  );
}

export default Navbar;
