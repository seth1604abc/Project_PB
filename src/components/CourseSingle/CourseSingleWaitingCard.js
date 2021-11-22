import React from "react";
import { useRef } from "react";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";
let storage = sessionStorage;

function CourseSingleWaitingButton({ title, bodyPart, level, id, filename }) {
  const EddiesRef = useRef([]);
  let WaitingList = storage
    .getItem("WaitingList")
    .substr(0, storage.getItem("WaitingList").length - 1)
    .split(",");
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
    <div>
      <div
        className={`${
          id === Number(WaitingList[0])
            ? `Course__area__Waiting Course__area__Waiting_play mb-2`
            : `Course__area__Waiting mb-2`
        }`}
        id={id}
        key={id}
        draggable="true"
      >
        <div className="Course__area__Waiting__icon pointer" id={id}>
          <i
            class={`${
              id === Number(WaitingList[0])
                ? `fas fa-play Course__area__Waiting__icon__Play`
                : `fas fa-grip-lines`
            }`}
          ></i>
        </div>
        <div className="Course__area__Waiting__image">
          <img src={`/images/${filename}.png`} alt="影片縮圖" />
        </div>
        <div className="row p-2">
          <div className="col-12 Course__area__Waiting__title">{title}</div>
          <div className="col-4  ms-2 Course__area__Waiting__tag">
            # {BODY_PARTS[bodyPart]}
          </div>
          <div className="col-4 Course__area__Waiting__tag">
            # {LEVEL[level]}
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
          id={id}
          ref={EddiesRef}
        >
          <div
            className="pb-2 pointer"
            onClick={() => {
              console.log("收藏這部影片", id);
            }}
          >
            <i class="fas fa-heart"></i> 收藏這部影片
          </div>
          <div className="Course__area__Waiting__MoreBtn__Option__Line"></div>
          <div
            className="pt-2 pointer"
            onClick={() => {
              console.log("從清單中移除", id);
            }}
          >
            <i class="fas fa-trash-alt"></i> 從清單中移除
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSingleWaitingButton;
