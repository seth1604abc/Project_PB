import React from "react";
import $ from 'jquery';
import { Link } from 'react-router-dom'

function EventCard({ event_time_month, event_time_day, event_time_weekday, title, time, quota, coach, image, id, event_img }) {

  const handle = (id) => {
    console.log(id);
  }

  const switchDay = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "日"
  }


  return (
    <div>
      <div class="d-flex justify-content-center my-5">
        <div className="event_wrapper d-flex ">
          {/* <!-- 日曆 --> */}
          <div class="d-flex justify-content-center align-items-center">
            <div className="event_time_left">
              <div className="event_time_month">{event_time_month}月</div>
              <div className="event_time_day">{event_time_day}號</div>
              <div className="event_time_weekday">星期 {switchDay[event_time_weekday]}</div>
              <div className="event_time_square"></div>
            </div>
          </div>

          <Link class="event_imgInfo_card d-flex" to={`/event-single/${id}`}>

            {/* <!-- 活動封面 --> */}
            <div className="event_cover_wrapper">
              <div className="event_cover">
                <img src={`/event_imgs/${event_img}`} alt=""></img>
              </div>
            </div>
            {/* <!-- 活動資訊 --> */}
            <div className="event_info p-3">
              <div className="event_info_title mx-3 my-4 fw-bold">
                <h4>{title}</h4>
              </div>
              <div className="d-flex mx-3 my-3 align-items-center">
                <i className="far fa-clock fs-4"></i>
                <h6 className="event_info_time mx-3"> {time}</h6>
              </div>
              <div className="event_info_quota_wrapper mx-3 my-3 d-flex align-items-center">
                <img
                  src="event_imgs/quota_icon.svg"
                  style={{ width: "20px" }}
                  alt="quota"
                />
                <h6 className="event_info_quota mx-3">
                  活動名額尚餘 {quota} 位
                </h6>
              </div>
              <div className="event_info_coach">
                <img src={`/image/${image}`} alt="" />
              </div>
              <div className="event_info_coach_name">
                <span>{coach}</span> 教練
              </div>
            </div>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
