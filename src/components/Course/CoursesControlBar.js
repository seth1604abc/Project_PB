import React from "react";
import { useState } from "react";
let storage = sessionStorage;

function CourseControlBar({waitingListButtonToggle,handleFilterBaseChange}) {
  const [heart, setHeart] = useState("far");
  const [heartButton, setHeartButton] = useState("");
  const [playListBg, setPlayListBg] = useState("");
  const [playListButton, setPlayListButton] = useState(
    "./images/play-list-MainColor.png"
  );
  function HeartToggle() {
    if (heart === "far") {
      setHeart("fas HeartColor");
      setHeartButton("bgBlueftWhite");
    } else {
      setHeart("far");
      setHeartButton("");
    }
  }
  function PlayListToggle() {
    if (playListButton === "./images/play-list-MainColor.png") {
      setPlayListButton("./images/play-list-SecondColor.png");
      setPlayListBg("Courses__control-bar__playList__Bg");
      waitingListButtonToggle(1)
    } else {
      setPlayListButton("./images/play-list-MainColor.png");
      setPlayListBg("");
      waitingListButtonToggle(2)

    }
  }

  return (
    <div>
      <div className="Courses__control-bar">
        <div className="d-flex">
          <select className="form-select Courses__control-bar__select-width" onChange={handleFilterBaseChange} name="body_part_id">
            <option value="1" selected>
              課程分類
            </option>
            <option value="2">手部</option>
            <option value="3">肩部</option>
            <option value="4">胸部</option>
            <option value="5">背部</option>
            <option value="6">腿部</option>
          </select>
          <select className="form-select Courses__control-bar__select-width" onChange={handleFilterBaseChange} name="user_id">
            <option value="1" selected>
              教練
            </option>
            <option value="2">Ariel</option>
            <option value="3">Chris</option>
            <option value="4">Eddie</option>
            <option value="5">Eric</option>
            <option value="6">Tommy</option>
          </select>
          <select className="form-select Courses__control-bar__select-width" onChange={handleFilterBaseChange} name="level_id">
            <option value="1" selected>
              難易度
            </option>
            <option value="2">初級</option>
            <option value="3">中級</option>
            <option value="4">高級</option>
          </select>
        </div>
        <div class="Courses__control-bar__search-bg">
          <input
            type="text"
            class="input-form-control Course__area__Talk__InputArea__Input m-1 ms-3"
            aria-label="Text input with segmented dropdown button"
            placeholder="關鍵字搜尋"
          />
          <a type="button" className="btn">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
      <div className="Courses__control-bar__sort mt-4 d-flex align-items-center">
        <div>排序方式：</div>
        <select className="form-select Courses__control-bar__sort__select-width">
          <option value="1" selected>
            更新時間
          </option>
          <option value="2">熱門程度</option>
        </select>
        <div className="d-flex">
          <div
            className={`${heartButton} pointer Courses__control-bar__sort-btn align-items-center d-flex`}
            onClick={HeartToggle}
          >
            <i class={`${heart} fa-heart`}></i> 我的收藏清單
          </div>
          <div
            className={`${playListBg} pointer Courses__control-bar__sort-btn align-items-center d-flex`}
            onClick={PlayListToggle}
          >
            <div className=" Courses__control-bar__playList__icon">
              <img src={playListButton} alt="" />
            </div>
            我的待播清單
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseControlBar;
