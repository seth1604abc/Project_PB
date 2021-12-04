import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function CoursesBanner() {
  // 位置
  const [bannerPos, setBannerPos] = useState("banner2");
  // 大小
  const [banner1Scale, setBanner1Scale] = useState("scaleSmall");
  const [banner2Scale, setBanner2Scale] = useState("");
  const [banner3Scale, setBanner3Scale] = useState("scaleSmall");
  // 控制鈕
  const [banner1button, setBanner1button] = useState("");
  const [banner2button, setBanner2button] = useState(
    "Courses__Banner-ControlBar_active"
  );
  const [banner3button, setBanner3button] = useState("");
  // // 自動播放
  // const palyPause = (e) => {
  //   document.querySelector("#video1").pause();
  //   document.querySelector("#video2").pause();
  //   document.querySelector("#video3").pause();
  //   document.querySelector(`#video${e}`).play();
  // };
  // 點擊按鈕 function
  function clickBtn(index) {
    if (index === 1) {
      setBannerPos("banner1");
      setBanner1Scale("scaleBig");
      setBanner2Scale("scaleSmall");
      setBanner3Scale("scaleSmall");
      setBanner1button("Courses__Banner-ControlBar_active");
      setBanner2button("");
      setBanner3button("");
    } else if (index === 2) {
      setBannerPos("banner2");
      setBanner1Scale("scaleSmall");
      setBanner2Scale("scaleBig");
      setBanner3Scale("scaleSmall");
      setBanner1button("");
      setBanner2button("Courses__Banner-ControlBar_active");
      setBanner3button("");
    } else {
      setBannerPos("banner3");
      setBanner1Scale("scaleSmall");
      setBanner2Scale("scaleSmall");
      setBanner3Scale("scaleBig");
      setBanner1button("");
      setBanner2button("");
      setBanner3button("Courses__Banner-ControlBar_active");
    }
  }

  return (
    <div className="range">
      <div className={`d-flex Courses__Banner ${bannerPos}`}>
        <div
          className="Courses__Banner-1"
          onClick={(e) => {
            clickBtn(1);
            
          }}
        >
          <div className={`Courses__Banner__Mask ${banner1Scale}`}>
            <div className="Product__Banner__Mask__Slide">
              <Link to="/product-single/2/19" style={bannerPos==="banner1"?{}:{pointerEvents:"none"}}>
                
              <img src="/product_banner/Homepage-banner_20211123_1.jpg" alt="禮物卡廣告"/>
              </Link>
              {/* <video muted loop id="video1" className='pointer'>
                <source src="/videos/01.mp4" types="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
        <div
          className="Courses__Banner-2"
          onClick={(e) => {
            clickBtn(2);
            
          }}
        >
          <div className={`Courses__Banner__Mask ${banner2Scale}`}>
          <div className="Product__Banner__Mask__Slide">
              <Link to="/product-single/3/4" style={bannerPos==="banner2"?{}:{pointerEvents:"none"}}>
                
              <img src="/product_banner/manpage-banner_20210721_3.png" alt="健身廣告"/>
              </Link>
              {/* <video muted loop id="video1" className='pointer'>
                <source src="/videos/01.mp4" types="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
        <div
          className="Courses__Banner-3"
          onClick={(e) => {
            clickBtn(3);
            
          }}
        >
          <div className={`Courses__Banner__Mask ${banner3Scale}`}>
          <div className="Product__Banner__Mask__Slide">
              <Link to="/product-single/0/24" style={bannerPos==="banner3"?{}:{pointerEvents:"none"}}>
                
              <img src="/product_banner/manpage-banner_20210721_4.jpg" alt="健身廣告"/>
              </Link>
              {/* <video muted loop id="video1" className='pointer'>
                <source src="/videos/01.mp4" types="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
      </div>
      <div className="Courses__Banner-ControlBar">
        <ul className="row">
          <li
            className="col"
            onClick={(e) => {
              clickBtn(1);
              
            }}
          >
            <i className={`far fa-circle  ${banner1button}`}></i>
          </li>
          <li
            className="col"
            onClick={(e) => {
              clickBtn(2);
              
            }}
          >
            <i className={`far fa-circle  ${banner2button}`}></i>
          </li>
          <li
            className="col"
            onClick={(e) => {
              clickBtn(3);
              
            }}
          >
            <i className={`far fa-circle  ${banner3button}`}></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CoursesBanner;
