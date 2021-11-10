import React from "react";

function EventOtherCard(){

    return(
        <>
         <div className="text-center">
      <h3 className="my-5">瀏覽其它活動</h3>
    </div>
    <div className="container my-5" >
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="singleEvent_card" >
            <img src="../event_imgs/w644.jpg" className="card-img-top" alt="課程" />
            <div className="card-body">
              <h5 className="mx-2">
                健美之道從飲食開始 <br />
                營養師教您吃得有品質
              </h5>
              <div className="d-flex mx-3 my-3 align-items-center">
                <i className="far fa-clock"></i>
                <h6 className="singleEvent_card_time mx-3">時間: 14:00-15:30</h6>
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
                <img src="./event_imgs/quota_icon.svg" width="25" alt="quota"/>
                <h6 className="singleEvent_info_quota mx-3">剩餘名額: 5人</h6>
              </div>
              <div className="singleEvent_card_coach m-3"></div>
              <div className="singleEvent_card_coach_name">
                教練<span> Andrea</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className=" singleEvent_card">
            <img src="../event_imgs/w644.jpg" className="card-img-top" alt="課程" />
            <div className="card-body">
              <h5 className="mx-2">
                健美之道從飲食開始 <br />
                營養師教您吃得有品質
              </h5>
              <div className="d-flex mx-3 my-3 align-items-center">
                <i className="far fa-clock"></i>
                <h6 className="singleEvent_card_time mx-3">時間: 14:00-15:30</h6>
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
                <img src="../event_imgs/quota_icon.svg" width="25" alt="quota"/>
                <h6 className="singleEvent_info_quota mx-3">剩餘名額: 5人</h6>
              </div>
              <div className="singleEvent_card_coach m-3"></div>
              <div className="singleEvent_card_coach_name">
                教練<span> Andrea</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="singleEvent_card">
            <img src="../event_imgs/w644.jpg" className="card-img-top" alt="課程" />
            <div className="card-body">
              <h5 className="mx-2">
                健美之道從飲食開始 <br />
                營養師教您吃得有品質
              </h5>
              <div className="d-flex mx-3 my-3 align-items-center">
                <i className="far fa-clock"></i>
                <h6 className="singleEvent_card_time mx-3">時間: 14:00-15:30</h6>
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
                <img src="../event_imgs/quota_icon.svg" width="25" alt="quota"/>
                <h6 className="singleEvent_info_quota mx-3">剩餘名額: 5人</h6>
              </div>
              <div className="singleEvent_card_coach m-3"></div>
              <div className="singleEvent_card_coach_name">
                教練<span> Andrea</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>

    )
}
export default EventOtherCard;