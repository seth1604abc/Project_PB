import React from "react";

function EventCard(){

return(
    
    <div className="event_container">
      <div><h3>付費會員限定 活動報名中</h3></div>
      <div className="event_searchBar_wrapper my-5">
        <span className="mx-5 text-white h5">活動區間</span>
        <input
          type="month"
          className="event_search_month"
          id="event_search_month"
          name="event_search_month"
        />
        <span className="text-white h5 mx-4">至</span>
        <input
          type="month"
          className="event_search_month"
          id="event_search_month"
          name="event_search_month"
        />
        <button type="event_search_submit" className="event_search_submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="event_wrapper d-flex">
        {/* <!-- 日曆 --> */}
        <div className="event_time_left">
          <div className="event_time_month">10月</div>
          <div className="event_time_day">30</div>
          <div className="event_time_weekday">SAT. (六)</div>
          <div className="event_time_square"></div>
        </div>
        {/* <!-- 活動封面 --> */}
        <div className="event_cover_wrapper">
          <div className="event_cover"></div>
        </div>
        {/* <!-- 活動資訊 --> */}
        <div className="event_info p-3">
          <div className="event_info_title mx-3 my-4">
            <h4>健美之道從飲食開始 營養師教您吃得有品質</h4></div>
          <div className="d-flex mx-3 my-3 align-items-center">
            <i className="far fa-clock"></i>
            <h5 className="event_info_time mx-3"> 時間: 14:00-15:30</h5>
          </div>
          <div className="event_info_quota_wrapper mx-3 my-3 d-flex align-items-center">
            <img src="event_imgs/quota_icon.svg" width="32" alt="quota"/>
            <h5 className="event_info_quota mx-3">剩餘名額: 5人</h5>
          </div>
          <div className="event_info_coach"></div>
          <div className="event_info_coach_name">教練<span> Andrea</span></div>
        </div>
      </div>
      </div>

);
}

export default EventCard;