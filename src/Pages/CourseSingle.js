import React from "react";
import "../css/Course.css";
import "../css/ProductSingle.css";
// 影片區 包含 課程名稱、概述....
import CourseSingleVideo from "../components/CourseSingle/CourseSingleVideo";
// 待播清單
import CourseSingleWaitingList from "../components/CourseSingle/CourseSingleWaitingList";
// 留言區
import CourseSingleTalk from "../components/CourseSingle/CourseSingleTalk";
// 推薦影片
import CourseSingleHitCourse from "../components/CourseSingle/CourseSingleHitCourse";
// 推薦商品
import CourseSingleProduct from "../components/CourseSingle/CourseSingleProduct";
// 推薦文章
import CourseSingleArticle from "../components/CourseSingle/CourseSingleArticle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CourseSingle() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="Course__video-mainarea mt-4">
          <CourseSingleVideo />
          <CourseSingleWaitingList />
        </div>
        <div className="d-flex  mt-4 ms-4 me-4">
          <div className="maxw65">
            <div className="mb-4">
              <CourseSingleTalk />
            </div>
            <div>
              <CourseSingleArticle />
            </div>
          </div>
          <div className="maxw35 p-3 m-1 ps-4">
            <div className="mb-4">
              <CourseSingleHitCourse />
            </div>
            <div>
              <CourseSingleProduct />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseSingle;
