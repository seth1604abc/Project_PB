import React from "react";

function EventCard() {

  const EventData = [
    {
      id: 1,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 2,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 3,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 4,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
    {
      id: 5,
      event_time_month: "10",
      event_time_day: "30",
      event_time_weekday: "SAT. (六)",
      title: "健美之道從飲食開始 營養師教您吃得有品質",
      time: "14:00-15:30",
      quota: "5",
      coach: "Andrea",
    },
  ];

  return (
    <div>
      {/* 活動列表開始 */}
      {/* {EventData.map((EventData, index) => {
        return ( */}
          <div class="d-flex justify-content-center my-5">
            <div className="event_wrapper d-flex ">
              {/* <!-- 日曆 --> */}
              <div class="d-flex justify-content-center align-items-center">
                <div className="event_time_left">
                  <div className="event_time_month">{EventData.event_time_month}月</div>
                  <div className="event_time_day">{EventData.event_time_day}</div>
                  <div className="event_time_weekday">{EventData.event_time_weekday}</div>
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
                    <h4>{EventData.title}</h4>
                  </div>
                  <div className="d-flex mx-3 my-3 align-items-center">
                    <i className="far fa-clock fs-4"></i>
                    <h6 className="event_info_time mx-3"> {EventData.time}</h6>
                  </div>
                  <div className="event_info_quota_wrapper mx-3 my-3 d-flex align-items-center">
                    <img
                      src="event_imgs/quota_icon.svg"
                      style={{ width: "20px" }}
                      alt="quota"
                    />
                    <h6 className="event_info_quota mx-3">活動名額尚餘 {EventData.quota} 位</h6>
                  </div>
                  <div className="event_info_coach"></div>
                  <div className="event_info_coach_name">
                    教練<span> {EventData.coach}</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        {/* ); */}
      {/* } */}
      {/* ) */}
      {/* } */}
    
    </div>
  );
}

export default EventCard;
