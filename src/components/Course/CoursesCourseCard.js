import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";
import $ from "jquery";
import axios from "axios";
let storage = sessionStorage;

function CoursesCourseCard({
  id,
  title,
  upload_time,
  likes,
  coach,
  body_part_id,
  view,
  level,
  filename,
  setHeartCourse,
  theCourse,
  course,
  heartCourse,
  setCourseCardMask,
}) {
  const [icon, setIcon] = useState("far");
  const [likeListAll, setLikeListAll] = useState([]);
  const [likeListMember, setLikeListMember] = useState([]);
  const [theUser, setTheUser] = useState(null);
  const [countHeart,setCountHeart] = useState();

  useEffect(async () => {
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

    if (currectList.includes(theCourse.id)) {
      setIcon("fas HeartColor");
    } else {
      setIcon("far");
    }
    let isUser = await axios.get("http://localhost:3001/Course/isUser", {
      withCredentials: true,
    });
    setTheUser(isUser.data[0]);
    setCountHeart(theCourse.likes)
  }, []);

  // 禁止右鍵下載圖片
  $("#cardImage").bind("contextmenu", function () {
    return false;
  });

  // sessionStorage
  // 給 WaitingList 空字串
  if (storage["WaitingList"] == null) {
    storage["WaitingList"] = "";
  }

  async function clickHeart(e) {
    if (theUser === undefined || theUser === null) {
      console.log("請登入會員");
      e.nativeEvent.stopImmediatePropagation();
      setCourseCardMask("Course__isntUser__Show");
      e.preventDefault();
      for (let i = 0; i < course.length; i++) {
        document.getElementsByClassName("Courses__singlecourse__card")[
          i
        ].style.opacity = "0.2";
      }
    } else if (theUser !== undefined && theUser !== null) {
      e.preventDefault();
      if (icon === "far") {
        //console.log('加1 theCourse.likes',theCourse.likes)
        setCountHeart(theCourse.likes+1)
        setIcon("fas HeartColor");
        let addCountLikes = theCourse.likes + 1;
        let likes = { like: addCountLikes, id: theCourse.id };
        let likeList = { course: theCourse.id };
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
        let NewCourse = [...heartCourse];
        if (!NewCourse.includes(theCourse.id)) {
          NewCourse = [...heartCourse, theCourse.id];
        } else {
          return;
        }
        setHeartCourse(NewCourse);
      } else {
        setIcon("far");
        //console.log('減1 theCourse.likes',theCourse.likes)
        setCountHeart(countHeart-1)
        let disCountLikes = countHeart-1;
        let likes = { like: disCountLikes, id: theCourse.id };
        let likeList = { course: theCourse.id };
        //console.log(likeList);
        try {
          let SingleCourse = await axios.post(
            `http://localhost:3001/Course/changeLikesCount`,
            likes,
            { withCredentials: true }
          );
          let addLikeList = await axios.post(
            `http://localhost:3001/Course/deleteLikeList`,
            likeList,
            { withCredentials: true }
          );
          let NewCourse = [...heartCourse];
          NewCourse = NewCourse.filter((item) => {
            return item !== theCourse.id;
          });
          setHeartCourse(NewCourse);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  function AddList(e) {
    e.preventDefault();
    // 按鈕 toggle
    if (e.currentTarget.children[0].innerText === "加入待播清單") {
      e.currentTarget.children[0].innerText = "成功加入清單";
      e.currentTarget.children[1].src = "./images/play-list-addsuccess.png";
    } else {
      e.currentTarget.children[0].innerText = "加入待播清單";
      e.currentTarget.children[1].src = "./images/play-list-bg.png";
    }
    // 切割 input中的資料
    let waitingId = e.currentTarget.children[2].value.split("|")[0];
    // 將資料存入 Storage 送到 課程單獨頁面
    // 如果 有 按過加入待播清單 就把相同的 刪掉 並從 WaitingList 中也一併刪除
    // 如果 sessionStorage 中沒有相同資料 就加入 WaitingList
    if (storage[waitingId]) {
      let newArr = storage["WaitingList"].split(",");
      newArr = newArr.filter(function (course) {
        return course !== waitingId;
      });
      storage["WaitingList"] = newArr.toString();
      storage.removeItem(waitingId);
    } else {
      storage.setItem(waitingId, e.currentTarget.children[2].value);
      storage["WaitingList"] += `${waitingId},`;
    }
  }
  let storagelist = storage["WaitingList"].split(",");

  async function addViews() {
    let course_id = theCourse.id;
    let views = theCourse.views + 1;
    let result = { course_id: course_id, views: views };
    try {
      let addViews = await axios.post(
        `http://localhost:3001/Course/addViews`,
        result,
        { withCredentials: true }
      );
    } catch (e) {
      console.log(e);
    }
  }

  if (
    likeListAll === undefined ||
    likeListMember === undefined ||
    theCourse === undefined
  ) {
    return <></>;
  }

  return (
    <>
      <a
        href={`/course-single/${theCourse.id}`}
        id="cardImage"
        className="Courses__singlecourse__card LinkNoStyle"
        onClick={() => {
          addViews();
        }}
      >
        {/* <Link to={`/course-single/${theCourse.id}`} className="LinkNoStyle"> */}
        <img
          src={`/images/${theCourse.filename}.png`}
          className="card-img-top"
          alt="課程1"
        />
        <div className="card-body">
          <div className="mb-2 d-flex">
            <div className="Courses__singlecourse__card__type">
              {BODY_PARTS[theCourse.body_part_id]}
            </div>
            <div className="Courses__singlecourse__card__coach_name ms-3">
              {theCourse.coach}
            </div>
          </div>
          <h3 className="mt-3 Courses__singlecourse__card__title">
            {theCourse.title}
          </h3>
          <div className="mt-4 d-flex position-relitave">
            <div className="Courses__singlecourse__card__count me-4">
              觀看次數：{theCourse.views}
            </div>
            <div className="Courses__singlecourse__card__created-at me-4">
              {theCourse.upload_time}
            </div>
            <div className="Courses__singlecourse__card__heart ">
              <span>
                {countHeart}
              </span>
              <i
                id={course.id}
                class={`${icon} fa-heart`}
                onClick={clickHeart}
              ></i>
            </div>
          </div>
        </div>
        <div id={theCourse.id} className="Courses__play-list" onClick={AddList}>
          <div>
            {storagelist.includes(`${theCourse.id}`)
              ? "成功加入清單"
              : "加入待播清單"}
          </div>
          <img
            src={
              storagelist.includes(`${theCourse.id}`)
                ? "/images/play-list-addsuccess.png"
                : "/images/play-list-bg.png"
            }
            alt="play-list"
          />
          <input
            type="hidden"
            value={`${theCourse.id}|${theCourse.title}|${theCourse.body_part_id}|${theCourse.level}|${theCourse.filename}`}
          />
        </div>
        <div className="Courses__singlecourse__card__coach Courses__singlecourse__card__coach-setting">
          <img src={`/image/${theCourse.image}`} alt="coach" style={{backgroundColor:"#537895"}} />
        </div>
        {/* </Link> */}
      </a>
    </>
  );
}

export default CoursesCourseCard;
