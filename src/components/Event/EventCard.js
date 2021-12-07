import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

function EventCard({
  event_time_month,
  event_time_day,
  event_time_weekday,
  title,
  time,
  quota,
  coach,
  image,
  id,
  event_img,
}) {
  const handle = (id) => {
    console.log(id);
  };

  const switchDay = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "日",
  };

  return (
    <div>
      <div className="event_wrapper d-flex align-items-center mb-4">
        {/* <!-- 日曆 --> */}
        <div className="event_time_left d-flex flex-column align-items-center text-center me-3">
          <div className="event_time_month text-center w-100">
            {event_time_month}月
          </div>
          <div className="event_time_day text-center w-100">
            {event_time_day}號
          </div>
          <div className="event_time_weekday text-center w-100 ">
            星期 {switchDay[event_time_weekday]}
          </div>
          <div className="event_time_square"></div>
        </div>

        <Link
          className="d-block event_imgInfo_card d-flex"
          to={`/event-single/${id}`}
        >
          {/* <!-- 活動封面 --> */}
          <div className="event_cover_wrapper ">
            <div className="event_cover">
              <img src={`/event_imgs/${event_img}`} alt=""></img>
            </div>
          </div>
          {/* <!-- 活動資訊 --> */}
          <div className="event_info p-3">
            <h4 className="fw-bold mb-3">{title}</h4>

            <p className="event_info_time ">
              <i className="far fa-clock" style={{ fontSize: "1rem" }}></i>{" "}
              {time}
            </p>

            <div className="event_info_quota_wrapper  my-3 d-flex align-items-center">
              <img
                src="event_imgs/quota_icon.svg"
                style={{ width: "20px" }}
                alt="quota"
              />
              <h6 className="event_info_quota mx-3">活動名額尚餘 {quota} 位</h6>
            </div>
            <div className="event__coach__area d-flex justify-content-end align-items-center mb-1">
              <div className="event_info_coach_name text-center me-2">
                {coach}
              </div>
              <div className="event_info_coach">
                <img
                  src={`/image/${image}`}
                  alt=""
                  style={{ backgroundColor: "#0f3357" }}
                />
              </div>
            </div>
          </div>
        </Link>
        <div></div>
      </div>
    </div>
  );
}

export default EventCard;
