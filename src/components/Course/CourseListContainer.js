import React from "react";
import CourseControlBar from "./CoursesControlBar";
import CoursesCourseCard from "./CoursesCourseCard";
import CoursesCoursePages from "./CoursesPageButton";
import { useEffect, useState } from "react";
import axios from "axios";

// let item = [
//   {
//     id: "1",
//     title: "伏地挺身訓練-初級",
//     coach: "Ariel",
//     bodyparts: "手部",
//     count: "304",
//     created_at: "2015/10/20",
//     heart: 333,
//     level: "初級",
//     img: "./images/01.png",
//   },
//   {
//     id: "2",
//     title: "伏地挺身訓練-中級",
//     coach: "Taylor",
//     bodyparts: "胸部",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "中級",
//     img: "./images/02.png",
//   },
//   {
//     id: "3",
//     title: "伏地挺身訓練-高級",
//     coach: "Taylor",
//     bodyparts: "肩部",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "高級",
//     img: "./images/01.png",
//   },
//   {
//     id: "4",
//     title: "課程名稱稱",
//     coach: "Taylor",
//     bodyparts: "背部",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "初級",
//     img: "./images/02.png",
//   },
//   {
//     id: "5",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "中級",
//     img: "./images/03.jpg",
//   },
//   {
//     id: "6",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "高級",
//     img: "./images/03.jpg",
//   },
//   {
//     id: "7",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "低級",
//     img: "./images/03.jpg",
//   },
//   {
//     id: "8",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "下流",
//     img: "./images/01.png",
//   },
//   {
//     id: "9",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "高級",
//     img: "./images/02.png",
//   },
//   {
//     id: "10",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "初級",
//     img: "./images/03.jpg",
//   },
//   {
//     id: "11",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "中級",
//     img: "./images/01.png",
//   },
//   {
//     id: "12",
//     title: "課程名稱",
//     coach: "Taylor",
//     bodyparts: "部位",
//     count: "505",
//     created_at: "2021/10/20",
//     heart: 123,
//     level: "高級",
//     img: "./images/01.png",
//   },
// ];

function CourseListContainer() {
  const [course, setCourse] = useState([]);
  useEffect(async () => {
    //所有課程
    let allCourse = await axios.get("http://localhost:3001/course", {
      withCredentials: true,
    });
    setCourse(allCourse.data);
  }, []);
  return (
    <div>
      <CourseControlBar />
      <div className="d-flex flex-wrap container justify-content-between mb-3 mt-4">
        {/* Card */}
        {course.map((course) => {
          return (
            <CoursesCourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              upload_time={course.upload_time}
              update_time={course.update_time}
              user_id={course.user_id}
              likes={course.likes}
              body_part_id={course.body_part_id}
              views={course.views}
              heart={course.heart}
              level={course.level_name}
              filename={course.filename}
            />
          );
        })}
      </div>
      <div>
        {/* 頁碼 */}
        <CoursesCoursePages />
      </div>
    </div>
  );
}

export default CourseListContainer;
