import React from 'react';
import CourseControlBar from './CoursesControlBar';
import CoursesSingleCourse from './CoursesCourseCard';
import CoursesCoursePages from './CoursesPageButton';

function CourseListContainer() {
  return (
    <div>
      <CourseControlBar />
      <div className="d-flex flex-wrap container justify-content-between mb-3 mt-4">
        {/* Card */}
        <CoursesSingleCourse />
      </div>
      <div>
        {/* 頁碼 */}
        <CoursesCoursePages />
      </div>
    </div>
  );
}

export default CourseListContainer;
