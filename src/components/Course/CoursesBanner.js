import React from "react";
import { useState } from "react";
import $ from "jquery";

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
  // 自動播放
  const palyPause = (e) => {
    document.querySelector("#video1").pause();
    document.querySelector("#video2").pause();
    document.querySelector("#video3").pause();
    document.querySelector(`#video${e}`).play();
  };
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

  // 禁止影片被下載
  $("#video1").bind("contextmenu", function () {
    return false;
  });
  $("#video2").bind("contextmenu", function () {
    return false;
  });
  $("#video3").bind("contextmenu", function () {
    return false;
  });
  return (
    <div className="range">
      <div className={`d-flex Courses__Banner ${bannerPos}`}>
        <div
          className="Courses__Banner-1"
          onClick={(e) => {
            clickBtn(1);
            palyPause(1);
          }}
        >
          <div className={`Courses__Banner__Mask ${banner1Scale}`}>
            <div className="Courses__Banner__Mask__Slide">
              <div className="position-absolute Courses__Banner__Mask__Text px-4 py-3">
                <h2 className="Courses__Banner__Mask__TextContent Courses__Banner__Mask__TextMainContent">
                  居家啞鈴手臂訓練
                </h2>
                <p className="Courses__Banner__Mask__TextContent Courses__Banner__Mask__TextSecondContent">
                  建議使用較輕的啞鈴(2-4kg)較容易完成！
                </p>
                <a
                  href="/course-single/21"
                  className="Courses__Banner__Mask__TextButton mt-3 px-3 py-1"
                >
                  立即觀看
                </a>
              </div>
              <video muted loop id="video1" className="pointer">
                <source src="/videos/banner1.mp4" types="video/mp4" />
                <source src="/videos/banner1.webp" types="video/webp" />
                <source src="/videos/banner1.mpeg" types="video/mpeg" />
              </video>
            </div>
          </div>
        </div>
        <div
          className="Courses__Banner-2"
          onClick={(e) => {
            clickBtn(2);
            palyPause(2);
          }}
        >
          <div className={`Courses__Banner__Mask ${banner2Scale}`}>
            <div className="Courses__Banner__Mask__Slide">
              <div className="position-absolute Courses__Banner__Mask__Text px-4 py-3">
                <h2 className="Courses__Banner__Mask__TextContent Courses__Banner__Mask__TextMainContent">
                  肩部拉筋運動
                </h2>
                <p className="Courses__Banner__Mask__TextContent Courses__Banner__Mask__TextSecondContent">
                  舒緩肩膊緊張，2星期內見效
                </p>
                <a
                  href="/course-single/20"
                  className="Courses__Banner__Mask__TextButton mt-3 px-3 py-1"
                >
                  立即觀看
                </a>
              </div>
              <video muted loop id="video2" className="pointer" autoPlay={true}>
                <source src="/videos/banner2.mp4" types="video/mp4" />
                <source src="/videos/banner2.webp" types="video/webp" />
                <source src="/videos/banner2.mpeg" types="video/mpeg" />
              </video>
            </div>
          </div>
        </div>
        <div
          className="Courses__Banner-3"
          onClick={(e) => {
            clickBtn(3);
            palyPause(3);
          }}
        >
          <div className={`Courses__Banner__Mask ${banner3Scale}`}>
            <div className="Courses__Banner__Mask__Slide">
              <div className="position-absolute Courses__Banner__Mask__Text px-4 py-3">
                <h2 className="Courses__Banner__Mask__TextContent Courses__Banner__Mask__TextMainContent">
                  10分鐘背部訓練
                </h2>
                <p className="Courses__Banner__Mask__TextContent Courses__Banner__Mask__TextSecondContent">
                  一起把背肌力量練起來～
                </p>
                <a
                  href="/course-single/8"
                  className="Courses__Banner__Mask__TextButton mt-3 px-3 py-1"
                >
                  立即觀看
                </a>
              </div>
              <video muted loop id="video3" className="pointer">
                <source src="/videos/banner3.mp4" types="video/mp4" />
                <source src="/videos/banner3.webp" types="video/webp" />
                <source src="/videos/banner3.mpeg" types="video/mpeg" />
              </video>
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
              palyPause(1);
            }}
          >
            <i className={`far fa-circle  ${banner1button}`}></i>
          </li>
          <li
            className="col"
            onClick={(e) => {
              clickBtn(2);
              palyPause(2);
            }}
          >
            <i className={`far fa-circle  ${banner2button}`}></i>
          </li>
          <li
            className="col"
            onClick={(e) => {
              clickBtn(3);
              palyPause(3);
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
