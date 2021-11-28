import React from "react";
import Membericon from "../MemberIcon.js";
import { useState, useEffect } from "react";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";
import axios from "axios";

function CourseSingleVideo({ singleCourse ,isCourse_id}) {
  const [seeall, setSeeall] = useState("");
  const [icon, setIcon] = useState("far");
  const [rightList, setRightList] = useState('');
  useEffect(async()=>{
    let isLIkesList = await axios.get(
      "http://localhost:3001/Course/isLikeList",
      {
        withCredentials: true,
      }
    );
    let isLIkesListMember = await axios.get(
      "http://localhost:3001/Course/isLikeListMemberId",
      {
        withCredentials: true,
      }
    );
    let filterLikeList = isLIkesList.data.filter((item) => {
      return item.user_id === isLIkesListMember.data;
    });
    let currectList = filterLikeList.map((item) => {
      return item.course_id;
    });
    setRightList(currectList)
    if (currectList.includes(Number(isCourse_id))) {
      setIcon("fas HeartColor");
    } else {
      setIcon("far");
    }
  },[])
  function viewall(e) {
    if (seeall === "") {
      setSeeall("seeall");
      e.target.innerHTML =
        '<i class="fas fa-angle-double-up px-1"></i> 隱藏部分資訊';
      console.log(e.target.innerHTML);
    } else {
      setSeeall("");
      e.target.innerHTML =
        '<i class="fas fa-angle-double-down px-1"></i> 顯示完整資訊';
    }
  }
  async function clickheart() {
    if (icon === "far") {
      setIcon("fas HeartColor");
      let addCountLikes = singleCourse[0].likes + 1;
      let likes = { like: addCountLikes, id: singleCourse[0].id };
      let likeList = { course: singleCourse[0].id };
      try {
        let SingleCourse = await axios.post(
          `http://localhost:3001/Course/changeLikesCount`,
          likes,
          { withCredentials: true }
        );
        let addLikeList = await axios.post(
          `http://localhost:3001/Course/addLikeList`,
          likeList,
          { withCredentials: true }
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      setIcon("far");
      let disCountLikes = singleCourse[0].likes;
      let likes = { like: disCountLikes, id: singleCourse[0].id };
      let likeList = { course: singleCourse[0].id };

      try {
        let SingleCourse = await axios.post(
          `http://localhost:3001/Course/changeLikesCount`,
          likes,
          { withCredentials: true }
        );
        let addLikeList = await axios.post(
          `http://localhost:3001/Course/deleteLikeList`,
          likeList,
          { withCredentials: true }
        );
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (singleCourse === undefined || rightList ===undefined) {
    return <></>;
  }
  return (
    <>
      <div className="Course__Main-area white-bg">
        <div className="Course__Video">
          <video controls>
            <source
              src={`/videos/${singleCourse[0].filename}.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="pt-3 ps-4">
          <div className="d-flex align-items-center position-relative">
            <h1 className="mb-0">{singleCourse[0].title}</h1>
            <div className="Course__Video-area__Description pe-4 d-flex">
              <div className="d-flex pointer">
                <div className="Course__Video-area__tags me-3">
                  <i class="fas fa-hand-paper me-2"></i>
                  {BODY_PARTS[singleCourse[0].body_part_id]}
                </div>
                <div className="Course__Video-area__tags me-3">
                  <i class="fas fa-signal me-2"></i>
                  {LEVEL[singleCourse[0].level_id]}
                </div>
              </div>
              <div className="Course__video-area__likes me-3 Maincolor">
                <i
                  class={`${icon} far fa-heart me-2 pointer `}
                  onClick={clickheart}
                ></i>
                <span>
                  {icon === "far"
                    ? singleCourse[0].likes
                    : singleCourse[0].likes + 1}
                </span>
                <i class="fas fa-share-alt me-2 ms-3 pointer Maincolor"></i>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4">
            <div className="Course__video-area__MemberImgsetting">
              <Membericon />
            </div>
            <div className="Course__video-area__CoachName ms-3">
              Taylor Swift
            </div>
            <div className="position-relative pb-4 mb-4">
              <pre className={`Course__video-area__Content pe-4 ${seeall}`}>
                {singleCourse[0].detail}
              </pre>
              <div
                className="pointer Course__video-area__Content__seeall-icon pe-4"
                onClick={(e) => {
                  viewall(e);
                }}
              >
                <i class="fas fa-angle-double-down px-1"></i> 顯示完整資訊
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseSingleVideo;
