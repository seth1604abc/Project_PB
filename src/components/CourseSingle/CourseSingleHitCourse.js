import React from "react";
import CourseHitCourseCard from "./CourseSingleHitCourseCard";

const HotCourse = [
  { id:1, title: "這是課程名稱", bodyparts: "手部", level: "初級", likes: "1020", img:'./images/01.png' },
  { id:2, title: "這是課程名稱", bodyparts: "肩部", level: "中級", likes: "2015", img:'./images/02.png' },
  { id:3, title: "這是課程名稱", bodyparts: "腿部", level: "高級", likes: "9090", img:'./images/03.jpg' },
];

function CourseSingleHitCourse() {
  return (
    <div>
      <div className="d-flex Article__area__title">
        <i class="fas fa-fire Course__area__icon p-2"></i>
        <h2>熱門課程</h2>
      </div>
      {HotCourse.map((item) => {
        return (
          <div key={item.id}>
            <CourseHitCourseCard title={item.title} bodyparts={item.bodyparts} level={item.level} likes={item.likes} img={item.img} />
          </div>
        );
      })}
    </div>
  );
}

export default CourseSingleHitCourse;
