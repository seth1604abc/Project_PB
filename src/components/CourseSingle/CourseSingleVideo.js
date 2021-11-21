import React from "react";
import Membericon from "../MemberIcon.js";
import { useState } from "react";

function CourseSingleVideo() {
  const [seeall, setSeeall] = useState("");
  function viewall(e) {
    if (seeall === "") {
      setSeeall("seeall");
      e.target.innerHTML =
        '<i class="fas fa-angle-double-up px-1"></i> 隱藏部分資訊';
      console.log(e.target.innerHTML);
    } else {
      setSeeall("");
      e.target.innerHTML =
        '<i class="fas fa-angle-double-down px-1"></i> 顯示完整資訊';
    }
  }
  const [icon, setIcon] = useState("far");
  function clickheart() {
    if (icon === "far") {
      setIcon("fas HeartColor");
    } else {
      setIcon("far");
    }
  }
  return (
    <>
      <div className="Course__Main-area white-bg">
        <div className="Course__Video">
          <video controls>
            <source src="./videos/01.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pt-3 ps-4">
          <div className="d-flex align-items-center position-relative">
            <h1 className="mb-0">手部訓練課程</h1>
            <div className="Course__Video-area__Description pe-4 d-flex">
              <div className="d-flex pointer">
                <div className="Course__Video-area__tags me-3">
                  <i class="fas fa-hand-paper me-2"></i>手部
                </div>
                <div className="Course__Video-area__tags me-3">
                  <i class="fas fa-signal me-2"></i>初級
                </div>
              </div>
              <div className="Course__video-area__likes me-3 Maincolor">
                <i
                  class={`${icon} far fa-heart me-2 pointer `}
                  onClick={clickheart}
                ></i>
                <span>1020</span>
                <i class="fas fa-share-alt me-2 ms-3 pointer Maincolor"></i>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4">
            <div className="Course__video-area__MemberImgsetting">
              <Membericon />
            </div>
            <div className="Course__video-area__CoachName ms-3">
              Taylor Swift
            </div>
            <div className="position-relative pb-4 mb-4">
              <div className={`Course__video-area__Content pe-4 ${seeall}`}>
                團名「TWICE」由JYP娛樂公司創辦者朴軫永取名，寓意為「讓大眾透過耳朵一次，再由眼睛一次，獲得雙重的感動。」的意思。問候語為「One
                In A
                Million」，意味著要成為百萬偶像團體中的唯一。問候口號為「One in
                a million！大家好，我們是 TWICE。」
                團名「TWICE」由JYP娛樂公司創辦者朴軫永取名，寓意為「讓大眾透過耳朵一次，再由眼睛一次，獲得雙重的感動。」的意思。問候語為「One
                In A
                Million」，意味著要成為百萬偶像團體中的唯一。問候口號為「One in
                a million！大家好，我們是 TWICE。」
                大眾透過耳朵一次，再由眼睛一次，獲得雙重的感動。」的意思。問候語為「One
                In A
                Million」，意味著要成為百萬偶像團體中的唯一。問候口號為「One in
                a million！大家好，我們是
                TWICE。」大眾透過耳朵一次，再由眼睛一次，獲得雙重的感動。」的意思。問候語為「One
                In A
                Million」，意味著要成為百萬偶像團體中的唯一。問候口號為「One in
                a million！大家好，我們是
                TWICE。」大眾透過耳朵一次，再由眼睛一次，獲得雙重的感動。」的意思。問候語為「One
                In A
                Million」，意味著要成為百萬偶像團體中的唯一。問候口號為「One in
                a million！大家好，我們是 TWICE。」
              </div>
              <div
                className="pointer Course__video-area__Content__seeall-icon pe-4"
                onClick={(e) => {
                  viewall(e);
                }}
              >
                <i class="fas fa-angle-double-down px-1"></i> 顯示完整資訊
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseSingleVideo;
