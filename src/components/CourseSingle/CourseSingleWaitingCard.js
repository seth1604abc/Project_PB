import React from "react";
import { useRef } from "react";

let waitinglist = [
  { id: 1, title: "這是課程名稱", bodyparts: "手部", level: "初級" },
];

function CourseSingleWaitingButton() {
  const EddiesRef = useRef([]);

  function MoreBtn(e) {
    // console.log(EddiesRef.current)
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
    <div>
      {waitinglist.map((item) => {
        return (
          <div
            className="Course__area__Waiting mb-2"
            id={item.id}
            key={item.id} draggable="true"
          >
            <div className="Course__area__Waiting__icon pointer" id={item.id}>
              <i class="fas fa-grip-lines"></i>
            </div>
            <div className="Course__area__Waiting__image">
              <img src="./images/03.jpg" alt="影片縮圖" />
            </div>
            <div className="row p-2">
              <div className="col-12 Course__area__Waiting__title">
                {item.title}
              </div>
              <div className="col-4  ms-2 Course__area__Waiting__tag">
                # {item.bodyparts}
              </div>
              <div className="col-4 Course__area__Waiting__tag">
                # {item.level}
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
              id={item.id}
              ref={EddiesRef}
            >
              <div
                className="pb-2 pointer"
                onClick={() => {
                  console.log("收藏這部影片", item.id);
                }}
              >
                <i class="fas fa-heart"></i> 收藏這部影片
              </div>
              <div className="Course__area__Waiting__MoreBtn__Option__Line"></div>
              <div className="pt-2 pointer" onClick={() => {
                  console.log("從清單中移除", item.id);
                }}>
                <i class="fas fa-trash-alt"></i> 從清單中移除
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseSingleWaitingButton;
