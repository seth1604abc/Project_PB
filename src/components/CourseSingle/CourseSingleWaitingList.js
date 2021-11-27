import React from "react";
import CourseSingleWaitingCard from "./CourseSingleWaitingCard.js";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { RepeatOutlined } from "@material-ui/icons";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";
import $ from "jquery";

let storage = sessionStorage;

function CourseSingleWaitingList() {
  const [course, setCourse] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  const [waitingList, setWaitingList] = useState([]);
  const [checkdWaitingList, setCheckdWaitingList] = useState([]);
  const [oldIndex, setOldIndex] = useState(0);
  // const innerRef = React.createRef()
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
    let WaitingList = storage
      .getItem("WaitingList")
      .substr(0, storage.getItem("WaitingList").length - 1)
      .split(",");
    setWaitingList(WaitingList);
    //console.log("allcourse",allCourse)
    //console.log("waitingList",WaitingList);
    let tempList = allCourse.data.filter((item) => {
      return WaitingList.includes(`${item.id}`);
    });
    // 用陣列去排序另一個陣列 ------
    // https://newbedev.com/sort-an-array-of-objects-based-on-another-array-of-ids
    const itemPositions = {};
    for (const [index, id] of WaitingList.entries()) {
      itemPositions[id] = index;
    }
    tempList.sort((a, b) => itemPositions[a.id] - itemPositions[b.id]);
    setCheckdWaitingList(tempList);
    // console.log(checkdWaitingList)
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

  //拖曳事件
  //https://pjchender.blogspot.com/2017/08/html5-drag-and-drop-api.html
  function dragStart(e, index) {
    e.stopPropagation();
    let oldindex = checkdWaitingList
      .map((x) => Number(x.id))
      .indexOf(Number(e.target.id));
    setOldIndex(oldindex);
  }

  function dropped(e, index) {
    if(oldIndex === 0){
      return<></>
    }else{
      cancelDefault(e);
      let target = $(e.currentTarget);
      let newIndex = target.index();
      if(newIndex === 0){
        return <></>
      }else{
        let newArr = [...checkdWaitingList];
      newArr.splice(oldIndex, 1);
      newArr.splice(newIndex, 0, checkdWaitingList[oldIndex]);
      setCheckdWaitingList(newArr);
      // 要再塞進陣列
      let idArr = newArr.map((item) => {
        return item.id;
      });
      storage.setItem("WaitingList", idArr.join(",") + ",");
      }
    }
  }

  function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (checkdWaitingList === undefined) {
    return <></>;
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
        <ul className="Course__Single__WaitingList__Ul">
          {checkdWaitingList.map((item, index) => {
            return (
              <li
                className="Course__Single__WaitingList__Li noLiStyle"
                draggable="true"
                onDragStart={(e) => {
                  dragStart(e, index);
                }}
                onDrop={(e) => {
                  dropped(e, index);
                }}
                onDragEnter={cancelDefault}
                onDragOver={cancelDefault}
                id={item.id}
                key={item.id}
              >
                <div
                  className={`${
                    item.id === Number(checkdWaitingList[0].id)
                      ? `Course__area__Waiting Course__area__Waiting_play mb-2`
                      : `Course__area__Waiting mb-2`
                  }`}
                  id={item.id}
                  draggable="true"
                >
                  <div
                    className="Course__area__Waiting__icon pointer"
                    id={item.id}
                  >
                    <i
                      class={`${
                        item.id === Number(checkdWaitingList[0].id)
                          ? `fas fa-play Course__area__Waiting__icon__Play`
                          : `fas fa-grip-lines`
                      }`}
                      id={item.id}
                    ></i>
                  </div>
                  <div className="Course__area__Waiting__image" id={item.id}>
                    <img
                      src={`/images/${item.filename}.png`}
                      alt="影片縮圖"
                      id={item.id}
                    />
                  </div>
                  <div className="row p-2" id={item.id}>
                    <div
                      className="col-12 Course__area__Waiting__title"
                      id={item.id}
                    >
                      {item.title}
                    </div>
                    <div
                      className="col-4  ms-2 Course__area__Waiting__tag"
                      id={item.id}
                    >
                      # {BODY_PARTS[item.body_part_id]}
                    </div>
                    <div
                      className="col-4 Course__area__Waiting__tag"
                      id={item.id}
                    >
                      # {LEVEL[item.level_id]}
                    </div>
                  </div>
                  <div
                    className="Course__area__Waiting__MoreBtn pointer"
                    onClick={MoreBtn}
                    id={item.id}
                  >
                    <i class="fas fa-ellipsis-v" id={item.id}></i>
                  </div>
                  <div
                    className={`position-absolute Course__area__Waiting__MoreBtn__Option p-2 `}
                    id={item.id}
                    ref={EddiesRef}
                  >
                    <div
                      className="pb-2 pointer"
                      onClick={() => {
                        console.log("收藏這部影片", item.id);
                      }}
                      id={item.id}
                    >
                      <i class="fas fa-heart" id={item.id}></i> 收藏這部影片
                    </div>
                    <div
                      className="Course__area__Waiting__MoreBtn__Option__Line"
                      id={item.id}
                    ></div>
                    <div
                      className="pt-2 pointer"
                      onClick={() => {
                        console.log("從清單中移除", item.id);
                      }}
                      id={item.id}
                    >
                      <i class="fas fa-trash-alt" id={item.id}></i> 從清單中移除
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
