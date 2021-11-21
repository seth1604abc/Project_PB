import React from "react";
import CourseSingleWaitingCard from "./CourseSingleWaitingCard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { RepeatOutlined } from "@material-ui/icons";
let storage = sessionStorage;

function CourseSingleWaitingList() {
  const [course, setCourse] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  let WaitingList = storage
    .getItem("WaitingList")
    .substr(0, storage.getItem("WaitingList").length - 1)
    .split(",");
    console.log("allcourse",allCourse)
  console.log("waitingList",WaitingList);
  let checkdWaitingList = allCourse.filter((item) => {
    return WaitingList.includes(`${item.id}`);
  });
  
  // 用陣列去排序另一個陣列 ------
  // https://newbedev.com/sort-an-array-of-objects-based-on-another-array-of-ids
  const itemPositions = {};
  for (const [index, id] of WaitingList.entries()) {
    itemPositions[id] = index;
  }

  checkdWaitingList.sort((a, b) => itemPositions[a.id] - itemPositions[b.id]);
  // 用陣列去排序另一個陣列 ------

  console.log("checkdWaitingList", checkdWaitingList);
  useEffect(async () => {
    //所有課程
    let allCourse = await axios.get("http://localhost:3001/course", {
      withCredentials: true,
    });
    // 要改變的課程項目
    setCourse(allCourse.data);
    setAllCourse(allCourse.data);
  }, []);

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
          共<span className="p-2">{checkdWaitingList.length}</span>部課程，
          <span className="p-2">50</span>分鐘
        </div>
      </div>
      <div className="Course__area__List">
        {checkdWaitingList.map((checkdWaitingList) => {
          return (
            <CourseSingleWaitingCard
              title={checkdWaitingList.title}
              bodyPart={checkdWaitingList.body_part_id}
              level={checkdWaitingList.level_id}
              id={checkdWaitingList.id}
              filename={checkdWaitingList.filename}
              checkdWaitingList={checkdWaitingList}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CourseSingleWaitingList;
