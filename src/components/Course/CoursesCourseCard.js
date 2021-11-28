import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
let storage = sessionStorage;

function CoursesCourseCard(course) {
  const [icon, setIcon] = useState("far");
  const [likeListAll, setLikeListAll] = useState([]);
  const [likeListMember, setLikeListMember] = useState([]);

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

    if (currectList.includes(course.id)) {
      setIcon("fas HeartColor");
    } else {
      setIcon("far");
    }
  }, []);

  // sessionStorage
  // 給 WaitingList 空字串
  if (storage["WaitingList"] == null) {
    storage["WaitingList"] = "";
  }

  async function clickHeart(e) {
    e.preventDefault();
    if (icon === "far") {
      setIcon("fas HeartColor");
      let addCountLikes = course.likes + 1;
      let likes = { like: addCountLikes, id: course.id };
      let likeList = { course: course.id };
      console.log(likeList);
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
    } else {
      setIcon("far");
      let disCountLikes = course.likes;
      let likes = { like: disCountLikes, id: course.id };
      let likeList = { course: course.id };
      console.log(likeList);
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
      } catch (e) {
        console.log(e);
      }
    }
  }

  function AddList(e) {
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

  if (likeListAll === undefined || likeListMember === undefined) {
    return <></>;
  }
  return (
    <>
      <div className="Courses__singlecourse__card">
        <Link to={`/course-single/${course.id}`} className="LinkNoStyle">
          <img
            src={`/images/${course.filename}.png`}
            className="card-img-top"
            alt="課程1"
          />
          <div className="card-body">
            <div className="mb-2 d-flex">
              <div className="Courses__singlecourse__card__type">
                {course.body_part_id}
              </div>
              <div className="Courses__singlecourse__card__coach_name ms-3">
                {course.coach}
              </div>
            </div>
            <h3 className="mt-3 Courses__singlecourse__card__title">
              {course.title}
            </h3>
            <div className="mt-4 d-flex">
              <div className="Courses__singlecourse__card__count me-2">
                觀看次數：{course.views}次
              </div>
              <div className="Courses__singlecourse__card__created-at me-4">
                {course.upload_time}
              </div>
              <div className="Courses__singlecourse__card__heart">
                <span>{icon === "far" ? course.likes : course.likes+1}</span>
                <i
                  id={course.id}
                  class={`${icon} fa-heart`}
                  onClick={clickHeart}
                ></i>
              </div>
            </div>
          </div>
        </Link>
        <div id={course.id} className="Courses__play-list" onClick={AddList}>
          <div>
            {storagelist.includes(`${course.id}`)
              ? "成功加入清單"
              : "加入待播清單"}
          </div>
          <img
            src={
              storagelist.includes(`${course.id}`)
                ? "/images/play-list-addsuccess.png"
                : "/images/play-list-bg.png"
            }
            alt="play-list"
          />
          <input
            type="hidden"
            value={`${course.id}|${course.title}|${course.bodyparts}|${course.level}|${course.img}`}
          />
        </div>
        <div className="Courses__singlecourse__card__coach Courses__singlecourse__card__coach-setting">
          <img src="/images/03.jpg" alt="coach" />
        </div>
      </div>
    </>
  );
}

export default CoursesCourseCard;
