import React from "react";

function EventCard({
  event_time_month,
  event_time_day,
  event_time_weekday,
  title,
  time,
  quota,
  coach,
}) {
  return (
    <div>
      <div class="d-flex justify-content-center my-5">
        <div className="event_wrapper d-flex ">
          {/* <!-- 日曆 --> */}
          <div class="d-flex justify-content-center align-items-center">
            <div className="event_time_left">
              <div className="event_time_month">{event_time_month}月</div>
              <div className="event_time_day">{event_time_day}</div>
              <div className="event_time_weekday">{event_time_weekday}</div>
              <div className="event_time_square"></div>
            </div>
          </div>

          <div class="event_imgInfo_card d-flex">
            {/* <!-- 活動封面 --> */}
            <div className="event_cover_wrapper">
              <div className="event_cover">
                <img src="../event_imgs/w644.jpg" alt=""></img>
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
              <div className="event_info_coach"></div>
              <div className="event_info_coach_name">
                教練<span>{coach}</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
