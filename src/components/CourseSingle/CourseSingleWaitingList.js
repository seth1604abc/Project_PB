import React from "react";
import CourseSingleWaitingCard from "./CourseSingleWaitingCard.js";

function CourseSingleWaitingList() {
  return (
    <div className="Course__area Course__Waiting_area p-3">
      <div className="d-flex align-items-center Article__area__title">
        <img
          className="Course__area__icon"
          src="./images/play-list-MainColor.png"
          alt="播放清單圖示"
        />
        <h2 className="Course__area__title me-3">播放清單</h2>
        <div className="Course__area__Secondtitle">
          共<span className="p-2">7</span>部課程，
          <span className="p-2">50</span>分鐘
        </div>
      </div>
      <div className="Course__area__List">
        <div className="Course__area__Waiting Course__area__Waiting_play mb-2">
          <div className="Course__area__Waiting__icon">
            <i class="fas fa-play"></i>
          </div>
          <div className="Course__area__Waiting__image">
            <img src="./images/03.jpg" alt="影片縮圖" />
          </div>
          <div className="row p-2">
            <div className="col-12 Course__area__Waiting__title">
              這是課程名稱
            </div>
            <div className="col-4  ms-2 Course__area__Waiting__tag"># 手部</div>
            <div className="col-4 Course__area__Waiting__tag"># 初級</div>
          </div>
          <div className="me-3 Course__area__Waiting__MoreBtn__hidden">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <CourseSingleWaitingCard />
      </div>
    </div>
  );
}
export default CourseSingleWaitingList;
