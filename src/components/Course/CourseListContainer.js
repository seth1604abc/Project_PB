import React from "react";
import CourseControlBar from "./CoursesControlBar";
import CoursesCourseCard from "./CoursesCourseCard";
import CoursesCoursePages from "./CoursesPageButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";

let storage = sessionStorage;

function CourseListContainer() {
  const [course, setCourse] = useState([]);
  // 為了備份最初抓回來的資料 當select 選到 全部時 能再抓回全部資料
  const [allCourse, setAllCourse] = useState([]);
  // 課程篩選
  const [filterBase, setFilterBase] = useState({body_part_id:"1",level_id:"1",user_id:"1"});

  useEffect(async () => {
    //所有課程
    let allCourse = await axios.get("http://localhost:3001/course", {
      withCredentials: true,
    });
    // 要改變的課程項目
    setCourse(allCourse.data);
    // axios 抓回來後要保留的所有項目
    setAllCourse(allCourse.data);
  }, []);

  useEffect(()=>{
    setCourse(course);
    setFilterBase(filterBase);
  },[filterBase,course])



  function handleFilterBaseChange(e){
    let newFilterBase = {...filterBase, [e.target.name]:e.target.value};
    setFilterBase(newFilterBase);
    // if (filterBase.bodyPart === "1" && filterBase.level === "1" && filterBase.coach === "1") {
    //   setCourse(allCourse);
    // } else{
    //   let newrBase = Object.keys(filterBase).filter(function(v) {
    //     return filterBase[v] !== "1";
    //     if (Object.keys(newrBase).length)
    //   });
    // }
    console.log('filterbase',filterBase)
    let newBase = Object.keys(filterBase).filter(function(v) {
      return filterBase[v] !== "1";
    });
    console.log(newBase)
    let filteredCourse=[]
    switch (Object.keys(newBase).length){
      case 1:
        // console.log("newbase",newBase[0])
        // console.log(filterBase[newBase[0]])
        filteredCourse = allCourse.filter((item) => {
          return item[`${newBase[0]}`] === +filterBase[newBase[0]];
        });
        console.log("filteredCourse",filteredCourse);
        setCourse(filteredCourse);
        break;
      case 2:
        // console.log("newbase",newBase[0])
        // console.log(filterBase[newBase[0]])
        filteredCourse = allCourse.filter((item) => {
          return (item[`${newBase[0]}`] === +filterBase[newBase[0]] && item[`${newBase[1]}`] === +filterBase[newBase[1]]);
        });
        console.log("filteredCourse",filteredCourse);
        setCourse(filteredCourse);
        break;
      case 3:
        // console.log("newbase",newBase[0])
        // console.log(filterBase[newBase[0]])
        filteredCourse = allCourse.filter((item) => {
          return (item[`${newBase[0]}`] === +filterBase[newBase[0]] && item[`${newBase[1]}`] === +filterBase[newBase[1]] && item[`${newBase[2]}`] === +filterBase[newBase[2]]);
        });
        console.log("filteredCourse",filteredCourse);
        setCourse(filteredCourse);
        break;
      default:
        setCourse(allCourse);
    }
  }

//`${filterBase[newBase[0]]}`

  // function bodyPartHandleSelect(e) {
  //   setBodyPart(e.target.value);
  //   if (e.target.value === "1") {
  //     setCourse(allCourse);
  //   } else {
  //     let bodyPartChecked = allCourse.filter((item) => {
  //       return item.body_part_id === Number(e.target.value);
  //     });
  //     setCourse(bodyPartChecked);
  //   }
  // }

  //console.log('bodyPart',bodyPart,'coach',coach,'level',level)

  function waitingListButtonToggle(e) {
    if (e === 1) {
      let WaitingList = storage
        .getItem("WaitingList")
        .substr(0, storage.getItem("WaitingList").length - 1)
        .split(",");
      let checkdWaitingList = allCourse.filter((item) => {
        //console.log(item.id)
        return WaitingList.includes(`${item.id}`);
      });
      //console.log("checkdWaitingList",checkdWaitingList)
      setCourse(checkdWaitingList);
    } else {
      setCourse(allCourse);
    }
  }

  return (
    <div>
      <CourseControlBar
        waitingListButtonToggle={waitingListButtonToggle}
        handleFilterBaseChange={handleFilterBaseChange}
      />
      <div className="Courses__singlecourse__card__flex__wrapper">
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
              body_part_id={BODY_PARTS[course.body_part_id]}
              views={course.views}
              level={LEVEL[course.level_id]}
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
