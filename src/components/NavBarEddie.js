import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg Bg-navbar">
      <div className="container-fluid Nav__container">
        <a className="navbar-brand Nav__font-color" href="#/">
          Logo
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item Nav__btn">
              <a className="nav-link active Nav__font-color" href="#/">
                立即成為會員！
              </a>
            </li>
            <li className="nav-item Nav__btn">
              <a className="nav-link active Nav__font-color" href="#/">
                課程
              </a>
            </li>
            <li className="nav-item Nav__btn">
              <a className="nav-link Nav__btn__color Nav__font-color" href="#/">
                商品
              </a>
            </li>
            <li className="nav-item Nav__btn">
              <a className="nav-link Nav__btn__color Nav__font-color" href="#/">
                活動
              </a>
            </li>
            <li className="nav-item Nav__btn">
              <a className="nav-link Nav__btn__color Nav__font-color" href="#/">
                文章
              </a>
            </li>
            <li className="nav-item Nav__btn">
              <a className="nav-link Nav__btn__color Nav__font-color" href="#/">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li className="nav-item Nav__btn">
              <a className="nav-link Nav__btn__color Nav__font-color" href="#/">
                <i class="fas fa-user-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
