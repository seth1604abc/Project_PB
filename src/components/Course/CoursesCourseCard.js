import React from "react";
import { useRef, useEffect, useState } from "react";

let item = [
  {
    id: "1",
    title: "伏地挺身訓練-初級",
    coach: "Ariel",
    bodyparts: "手部",
    count: "304",
    created_at: "2015/10/20",
    heart: 333,
    level: "初級",
    img: "./images/01.png",
  },
  {
    id: "2",
    title: "伏地挺身訓練-中級",
    coach: "Taylor",
    bodyparts: "胸部",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "中級",
    img: "./images/02.png",
  },
  {
    id: "3",
    title: "伏地挺身訓練-高級",
    coach: "Taylor",
    bodyparts: "肩部",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "高級",
    img: "./images/01.png",
  },
  {
    id: "4",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "背部",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "初級",
    img: "./images/02.png",
  },
  {
    id: "5",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "中級",
    img: "./images/03.jpg",
  },
  {
    id: "6",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "高級",
    img: "./images/03.jpg",
  },
  {
    id: "7",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "低級",
    img: "./images/03.jpg",
  },
  {
    id: "8",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "下流",
    img: "./images/01.png",
  },
  {
    id: "9",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "高級",
    img: "./images/02.png",
  },
  {
    id: "10",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "初級",
    img: "./images/03.jpg",
  },
  {
    id: "11",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "中級",
    img: "./images/01.png",
  },
  {
    id: "12",
    title: "課程名稱",
    coach: "Taylor",
    bodyparts: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
    level: "高級",
    img: "./images/01.png",
  },
];
let storage = sessionStorage;

function CoursesCourseCard() {
  // sessionStorage
  // 給 WaitingList 空字串
  if (storage["WaitingList"] == null) {
    storage["WaitingList"] = "";
  }

  function clickHeart(e) {
    console.log(e.parent);
    if (e.target.className === "far fa-heart") {
      e.target.className = "fas fa-heart HeartColor";
    } else {
      e.target.className = "far fa-heart";
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
    let waitingTitle = e.currentTarget.children[2].value.split("|")[1];
    let waitingBodyParts = e.currentTarget.children[2].value.split("|")[2];
    let waitingImg = e.currentTarget.children[2].value.split("|")[3];
    // 將資料存入 Storage 送到 課程單獨頁面
    // 如果 有 按過加入待播清單 就把相同的 刪掉 並從 WaitingList 中也一併刪除
    // 如果 sessionStorage 中沒有相同資料 就加入 WaitingList
    if (storage[waitingId]) {
      let newArr = storage["WaitingList"].split(",");
      newArr = newArr.filter(function (item) {
        return item !== waitingId;
      });
      storage["WaitingList"] = newArr.toString();
      storage.removeItem(waitingId);
    } else {
      storage.setItem(waitingId, e.currentTarget.children[2].value);
      storage["WaitingList"] += `${waitingId},`;
    }
  }
  return (
    <>
      {item.map((item) => {
        let storagelist = storage["WaitingList"].split(",");
        return (
          <div className="" key={item.id}>
            <div className="Courses__singlecourse__card mb-5">
              <img src="./images/01.png" className="card-img-top" alt="課程1" />
              <div className="card-body">
                <div className="mb-2 d-flex">
                  <div className="Courses__singlecourse__card__type">
                    {item.bodyparts}
                  </div>
                  <div className="Courses__singlecourse__card__coach_name ms-3">
                    {item.coach}
                  </div>
                </div>
                <h3 className="mt-3">{item.title}</h3>
                <div className="mt-4 d-flex">
                  <div className="Courses__singlecourse__card__count me-2">
                    觀看次數：{item.count}次
                  </div>
                  <div className="Courses__singlecourse__card__created-at me-2">
                    {item.created_at}
                  </div>
                  <div className="Courses__singlecourse__card__heart">
                    <span>{item.heart}</span>
                    <i
                      id={item.id}
                      class="far fa-heart"
                      onClick={clickHeart}
                    ></i>
                  </div>
                </div>
              </div>
              <div
                id={item.id}
                className="Courses__play-list"
                onClick={AddList}
              >
                <div>
                  {storagelist.includes(item.id)
                    ? "成功加入清單"
                    : "加入待播清單"}
                </div>
                <img
                  src={
                    storagelist.includes(item.id)
                      ? "./images/play-list-addsuccess.png"
                      : "./images/play-list-bg.png"
                  }
                  alt="play-list"
                />
                <input
                  type="hidden"
                  value={`${item.id}|${item.title}|${item.bodyparts}|${item.level}|${item.img}`}
                />
              </div>
              <div className="Courses__singlecourse__card__coach Courses__singlecourse__card__coach-setting">
                <img src="./images/03.jpg" alt="coach" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CoursesCourseCard;
