import React from "react";

const HotCourse = [
  { title: "這是課程名稱", bodyparts: "手部", level: "初級",likes:'1020' },
  { title: "這是課程名稱", bodyparts: "肩部", level: "中級",likes:'2015' },
  { title: "這是課程名稱", bodyparts: "腿部", level: "高級",likes:'9090' },
];

function CourseSingleHitCourseCard() {
  return (
    <div>
      {HotCourse.map((item) => {
        return(
          <div className="d-flex Course__HitCourse__Card p-2 my-2 pointer">
          <div className="Course__area__Waiting__image ms-2">
            <img src="./images/01.png" alt="商品圖片" />
          </div>
          <div className="d-flex flex-column justify-content-center ms-3">
            <div className="row p-2">
              <div className="Course__area__CourseHitCourse__title pb-1">
                {item.title}
              </div>
              <div className="col-3  ms-2 Course__area__Waiting__tag">
                # {item.bodyparts}
              </div>
              <div className="col-3 Course__area__Waiting__tag"># {item.level}</div>
              <div>
                <i class="fas fa-heart me-3 mt-2 pointer HeartColor"></i>
                <span>{item.likes}</span>
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default CourseSingleHitCourseCard;
