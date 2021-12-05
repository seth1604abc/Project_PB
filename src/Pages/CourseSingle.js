import React from "react";
import "../css/Course.css";
import "../css/ProductSingle.css";
// 影片區 包含 課程名稱、概述....
import CourseSingleVideo from "../components/CourseSingle/CourseSingleVideo";
// 待播清單
import CourseSingleWaitingList from "../components/CourseSingle/CourseSingleWaitingList";
// 留言區
import CourseSingleTalk from "../components/CourseSingle/CourseSingleTalk";
// 推薦影片
import CourseSingleHitCourse from "../components/CourseSingle/CourseSingleHitCourse";
// 推薦商品
import CourseSingleProduct from "../components/CourseSingle/CourseSingleProduct";
// 推薦文章
import CourseSingleArticle from "../components/CourseSingle/CourseSingleArticle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CourseSingle() {
  const { courseId } = useParams();
  const [singleCourse, setSingleCourse] = useState();
  const [random, setRandom] = useState();
  const [theUser, setTheUser] = useState(null);
  const [bodyPartId,setBodyPartId] = useState()
  useEffect(async () => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    let SingleCourse = await axios.get(
      `http://localhost:3001/Course/SingleCourse/${courseId}`,
      {
        withCredentials: true,
      }
      );
      setSingleCourse(SingleCourse.data);
    let isUser = await axios.get("http://localhost:3001/Course/isUser", {
      withCredentials: true,
    });
    setTheUser(isUser.data[0]);
    console.log(SingleCourse.data[0].body_part_id)
    setBodyPartId(SingleCourse.data[0].body_part_id)
  }, [random]);
  
  console.log(singleCourse)
  if (singleCourse === undefined) {
    return <></>;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="Course__video-mainarea mt-4">
          <CourseSingleVideo
            singleCourse={singleCourse}
            isCourse_id={courseId}
            theUser={theUser}
          />
          <CourseSingleWaitingList isCourse_id={courseId} />
        </div>
        <div className="d-flex  mt-4 ms-4 me-4">
          <div className="maxw65">
            <div className="mb-4">
              <CourseSingleTalk
                course_id={courseId}
                singleCourse={singleCourse}
                videoid={courseId}
                theUser={theUser}
              />
            </div>
            <div>
              <CourseSingleArticle />
            </div>
          </div>
          <div className="maxw35 p-3 m-1 ps-4">
            <div className="mb-4">
              <CourseSingleHitCourse videoid={courseId} setRandom={setRandom} />
            </div>
            <div>
              <CourseSingleProduct bodyPart={bodyPartId} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseSingle;
