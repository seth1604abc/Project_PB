import React from "react";
import CourseHitCourseCard from "./CourseSingleHitCourseCard";

function CourseSingleHitCourse() {
  return (
    <div>
      <div className="d-flex Article__area__title">
        <i class="fas fa-fire Course__area__icon p-2"></i>
        <h2>熱門課程</h2>
      </div>
      <CourseHitCourseCard />
    </div>
  );
}

export default CourseSingleHitCourse;
