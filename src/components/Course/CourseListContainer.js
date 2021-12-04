import React from "react";
import CourseControlBar from "./CoursesControlBar";
import CoursesCourseCard from "./CoursesCourseCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

let storage = sessionStorage;

function CourseListContainer() {
  const [course, setCourse] = useState([]);
  // 為了備份最初抓回來的資料 當select 選到 全部時 能再抓回全部資料
  const [allCourse, setAllCourse] = useState([]);
  // 課程排序
  const [sort, setSort] = useState(1);
  // 課程篩選
  const [filterBase, setFilterBase] = useState({
    body_part_id: "1",
    level_id: "1",
    user_id: "1",
  });
  const [copyFilterBase, setCopyFilterBase] = useState(filterBase);
  // 關鍵字搜尋
  const [keyWord, setKeyWord] = useState("");
  // 已收藏的課程
  const [heartCourse, setHeartCourse] = useState();
  const [courseCardMask, setCourseCardMask] = useState(
    "Course__Video__isntUser__Hidden"
  );
  useEffect(async () => {
    //所有課程
    let allCourse = await axios.get("http://localhost:3001/course", {
      withCredentials: true,
    });
    // 要改變的課程項目
    setCourse(allCourse.data);
    // axios 抓回來後要保留的所有項目
    setAllCourse(allCourse.data);

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
    setHeartCourse(currectList);
  }, []);

  useEffect(() => {
    setCourse(course);
    setFilterBase(filterBase);
  }, [filterBase, course]);

  function bodyPartHandleSelect() {
    if (
      // 都不選
      filterBase.body_part_id === "1" &&
      filterBase.level_id === "1" &&
      filterBase.user_id === "1"
    ) {
      setCourse(allCourse);
    } else if (
      // 身體部位有變化
      filterBase.body_part_id !== "1" &&
      filterBase.level_id === "1" &&
      filterBase.user_id === "1"
    ) {
      let bodyPartChecked = allCourse.filter((item) => {
        return item.body_part_id === Number(filterBase.body_part_id);
      });
      setCourse(bodyPartChecked);
    } else if (
      // 教練有變化
      filterBase.body_part_id === "1" &&
      filterBase.level_id === "1" &&
      filterBase.user_id !== "1"
    ) {
      let coachChecked = allCourse.filter((item) => {
        return item.user_id === Number(filterBase.user_id);
      });
      setCourse(coachChecked);
    } else if (
      // 難易度有變化
      filterBase.body_part_id === "1" &&
      filterBase.level_id !== "1" &&
      filterBase.user_id === "1"
    ) {
      let levelChecked = allCourse.filter((item) => {
        return item.level_id === Number(filterBase.level_id);
      });
      setCourse(levelChecked);
    } else if (
      // 身體部位跟難易度 有變化
      filterBase.body_part_id !== "1" &&
      filterBase.level_id !== "1" &&
      filterBase.user_id === "1"
    ) {
      setCourse(allCourse);
      let bodyPartChecked = allCourse.filter((item) => {
        return item.body_part_id === Number(filterBase.body_part_id);
      });
      let levelChecked = bodyPartChecked.filter((item) => {
        return item.level_id === Number(filterBase.level_id);
      });
      setCourse(levelChecked);
    } else if (
      // 身體部位跟教練 有變化
      filterBase.body_part_id !== "1" &&
      filterBase.level_id === "1" &&
      filterBase.user_id !== "1"
    ) {
      setCourse(allCourse);
      let bodyPartChecked = allCourse.filter((item) => {
        return item.body_part_id === Number(filterBase.body_part_id);
      });
      let coachChecked = bodyPartChecked.filter((item) => {
        return item.user_id === Number(filterBase.user_id);
      });
      setCourse(coachChecked);
    } else if (
      // 難易度跟教練 有變化
      filterBase.body_part_id === "1" &&
      filterBase.level_id !== "1" &&
      filterBase.user_id !== "1"
    ) {
      setCourse(allCourse);
      let levelChecked = allCourse.filter((item) => {
        return item.level_id === Number(filterBase.level_id);
      });
      let coachChecked = levelChecked.filter((item) => {
        return item.user_id === Number(filterBase.user_id);
      });
      setCourse(coachChecked);
    } else if (
      // 三個都有變化
      filterBase.body_part_id !== "1" &&
      filterBase.level_id !== "1" &&
      filterBase.user_id !== "1"
    ) {
      setCourse(allCourse);
      let bodyPartChecked = allCourse.filter((item) => {
        return item.body_part_id === Number(filterBase.body_part_id);
      });
      let levelChecked = bodyPartChecked.filter((item) => {
        return item.level_id === Number(filterBase.level_id);
      });
      let coachChecked = levelChecked.filter((item) => {
        return item.user_id === Number(filterBase.user_id);
      });
      setCourse(coachChecked);
    }
    setCopyFilterBase(filterBase);
  }

  function waitingListButtonToggle(e) {
    if (e === 1) {
      let WaitingList = storage
        .getItem("WaitingList")
        .substr(0, storage.getItem("WaitingList").length - 1)
        .split(",");
      console.log("WaitingList", WaitingList);
      let checkdWaitingList = allCourse.filter((item) => {
        console.log("item.id", item.id);
        return WaitingList.includes(`${item.id}`);
      });
      console.log("checkdWaitingList", checkdWaitingList);
      setCourse(checkdWaitingList);
    } else {
      setCourse(allCourse);
    }
  }

  function heartListButtonToggle(e) {
    if (e === 1) {
      //console.log("部分顯示");
      let heartList = allCourse.filter((item) => {
        return heartCourse.includes(item.id);
      });
      setCourse(heartList);
    } else {
      setCourse(allCourse);
      //console.log("全部顯示");
    }
  }

  // 排序更動 熱門程度  更新時間
  function HitSort() {
    //console.log(sort)
    if (sort === 2) {
      course.sort(function (a, b) {
        return b.likes - a.likes;
      });
      //console.log('HitSort')
    } else if (sort === 1) {
      course.sort(function (a, b) {
        return new Date(b.upload_time) - new Date(a.upload_time);
      });
    }
  }

  // 關鍵字搜尋
  function searchtext() {
    let unserach = course;
    let Keyword = allCourse.filter((item) => {
      return item.title.includes(keyWord);
    });
    //console.log("searchtext", Keyword);
    let defaultFilter = {
      ...filterBase,
      body_part_id: "1",
      user_id: "1",
      level_id: "1",
    };
    setFilterBase(defaultFilter);
    if (keyWord === "") {
      setFilterBase(copyFilterBase);
      setCourse(allCourse);
      if (
        // 身體部位有變化
        filterBase.body_part_id !== "1" &&
        filterBase.level_id === "1" &&
        filterBase.user_id === "1"
      ) {
        let bodyPartChecked = allCourse.filter((item) => {
          return item.body_part_id === Number(filterBase.body_part_id);
        });
        setCourse(bodyPartChecked);
      } else if (
        // 教練有變化
        filterBase.body_part_id === "1" &&
        filterBase.level_id === "1" &&
        filterBase.user_id !== "1"
      ) {
        let coachChecked = allCourse.filter((item) => {
          return item.user_id === Number(filterBase.user_id);
        });
        setCourse(coachChecked);
      } else if (
        // 難易度有變化
        filterBase.body_part_id === "1" &&
        filterBase.level_id !== "1" &&
        filterBase.user_id === "1"
      ) {
        let levelChecked = allCourse.filter((item) => {
          return item.level_id === Number(filterBase.level_id);
        });
        setCourse(levelChecked);
      } else if (
        // 身體部位跟難易度 有變化
        filterBase.body_part_id !== "1" &&
        filterBase.level_id !== "1" &&
        filterBase.user_id === "1"
      ) {
        setCourse(allCourse);
        let bodyPartChecked = allCourse.filter((item) => {
          return item.body_part_id === Number(filterBase.body_part_id);
        });
        let levelChecked = bodyPartChecked.filter((item) => {
          return item.level_id === Number(filterBase.level_id);
        });
        setCourse(levelChecked);
      } else if (
        // 身體部位跟教練 有變化
        filterBase.body_part_id !== "1" &&
        filterBase.level_id === "1" &&
        filterBase.user_id !== "1"
      ) {
        setCourse(allCourse);
        let bodyPartChecked = allCourse.filter((item) => {
          return item.body_part_id === Number(filterBase.body_part_id);
        });
        let coachChecked = bodyPartChecked.filter((item) => {
          return item.user_id === Number(filterBase.user_id);
        });
        setCourse(coachChecked);
      } else if (
        // 難易度跟教練 有變化
        filterBase.body_part_id === "1" &&
        filterBase.level_id !== "1" &&
        filterBase.user_id !== "1"
      ) {
        setCourse(allCourse);
        let levelChecked = allCourse.filter((item) => {
          return item.level_id === Number(filterBase.level_id);
        });
        let coachChecked = levelChecked.filter((item) => {
          return item.user_id === Number(filterBase.user_id);
        });
        setCourse(coachChecked);
      } else if (
        // 三個都有變化
        filterBase.body_part_id !== "1" &&
        filterBase.level_id !== "1" &&
        filterBase.user_id !== "1"
      ) {
        setCourse(allCourse);
        let bodyPartChecked = allCourse.filter((item) => {
          return item.body_part_id === Number(filterBase.body_part_id);
        });
        let levelChecked = bodyPartChecked.filter((item) => {
          return item.level_id === Number(filterBase.level_id);
        });
        let coachChecked = levelChecked.filter((item) => {
          return item.user_id === Number(filterBase.user_id);
        });
        setCourse(coachChecked);
      }
    } else {
      setCourse(Keyword);
    }
  }
  return (
    <div>
      <CourseControlBar
        heartListButtonToggle={heartListButtonToggle}
        waitingListButtonToggle={waitingListButtonToggle}
        bodyPartHandleSelect={bodyPartHandleSelect}
        filterBase={filterBase}
        setFilterBase={setFilterBase}
        HitSort={HitSort()}
        setSort={setSort}
        setKeyWord={setKeyWord}
        searchtext={searchtext}
      />
      <div className="Courses__singlecourse__card__flex__wrapper position-relative">
        <div className={`Course__isntUser ${courseCardMask}`}>
          <div className="Course__isntUser__Content">
            <i
              className="fas fa-times Course__isntUser__Content__close"
              onClick={() => {
                document.querySelector(".Course__isntUser").style.opacity = "0";
                setCourseCardMask("Course__Video__isntUser__Hidden");
                for (let i = 0; i < course.length; i++) {
                  document.getElementsByClassName(
                    "Courses__singlecourse__card"
                  )[i].style.opacity = "1";
                }
              }}
            ></i>
            <div className="Course__isntUser__Content__text">
              <h4 className="mb-4">您尚未成為會員，立即加入！</h4>
              <Link to="/login">
                <div className="Course__Video__isntUser__Content__button pointer">
                  加入會員
                </div>
              </Link>
            </div>
          </div>
        </div>
        {course.map((theCourse) => {
          return (
            <CoursesCourseCard
              key={theCourse.id}
              theCourse={theCourse}
              course={course}
              setHeartCourse={setHeartCourse}
              heartCourse={heartCourse}
              setCourseCardMask={setCourseCardMask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CourseListContainer;
