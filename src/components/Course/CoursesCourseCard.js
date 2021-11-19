import React from "react";
let storage = sessionStorage;

function CoursesCourseCard(item) {
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
  let storagelist = storage["WaitingList"].split(",");
  return (
    <>
        <div className="Courses__singlecourse__card mb-5">
          <img src={item.img} className="card-img-top" alt="課程1" />
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
                <i id={item.id} class="far fa-heart" onClick={clickHeart}></i>
              </div>
            </div>
          </div>
          <div id={item.id} className="Courses__play-list" onClick={AddList}>
            <div>
              {storagelist.includes(item.id) ? "成功加入清單" : "加入待播清單"}
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
    </>
  );
}

export default CoursesCourseCard;
