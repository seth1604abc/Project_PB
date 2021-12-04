import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

function EventOtherCard({datas}) {  
  if(datas === undefined){return<></>}  

  return (
    <>
      <a className="col d-flex justify-content-center" style={{textDecoration: "none", color: "black"}} href={`/event-single/${datas.id}`}>
        <div className="singleEvent_card" >
          <img src={`/event_imgs/${datas.image}`} className="card-img-top" alt="課程" style={{width: "100%", height: "200px"}}/>
          <div className="card-body">
            <h5 className="mx-2">
              {datas.title}
            </h5>
            <div className="d-flex mx-3 my-3 align-items-center">
              <i className="far fa-clock"></i>
              <h6 className="singleEvent_card_time mx-3">時間: {datas.datetime}</h6>
            </div>
            <div
              className="
                          singleEvent_card_quota_wrapper
                          mx-3
                          my-3
                          d-flex
                          align-items-center
                        "
            >
              <img src="/event_imgs/quota_icon.svg" width="25" alt="quota" />
              <h6 className="singleEvent_info_quota mx-3">剩餘名額: {datas.quota}人</h6>
            </div>
            <div className="singleEvent_card_coach">
              <img src={`/image/${datas.coachimage}`} alt="" style={{width: "30px", height: "30px"}}/>
            </div>
            <div className="singleEvent_card_coach_name">
              教練<span> {datas.coach}</span>
            </div>
          </div>
        </div>
      </a>

    </>

  )
}
export default EventOtherCard;