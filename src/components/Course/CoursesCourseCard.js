import React from "react";
import { useRef } from "react";

let item = [
  {
    id: "1",
    title: "伏地挺身訓練-初級",
    coach: "Ariel",
    type: "手部",
    count: "304",
    created_at: "2015/10/20",
    heart: 333,
  },
  {
    id: "2",
    title: "伏地挺身訓練-中級",
    coach: "Taylor",
    type: "胸部",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "3",
    title: "伏地挺身訓練-高級",
    coach: "Taylor",
    type: "肩部",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "4",
    title: "課程名稱",
    coach: "Taylor",
    type: "背部",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "5",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "6",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "7",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "8",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "9",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "10",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "11",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
  {
    id: "12",
    title: "課程名稱",
    coach: "Taylor",
    type: "部位",
    count: "505",
    created_at: "2021/10/20",
    heart: 123,
  },
];

function CoursesCourseCard() {
  function clickHeart(e) {
    // console.log(e.target.id);
    console.log(e);
    if (e.target.className === "far fa-heart") {
      e.target.className = "fas fa-heart HeartColor";
    } else {
      e.target.className = "far fa-heart";
    }
  }
  const WaitingListRef = useRef();
  function AddList(e) {
    let defaultstate = "加入待播清單";
    // console.log(WaitingListRef.current);
    // console.log(e.currentTarget.id);
    if (e.currentTarget.children[0].innerText === defaultstate) {
      e.currentTarget.children[0].innerText = "成功加入清單";
      e.currentTarget.children[1].src = "./images/play-list-addsuccess.png";
      // e.currentTarget.children[1].classList.add('scaleXSmall');
    } else {
      e.currentTarget.children[0].innerText = "加入待播清單";
      e.currentTarget.children[1].src = "./images/play-list-bg.png";
    }
  }
  return (
    <>
      {item.map((item) => {
        return (
          <div className="" key={item.id}>
            <div className="Courses__singlecourse__card mb-5">
              <img src="./images/01.png" className="card-img-top" alt="課程1" />
              <div className="card-body">
                <div className="mb-2 d-flex">
                  <div className="Courses__singlecourse__card__type">
                    {item.type}
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
                ref={WaitingListRef}
                onClick={AddList}
              >
                <div>加入待播清單</div>
                <img src="./images/play-list-bg.png" alt="play-list" />
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
