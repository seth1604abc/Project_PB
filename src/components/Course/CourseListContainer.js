import React from "react";
import CourseControlBar from "./CoursesControlBar";
import CoursesCourseCard from "./CoursesCourseCard";
import CoursesCoursePages from "./CoursesPageButton";
import { useEffect, useState } from "react";
import axios from "axios";

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
              likes={course.likes}
              body_part_id={course.body_part_id}
              views={course.views}
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
