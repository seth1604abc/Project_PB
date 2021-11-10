import React from "react";
import { useRef, useState } from "react";

function CoursesPageButton() {
  // 1. 先預設 useState(1) => 預設頁碼 1 為 active
  const [togglePage, setTogglePage] = useState(1);
  // 3. 把togglePage中的 index 傳入 settogglePages中
  const togglePages = (index) => {
    setTogglePage(index);
  };

  return (
    <div className="row Courses__CoursePages mb-5">
      <div
        className="col-1"
        onClick={() => {
          if (togglePage - 1 < 1) {
            return;
          } else {
            setTogglePage(togglePage - 1);
          }
        }}
      >
        <i class="fas fa-caret-left"></i>
      </div>
      <div className="col-10">
        <ul className="d-flex">
          <li
            className={
              togglePage === 1 ? "col Courses__CoursePages__active" : "col"
            }
            // 2. 當頁碼1被點擊時，把togglePage(index)數字帶入並回傳
            onClick={() => {
              togglePages(1);
            }}
          >
            1
          </li>
          <li
            className={
              togglePage === 2 ? "col Courses__CoursePages__active" : "col"
            }
            onClick={() => {
              togglePages(2);
            }}
          >
            2
          </li>
          <li
            className={
              togglePage === 3 ? "col Courses__CoursePages__active" : "col"
            }
            onClick={() => {
              togglePages(3);
            }}
          >
            3
          </li>
          <li
            className={
              togglePage === 4 ? "col Courses__CoursePages__active" : "col"
            }
            onClick={() => {
              togglePages(4);
            }}
          >
            4
          </li>
          <li
            className={
              togglePage === 5 ? "col Courses__CoursePages__active" : "col"
            }
            onClick={() => {
              togglePages(5);
            }}
          >
            5
          </li>
          <li
            className={
              togglePage === 6 ? "col Courses__CoursePages__active" : "col"
            }
            onClick={() => {
              togglePages(6);
            }}
          >
            6
          </li>
        </ul>
      </div>
      <div
        className="col-1"
        onClick={() => {
          if (togglePage + 1 > 6) {
            return;
          } else {
            setTogglePage(togglePage + 1);
          }
        }}
      >
        <i class="fas fa-caret-right"></i>
      </div>
    </div>
  );
}
export default CoursesPageButton;
