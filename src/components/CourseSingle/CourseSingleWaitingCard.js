import React from "react";
import { useRef } from "react";

let waitinglist = [
  { id: 1, title: "這是課程名稱", bodyparts: "手部", level: "初級" },
  { id: 2, title: "一二三四五六", bodyparts: "手部", level: "中級" },
  { id: 3, title: "七六五四三二", bodyparts: "胸部", level: "初級" },
  { id: 4, title: "這是課程名稱", bodyparts: "手部", level: "高級" },
  { id: 5, title: "六五四三二一", bodyparts: "腿部", level: "初級" },
  { id: 6, title: "這是課程名稱", bodyparts: "手部", level: "中級" },
  { id: 7, title: "這是課程名稱", bodyparts: "手部", level: "初級" },
  { id: 8, title: "這是課程名稱", bodyparts: "手部", level: "初級" },
  { id: 9, title: "這是課程名稱", bodyparts: "手部", level: "初級" },
  { id: 10, title: "這是課程名稱", bodyparts: "手部", level: "初級" },
  { id: 11, title: "這是課程名稱", bodyparts: "手部", level: "初級" },
];

function CourseSingleWaitingButton() {
  const EddiesRef = useRef([]);

  function MoreBtn(e) {
    // console.log(EddiesRef.current)
    let eddies = document.querySelectorAll('.Course__area__Waiting__MoreBtn__Option')
    let eddie = e.currentTarget.parentElement.children[4];
    if(eddie.style.display===''){
      for(let i=0; i<eddies.length; i++){
        eddies[i].style.display='';
      }
      eddie.style.display='block';
    }else{
      eddie.style.display='';
    }
  }

  return (
    <div>
      {waitinglist.map((item) => {
        return (
          <div
            className="Course__area__Waiting mb-2"
            id={item.id}
            key={item.id}
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
              className="me-3 Course__area__Waiting__MoreBtn pointer"
              onClick={MoreBtn}
            >
              <i class="fas fa-ellipsis-v"></i>
            </div>
            <div
              className={`position-absolute Course__area__Waiting__MoreBtn__Option p-2 `} id={item.id} ref={EddiesRef}
            >
              <div className="pb-2 pointer">
                <i class="fas fa-heart"></i> 收藏這部影片
              </div>
              <hr className="Course__area__Waiting__MoreBtn__Option__Line" />
              <div className="pt-2 pointer">
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
