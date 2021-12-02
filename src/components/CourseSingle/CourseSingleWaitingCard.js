import React from "react";
import { useRef } from "react";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";
import $ from "jquery";

let storage = sessionStorage;

function CourseSingleWaitingButton({
  title,
  bodyPart,
  level,
  id,
  filename,
  droppableProps,
  dragHandleProps,
  innerRef,
}) {
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
console.log(id)
  //拖曳事件
  //https://pjchender.blogspot.com/2017/08/html5-drag-and-drop-api.html
  function dragStart(e) {
    var index = $(e.target).index();
    e.dataTransfer.setData("text/plain", index);
    //console.log('index',index)
  }

  function dropped(e) {
    cancelDefault(e);
    // get new and old index
    let oldIndex = e.dataTransfer.getData("text/plain");
    let target = $(e.currentTarget);
    let newIndex = target.index();

    // remove dropped items at old place
    let dropped = $(this).parent().children().eq(oldIndex).remove();
    // console.log('oldIndex',oldIndex)
    // console.log('newIndex',newIndex)

    if (newIndex < oldIndex) {
      target.before(dropped);
    } else {
      target.after(dropped);
    }
    // 要再塞進陣列
  }

  function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  return (
    <li
      className="Course__Single__WaitingList__Li"
      droppableProps
      dragHandleProps
      innerRef
      draggable="true"
      onDragStart={dragStart}
      onDrop={dropped}
      onDragEnter={cancelDefault}
      onDragOver={cancelDefault}
    >
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
          <div className="Course__area__Waiting__title">{title}</div>
        <div className="flex p-2">
          <div className="ms-2 Course__area__Waiting__tag">
            # {BODY_PARTS[bodyPart]}
          </div>
          <div className="Course__area__Waiting__tag">
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
    </li>
  );
}

export default CourseSingleWaitingButton;
