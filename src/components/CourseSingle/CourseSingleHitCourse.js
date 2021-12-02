import React from "react";
import CourseHitCourseCard from "./CourseSingleHitCourseCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BODY_PARTS, LEVEL } from "../BodyPartandLevelTable";

function CourseSingleHitCourse({ videoid,setRandom }) {
  const [hitCourse, setHitCourse] = useState([]);
  useEffect(async () => {
    //所有留言
    let HitCourse = await axios.get("http://localhost:3001/course/hitsort", {
      withCredentials: true,
    });
    setHitCourse(HitCourse.data);
    //console.log(hitCourse);
  }, []);
  return (
    <div>
      <div className="d-flex Article__area__title normalMouse">
        <i class="fas fa-fire Course__area__icon p-2"></i>
        <h2>熱門課程</h2>
      </div>
      {hitCourse.map((item) => {
        if (Number(videoid) === Number(item.id)) {
          //console.log("videoid", videoid);
          //console.log("itemid", item.id);
          return <></>;
        } else {
          if (item.length > 3) {
            //console.log(item.length);
            return <></>;
          } else {
            return (
              <div key={item.id}>
                <CourseHitCourseCard
                  id={item.id}
                  title={item.title}
                  bodyparts={BODY_PARTS[item.body_part_id]}
                  level={LEVEL[item.level_id]}
                  likes={item.likes}
                  img={item.filename}
                  setRandom={setRandom}
                />
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default CourseSingleHitCourse;
