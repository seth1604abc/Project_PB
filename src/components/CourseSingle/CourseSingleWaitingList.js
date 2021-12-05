import React from "react";
import CourseSingleWaitingCard from "./CourseSingleWaitingCard.js";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { RepeatOutlined } from "@material-ui/icons";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";
import $ from "jquery";
import { Link } from "react-router-dom";

let storage = sessionStorage;

function CourseSingleWaitingList({ isCourse_id }) {
  const [course, setCourse] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  const [waitingList, setWaitingList] = useState([]);
  const [checkdWaitingList, setCheckdWaitingList] = useState([]);
  const [oldIndex, setOldIndex] = useState(0);
  const [theUser, setTheUser] = useState(null);
  const [likeListAll, setLikeListAll] = useState([]);
  const [likeListMember, setLikeListMember] = useState([]);
  const [random, setRandom] = useState(null);
  let thisHeartSpan = document.getElementsByClassName("thisSapn");

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
    let isUser = await axios.get("http://localhost:3001/Course/isUser", {
      withCredentials: true,
    });
    setTheUser(isUser.data[0]);
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
    if (WaitingList.includes(isCourse_id)) {
      let oldList = tempList.filter((item) => {
        return Number(item.id) !== Number(isCourse_id);
      });
      let targetItem = tempList.filter((item) => {
        return Number(item.id) === Number(isCourse_id);
      });
      oldList.unshift(targetItem[0]);
      //console.log(oldList)
      setCheckdWaitingList(oldList);
      let newList = oldList.map((item)=>{return item.id})
      console.log(newList+',')
      storage['WaitingList'] = `${newList},`
    } else {
      let targetItem = allCourse.data.filter((item) => {
        return Number(item.id) === Number(isCourse_id);
      });
      tempList.unshift(targetItem[0]);
      setCheckdWaitingList(tempList);
    }
    let isLIkesList = await axios.get(
      "http://localhost:3001/Course/isLikeList",
      {
        withCredentials: true,
      }
    );
    let isLIkesListMember = await axios.get(
      "http://localhost:3001/Course/isLikeListMemberId",
      {
        withCredentials: true,
      }
    );
    setLikeListAll(isLIkesList.data);
    setLikeListMember(isLIkesListMember.data);

    let filterLikeList = isLIkesList.data.filter((item) => {
      return item.user_id === isLIkesListMember.data;
    });
    let currectList = filterLikeList.map((item) => {
      return item.course_id;
    });
    setLikeListAll(currectList);
    for (let i = 0; i < checkdWaitingList.length; i++) {
      if (thisHeartSpan[i].innerText === '已加入收藏囉') {
        //console.log(i,thisHeartSpan[i])
        thisHeartSpan[i].style.color='red';
        thisHeartSpan[i].parentElement.style.color='red';
      }
    }
  }, []);

  // 點擊空白處 讓MOREBTN隱藏
  document.addEventListener("click", (e) => {
    let eddies = document.querySelectorAll(
      ".Course__area__Waiting__MoreBtn__Option"
    );
    for (let i = 0; i < eddies.length; i++) {
      eddies[i].style.display = "";
    }
  });

  const EddiesRef = useRef([]);

  function MoreBtn(e) {
    e.nativeEvent.stopImmediatePropagation();
    setRandom(Math.random())
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
    if (oldIndex === 0) {
      return <></>;
    } else {
      cancelDefault(e);
      let target = $(e.currentTarget);
      let newIndex = target.index();
      if (newIndex === 0) {
        return <></>;
      } else {
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
    e.nativeEvent.stopImmediatePropagation();
    return false;
  }

  async function clickHeart(e, Id, text,icon) {
    if (likeListAll.includes(Number(Id))) {
      e.preventDefault();
      // console.log("已在清單中");
      text.innerText = "已加入收藏囉";
      text.style.color = "red";
      icon.style.color='red';
    } else if (!likeListAll.includes(Number(Id)) && text !== "成功收藏影片") {
      e.preventDefault();
      // console.log("沒在清單中");
      let addCountLikes = checkdWaitingList[0].likes + 1;
      let likes = { like: addCountLikes, id: Id };
      let likeList = { course: Id };
      try {
        let SingleCourse = await axios.post(
          `http://localhost:3001/Course/changeLikesCount`,
          likes,
          { withCredentials: true }
        );
        let addLikeList = await axios.post(
          `http://localhost:3001/Course/addLikeList`,
          likeList,
          { withCredentials: true }
        );
      } catch (e) {
        console.log(e);
      }
      text.innerText = "成功收藏影片";
      text.style.color = 'red';
      icon.style.color = 'red';
    }
  }

  function deleteFromList(e, Id, text) {
    text.innerText = "成功刪除影片";
    if (waitingList.includes(`${Id}`)) {
      let newList = [...waitingList];
      let thisIndex = newList.indexOf(`${Id}`);
      newList.splice(thisIndex, 1);
      setWaitingList(newList);
      storage["WaitingList"] = `${newList.toString()},`;
      storage.removeItem(Id);
      let newMap = checkdWaitingList.filter((item)=>{return (newList.includes(`${item.id}`))});
      setCheckdWaitingList(newMap)
    }
    if (storage["WaitingList"] === ",") {
      storage.setItem("WaitingList", "");
    }
  }
  if (storage["WaitingList"] === ",") {
    storage.setItem("WaitingList", "");
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
        <h2 className="Course__area__title me-3 normalMouse">播放清單</h2>
        <div className="Course__area__Secondtitle normalMouse">
          共<span className="p-2">{checkdWaitingList.length}</span>部課程
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
                    className={`Course__area__Waiting__MoreBtn pointer ${
                      theUser !== undefined
                        ? "Course__area__Waiting__MoreBtn__Visible"
                        : "Course__area__Waiting__MoreBtn__disVisible"
                    }`}
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
                      className="pb-2 pointer CourseCourseCard__HeartThis"
                      onClick={(e) => {
                        let Id = item.id;
                        let text = e.currentTarget.children[1];
                        let icon = e.currentTarget.children[0];
                        console.log('text',text)
                        console.log('icon',icon)
                        e.nativeEvent.stopImmediatePropagation();
                        clickHeart(e, Id, text,icon);
                        // console.log("收藏這部影片", item.id);
                      }}
                      id={item.id}
                    >
                      <i class="fas fa-heart" id={item.id}></i>
                      <span className='thisSapn ps-1'>
                        {likeListAll.includes(Number(item.id))
                          ? "已加入收藏囉"
                          : "收藏這部影片"}
                      </span>
                    </div>
                    <div
                      className="Course__area__Waiting__MoreBtn__Option__Line"
                      id={item.id}
                    ></div>
                    <div
                      className="pt-2 pointer CourseCourseCard__DeleteThis"
                      onClick={(e) => {
                        let Id = item.id;
                        let text = e.currentTarget.children[1];
                        e.nativeEvent.stopImmediatePropagation();
                        deleteFromList(e, Id, text);
                        //console.log("從清單中移除", item.id);
                      }}
                      id={item.id}
                    >
                      <i class="fas fa-trash-alt" id={item.id}></i>
                      <span className='ps-1'>從清單中移除</span>
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
