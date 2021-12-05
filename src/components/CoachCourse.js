import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BODY_PARTS, LEVEL } from "./BodyPartandLevelTable";
import $ from "jquery";
import axios from "axios";
let storage = sessionStorage;

function CoachCourse({
  id,
  title,
  upload_time,
  likes,
  coach,
  body_part_id,
  view,
  level,
  filename,  
  theCourse,
  course,  
}) {
  const [icon, setIcon] = useState("far");
  const [likeListAll, setLikeListAll] = useState([]);
  const [likeListMember, setLikeListMember] = useState([]);
  const [theUser, setTheUser] = useState(null);

  useEffect(async () => {
    

    
    let isUser = await axios.get("http://localhost:3001/Course/isUser", {
      withCredentials: true,
    });
    setTheUser(isUser.data[0]);
  }, []);

  // 禁止右鍵下載圖片
  $("#cardImage").bind("contextmenu", function () {
    return false;
  });

  // sessionStorage
  // 給 WaitingList 空字串  

  async function addViews() {
    let course_id = theCourse.id;
    let views = theCourse.views + 1;
    let result = { course_id: course_id, views: views };
    try {
      let addViews = await axios.post(
        `http://localhost:3001/Course/addViews`,
        result,
        { withCredentials: true }
      );
    } catch (e) {
      console.log(e);
    }
  }

  if (
    likeListAll === undefined ||
    likeListMember === undefined ||
    theCourse === undefined
  ) {
    return <></>;
  }
  return (
    <>
      <a
        href={`/course-single/${theCourse.id}`}
        id="cardImage"
        className="Courses__singlecourse__card LinkNoStyle"
        onClick={() => {
          addViews();
        }}
      >
        {/* <Link to={`/course-single/${theCourse.id}`} className="LinkNoStyle"> */}
        <img
          src={`/images/${theCourse.filename}.png`}
          className="card-img-top"
          alt="課程1"
        />
        <div className="card-body">
          <div className="mb-2 d-flex">
            <div className="Courses__singlecourse__card__type">
              {BODY_PARTS[theCourse.body_part_id]}
            </div>
            <div className="Courses__singlecourse__card__coach_name ms-3">
              {theCourse.coach}
            </div>
          </div>
          <h3 className="mt-3 Courses__singlecourse__card__title">
            {theCourse.title}
          </h3>
          <div className="mt-4 d-flex position-relitave">
            <div className="Courses__singlecourse__card__count me-4">
              觀看次數：{theCourse.views}
            </div>
            <div className="Courses__singlecourse__card__created-at me-4">
              {theCourse.upload_time}
            </div>
            
          </div>
        </div>
        
        
        {/* </Link> */}
      </a>
    </>
  );
}

export default CoachCourse;