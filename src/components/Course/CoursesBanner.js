import React from "react";
import { useState } from "react";

function CoursesBanner() {
  // 位置
  const [bannerPos, setBannerPos] = useState("banner2");
  // 大小
  const [banner1Scale, setBanner1Scale] = useState("scaleSmall");
  const [banner2Scale, setBanner2Scale] = useState("scaleBig");
  const [banner3Scale, setBanner3Scale] = useState("scaleSmall");
  // 控制鈕
  const [banner1button, setBanner1button] = useState("");
  const [banner2button, setBanner2button] = useState(
    "Courses__Banner-ControlBar_active"
  );
  const [banner3button, setBanner3button] = useState("");
  // 自動播放
  const [banner1Play, setBanner1Play] = useState("");
  const [banner2Play, setBanner2Play] = useState("autoplay='true'");
  const [banner3Play, setBanner3Play] = useState("");

  return (
    <div className="range">
      <div className={`d-flex Courses__Banner ${bannerPos}`}>
        <div className=" Courses__Banner-1">
          <div className={`Courses__Banner__Mask ${banner1Scale}`}>
            <div className="Courses__Banner__Mask__Slide">
              <video muted loop>
                <source src="./videos/01.mp4" types="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="Courses__Banner-2">
          <div className={`Courses__Banner__Mask ${banner2Scale}`}>
            <div className="Courses__Banner__Mask__Slide">
              <video muted loop>
                <source src="./videos/02.mp4" types="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="Courses__Banner-3">
          <div className={`Courses__Banner__Mask ${banner3Scale}`}>
            <div className="Courses__Banner__Mask__Slide">
              <video muted loop>
                <source src="./videos/03.mp4" types="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="Courses__Banner-ControlBar">
        <ul className="row">
          <li
            className="col"
            onClick={() => {
              setBannerPos("banner1");
              setBanner1Scale("scaleBig");
              setBanner2Scale("scaleSmall");
              setBanner3Scale("scaleSmall");
              setBanner1button("Courses__Banner-ControlBar_active");
              setBanner2button("");
              setBanner3button("");
            }}
          >
            <i className={`far fa-circle  ${banner1button}`}></i>
          </li>
          <li
            className="col"
            onClick={() => {
              setBannerPos("banner2");
              setBanner1Scale("scaleSmall");
              setBanner2Scale("scaleBig");
              setBanner3Scale("scaleSmall");
              setBanner1button("");
              setBanner2button("Courses__Banner-ControlBar_active");
              setBanner3button("");
            }}
          >
            <i className={`far fa-circle  ${banner2button}`}></i>
          </li>
          <li
            className="col"
            onClick={() => {
              setBannerPos("banner3");
              setBanner1Scale("scaleSmall");
              setBanner2Scale("scaleSmall");
              setBanner3Scale("scaleBig");
              setBanner1button("");
              setBanner2button("");
              setBanner3button("Courses__Banner-ControlBar_active");
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
