import React from "react";
// import DatePicker from 'react-date-picker';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

// import "react-datepicker/dist/react-datepicker.css";


function EventCard() {
  // const [value, onChange] = useState(new Date());


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
  // const [EventData, setEventData] = useState(EventDatas);

  return (
    <div className="event_container">
      <div>
        <h3>訂閱會員限定 活動報名中</h3>
      </div>
      <div className="event_searchBar_wrapper my-5">
        <span className="mx-5 text-white h5">活動區間</span>
        <input
         
          type="month"
          className="event_search_month"
          id="event_search_month"
          name="event_search_month"
        />
        {/* <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div> */}
        <span className="text-white h5 mx-4">至</span>
      <input
       
       type="month"
       className="event_search_month"
       id="event_search_month"
       name="event_search_month"
     />
        
        {/* <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div> */}
        <button type="event_search_submit" className="event_search_submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      {/* 活動列表開始 */}
      {EventData.map((EventData, index) => {
        return (
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
        );
      })}
      {/* <div class="d-flex justify-content-center my-5">
        <div className="event_wrapper d-flex "> */}
      {/* <!-- 日曆 --> */}
      {/* <div class="d-flex justify-content-center align-items-center">
            <div className="event_time_left">
              <div className="event_time_month">10月</div>
              <div className="event_time_day">30</div>
              <div className="event_time_weekday">SAT. (六)</div>
              <div className="event_time_square"></div>
            </div>
          </div>

          <div class="event_imgInfo_card d-flex"> */}
      {/* <!-- 活動封面 --> */}
      {/* <div className="event_cover_wrapper">
              <div className="event_cover">
                <img src="../event_imgs/w644.jpg" alt=""></img>
              </div>
            </div> */}
      {/* <!-- 活動資訊 --> */}
      {/* <div className="event_info p-3">
              <div className="event_info_title mx-3 my-4 fw-bold">
                <h4>健美之道從飲食開始 營養師教您吃得有品質</h4>
              </div>
              <div className="d-flex mx-3 my-3 align-items-center">
                <i className="far fa-clock fs-4"></i>
                <h6 className="event_info_time mx-3"> 14:00-15:30</h6>
              </div>
              <div className="event_info_quota_wrapper mx-3 my-3 d-flex align-items-center">
                <img
                  src="event_imgs/quota_icon.svg"
                  style={{ width: "20px" }}
                  alt="quota"
                />
                <h6 className="event_info_quota mx-3">活動名額尚餘5位</h6>
              </div>
              <div className="event_info_coach"></div>
              <div className="event_info_coach_name">
                教練<span> Andrea</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="d-flex justify-content-center my-5">
        <div className="event_wrapper d-flex "> */}
      {/* <!-- 日曆 --> */}
      {/* <div class="d-flex justify-content-center align-items-center">
            <div className="event_time_left">
              <div className="event_time_month">10月</div>
              <div className="event_time_day">30</div>
              <div className="event_time_weekday">SAT. (六)</div>
              <div className="event_time_square"></div>
            </div>
          </div>

          <div class="event_imgInfo_card d-flex"> */}
      {/* <!-- 活動封面 --> */}
      {/* <div className="event_cover_wrapper">
              <div className="event_cover">
                <img src="../event_imgs/w644.jpg" alt=""></img>
              </div>
            </div> */}
      {/* <!-- 活動資訊 --> */}
      {/* <div className="event_info p-3">
              <div className="event_info_title mx-3 my-4 fw-bold">
                <h4>健美之道從飲食開始 營養師教您吃得有品質</h4>
              </div>
              <div className="d-flex mx-3 my-3 align-items-center">
                <i className="far fa-clock fs-4"></i>
                <h6 className="event_info_time mx-3"> 14:00-15:30</h6>
              </div>
              <div className="event_info_quota_wrapper mx-3 my-3 d-flex align-items-center">
                <img
                  src="event_imgs/quota_icon.svg"
                  style={{ width: "20px" }}
                  alt="quota"
                />
                <h6 className="event_info_quota mx-3">活動名額尚餘5位</h6>
              </div>
              <div className="event_info_coach"></div>
              <div className="event_info_coach_name">
                教練<span> Andrea</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div> */}
    </div>
  );
}

export default EventCard;
