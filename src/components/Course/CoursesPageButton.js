import React from "react";
import { useRef } from "react";

function CoursesPageButton() {
  const Page1Ref = useRef();
  const Page2Ref = useRef();
  const Page3Ref = useRef();
  const Page4Ref = useRef();
  const Page5Ref = useRef();
  const Page6Ref = useRef();
  function change(e) {
    Page1Ref.current.classList.remove("Courses__CoursePages__active");
    Page2Ref.current.classList.remove("Courses__CoursePages__active");
    Page3Ref.current.classList.remove("Courses__CoursePages__active");
    Page4Ref.current.classList.remove("Courses__CoursePages__active");
    Page5Ref.current.classList.remove("Courses__CoursePages__active");
    Page6Ref.current.classList.remove("Courses__CoursePages__active");
    e.target.classList.toggle("Courses__CoursePages__active");
    // console.log(Page1Ref.current);
    // console.log(Page2Ref.current);
    // console.log(Page3Ref.current);
    // console.log(Page4Ref.current);
    // console.log(Page5Ref.current);
    // console.log(Page6Ref.current);
    // console.log(e.target);

  }
  return (
    <div className="row Courses__CoursePages mb-5">
      <div className="col-1">
        <i class="fas fa-caret-left"></i>
      </div>
      <div className="col-10">
        <ul className="d-flex">
          <li
            className="col Courses__CoursePages__active"
            ref={Page1Ref}
            onClick={change}
          >
            1
          </li>
          <li className="col" ref={Page2Ref} onClick={change}>
            2
          </li>
          <li className="col" ref={Page3Ref} onClick={change}>
            3
          </li>
          <li className="col" ref={Page4Ref} onClick={change}>
            4
          </li>
          <li className="col" ref={Page5Ref} onClick={change}>
            5
          </li>
          <li className="col" ref={Page6Ref} onClick={change}>
            6
          </li>
        </ul>
      </div>
      <div className="col-1">
        <i class="fas fa-caret-right"></i>
      </div>
    </div>
  );
}
export default CoursesPageButton;
