import React from "react";
import CourseSingleWaitingCard from "./CourseSingleWaitingCard.js";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RepeatOutlined } from "@material-ui/icons";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";

let storage = sessionStorage;

function CourseSingleWaitingList() {
  const [course, setCourse] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  let WaitingList = storage
    .getItem("WaitingList")
    .substr(0, storage.getItem("WaitingList").length - 1)
    .split(",");
  //console.log("allcourse",allCourse)
  //console.log("waitingList",WaitingList);
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

  //console.log("checkdWaitingList", checkdWaitingList);
  useEffect(async () => {
    //所有課程
    let allCourse = await axios.get("http://localhost:3001/course", {
      withCredentials: true,
    });
    // 要改變的課程項目
    setCourse(allCourse.data);
    setAllCourse(allCourse.data);
  }, []);

  const EddiesRef = useRef([]);

  function MoreBtn(e) {
    let eddies = document.querySelectorAll(
      ".Course__area__Waiting__MoreBtn__Option"
    );
    let eddie = e.currentTarget.parentElement.children[4];
    if (eddie.style.display === "") {
      for (let i = 0; i < eddies.length; i++) {
        eddies[i].style.display = "";
      }
      eddie.style.display = "block";
    } else {
      eddie.style.display = "";
    }
  }

  return (
    <div className="Course__area Course__Waiting_area p-3">
      <div className="d-flex align-items-center Article__area__title">
        <img
          className="Course__area__icon"
          src="/images/play-list-MainColor.png"
          alt="播放清單圖示"
        />
        <h2 className="Course__area__title me-3">播放清單</h2>
        <div className="Course__area__Secondtitle">
          共<span className="p-2">{checkdWaitingList.length}</span>部課程，
          <span className="p-2">50</span>分鐘
        </div>
      </div>
      <div className="Course__area__List">
        <ul
          className="Course__Single__WaitingList__Ul moveable"
          name="itemsList"
        >
          {checkdWaitingList.map((checkdWaitingList, index) => {
            return (
              <li className="Course__Single__WaitingList__Li">
                <div
                  className={`${
                    checkdWaitingList.id === Number(WaitingList[0])
                      ? `Course__area__Waiting Course__area__Waiting_play mb-2`
                      : `Course__area__Waiting mb-2`
                  }`}
                  id={checkdWaitingList.id}
                  key={checkdWaitingList.id}
                  draggable="true"
                >
                  <div
                    className="Course__area__Waiting__icon pointer"
                    id={checkdWaitingList.id}
                  >
                    <i
                      class={`${
                        checkdWaitingList.id === Number(WaitingList[0])
                          ? `fas fa-play Course__area__Waiting__icon__Play`
                          : `fas fa-grip-lines`
                      }`}
                    ></i>
                  </div>
                  <div className="Course__area__Waiting__image">
                    <img
                      src={`/images/${checkdWaitingList.filename}.png`}
                      alt="影片縮圖"
                    />
                  </div>
                  <div className="row p-2">
                    <div className="col-12 Course__area__Waiting__title">
                      {checkdWaitingList.title}
                    </div>
                    <div className="col-4  ms-2 Course__area__Waiting__tag">
                      # {BODY_PARTS[checkdWaitingList.body_part_id]}
                    </div>
                    <div className="col-4 Course__area__Waiting__tag">
                      # {LEVEL[checkdWaitingList.level_id]}
                    </div>
                  </div>
                  <div
                    className="Course__area__Waiting__MoreBtn pointer"
                    onClick={MoreBtn}
                  >
                    <i class="fas fa-ellipsis-v"></i>
                  </div>
                  <div
                    className={`position-absolute Course__area__Waiting__MoreBtn__Option p-2 `}
                    id={checkdWaitingList.id}
                    ref={EddiesRef}
                  >
                    <div
                      className="pb-2 pointer"
                      onClick={() => {
                        console.log("收藏這部影片", checkdWaitingList.id);
                      }}
                    >
                      <i class="fas fa-heart"></i> 收藏這部影片
                    </div>
                    <div className="Course__area__Waiting__MoreBtn__Option__Line"></div>
                    <div
                      className="pt-2 pointer"
                      onClick={() => {
                        console.log("從清單中移除", checkdWaitingList.id);
                      }}
                    >
                      <i class="fas fa-trash-alt"></i> 從清單中移除
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default CourseSingleWaitingList;
