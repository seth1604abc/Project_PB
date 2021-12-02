import React from "react";
import { Link } from "react-router-dom";

function CourseSingleHitCourseCard({id,title,bodyparts,level,likes,img,setRandom}) {
  return (
    <a href={`/course-single/${id}`} className="LinkNoStyle" onClick={()=>{setRandom(Math.random())}}>
      <div>
        <div className="d-flex Course__HitCourse__Card p-2 my-2 pointer">
          <div className="Course__area__Waiting__image ms-4">
            <img src={`/images/${img}.png`} alt="商品圖片" />
          </div>
          <div className="d-flex flex-column justify-content-center ms-3">
            <div className="row px-2">
              <h5 className='MainColor'>{title}</h5>
              <p className="col-3  ms-2 Course__area__HitCourse__tag">
                # {bodyparts}
              </p>
              <p className="col-3 Course__area__HitCourse__tag ms-2">
                # {level}
              </p>
              <div>
                <i class="fas fa-heart me-3 mt-2 pointer HeartColor"></i>
                <span className='MainColor'>{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CourseSingleHitCourseCard;
