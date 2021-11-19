import React from "react";

function CourseSingleHitCourseCard(item) {
  return (
    <div>
      <div className="d-flex Course__HitCourse__Card p-2 my-2 pointer">
        <div className="Course__area__Waiting__image ms-2">
          <img src={item.img} alt="商品圖片" />
        </div>
        <div className="d-flex flex-column justify-content-center ms-3">
          <div className="row p-2">
            <h4>{item.title}</h4>
            <p className="col-3  ms-2 Course__area__HitCourse__tag">
              # {item.bodyparts}
            </p>
            <p className="col-3 Course__area__HitCourse__tag"># {item.level}</p>
            <div>
              <i class="fas fa-heart me-3 mt-2 pointer HeartColor"></i>
              <span>{item.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSingleHitCourseCard;
