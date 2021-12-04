import React from "react";
import { useState } from "react";
let storage = sessionStorage;

function CourseControlBar({
  heartListButtonToggle,
  waitingListButtonToggle,
  bodyPartHandleSelect,
  filterBase,
  setFilterBase,
  HitSort,
  setSort,
  setKeyWord,
  searchtext,
}) {
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
      heartListButtonToggle(1)
    } else {
      setHeart("far");
      setHeartButton("");
      heartListButtonToggle(2)
    }
  }
  function PlayListToggle() {
    if (playListButton === "./images/play-list-MainColor.png") {
      setPlayListButton("./images/play-list-SecondColor.png");
      setPlayListBg("Courses__control-bar__playList__Bg");
      waitingListButtonToggle(1);
    } else {
      setPlayListButton("./images/play-list-MainColor.png");
      setPlayListBg("");
      waitingListButtonToggle(2);
    }
  }

  return (
    <div>
      <div className="Courses__control-bar">
        <div className="d-flex">
          <select
            className="form-select Courses__control-bar__select-width"
            name="body_part_id"
            onClick={bodyPartHandleSelect}
            onChange={(e) => {
              let newSelect = {
                ...filterBase,
                [e.target.name]: e.target.value,
              };
              console.log(newSelect);
              setFilterBase(newSelect);
            }}
            defaultValue={filterBase.body_part_id}
          >
            <option value="1">
              課程分類
            </option>
            <option value="2">手部</option>
            <option value="3">肩部</option>
            <option value="4">胸部</option>
            <option value="5">背部</option>
            <option value="6">腿部</option>
          </select>
          <select
            className="form-select Courses__control-bar__select-width"
            name="user_id"
            onClick={bodyPartHandleSelect}
            onChange={(e) => {
              let newSelect = {
                ...filterBase,
                [e.target.name]: e.target.value,
              };
              console.log(newSelect);
              setFilterBase(newSelect);
            }}
            defaultValue={filterBase.user_id}

          >
            <option value="1">
              教練
            </option>
            <option value="96">May</option>
            <option value="97">Eugene</option>
            <option value="98">Kosmo</option>
            <option value="99">CYFIT</option>
            <option value="100">Coffee</option>
          </select>
          <select
            className="form-select Courses__control-bar__select-width"
            name="level_id"
            onClick={bodyPartHandleSelect}
            onChange={(e) => {
              let newSelect = {
                ...filterBase,
                [e.target.name]: e.target.value,
              };
              console.log(newSelect);
              setFilterBase(newSelect);
            }}
            defaultValue={filterBase.level_id}
          >
            <option value="1">
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
            onKeyUp={(e) => {
              setKeyWord(e.target.value);
            }}
          />
          <button type="button" className="btn" >
            <i class="fas fa-search" onClick={searchtext}></i>
          </button>
        </div>
      </div>
      <div className="Courses__control-bar__sort mt-4 d-flex align-items-center">
        <div>排序方式：</div>
        <select
          className="form-select Courses__control-bar__sort__select-width"
          onChange={HitSort}
          onClick={(e) => {
            if (e.target.value === "1") {
              setSort(1);
            } else {
              setSort(2);
            }
          }}
        >
          <option value="1" selected>
            發佈時間
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
