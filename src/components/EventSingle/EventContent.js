import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import Swal from 'sweetalert2';
import copy from "copy-to-clipboard";  

function EventContent() {
  const [data, setData] = useState({});
  const [shareInfo, setSahreInfo] = useState("");
  let { id } = useParams();
  const history = useHistory();
  useEffect(async () => {    
    let result = await axios.post("http://localhost:3001/event/single", {id: id});
    setData(result.data[0]);
    setSahreInfo(`快來跟我一起參加這個好玩的活動，活動連結 => http://localhost:3000/event-single/${id}`)
  }, [])

  const location = {
    address: data.location,
    lat: data.lat,
    lng: data.lng,
  }

  const LocationPin = () => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" style={{ fontSize: '36px', color: "red" }}/>      
    </div>
  )
 //api key=AIzaSyBVaDJmfSr5DZ5sWp4YhRClSK7lfOOp7Nc
  const apply = () => {
    Swal.fire({
      text: "你確定要報名此項活動?",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消"
    }).then(async (res) => {
      if(res.isConfirmed){
        let result = await axios.post("http://localhost:3001/event/apply-event", {id: id}, {withCredentials: true});
        if(result.data == "loginerror"){
          history.push("/login");
        } else {
          Swal.fire(result.data);
        }
      }
    })
  }
  
  const share = () => {
    copy(shareInfo);
    Swal.fire("已複製連結");
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="singleEvent_container">
        <div className="singleEvent_cover">
          <img src={`/event_imgs/${data.image}`} alt="cover" />
        </div>
        <div className="singleEvent_title h2 mx-5 mt-5">
          {data.title}
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center mt-4">
            <div className="singleEvent_coach ms-5">
              <img src={`/image/${data.coachimage}`} alt="" />
            </div>
            <div className="h6 ms-3">{data.coach}</div>
          </div>
      
            <button
              className="
              singleEvent_shareBtn
              d-flex
              align-items-center
              justify-content-center
              mt-3
            "
              onClick={share}
            >
              <span className="d-flex">
                <i className="fas fa-share-alt me-2"></i>
                <span className="fs-6" > 分享活動</span>
              </span>
            </button>
            <input type="hidden" value={shareInfo}/>
          
        </div>
        {/* <!-- 活動內容 & 報名區塊 --> */}
        <div className="d-flex">
          <div className="singleEvent_eventContent_wrapper">
            <div className="my-3">
              <span className="h5">【 活動介紹 】</span>
              <p className="my-3">
                {data.content}
              </p>
            </div>
          </div>
          <div className="singleEvent_detail container">
            <div className="ms-5 me-3 my-5">
              <div>
                <div className="row d-flex align-items-center">
                  <i className="far fa-clock col-1"></i>
                  <span className="col-8 singleEvent_detail_title">
                    活動時間
                  </span>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <span className="col-8">{data.datetime} 到 {data.endtime}</span>
                </div>
              </div>
              <div className="mt-2">
                <div className="row">
                  <i className="fas fa-hourglass-half col-1"></i>
                  <span className="col-8 singleEvent_detail_title">
                    報名截止日期
                  </span>
                </div>
                <div className="row mt-2">
                  <div className="col-1"></div>
                  <div className="col-8">{data.deadline} 止</div>
                </div>
              </div>
              <div>
                <div className="row mt-2">
                  <i className="fas fa-user-check col-1"></i>
                  <span className="col-8 singleEvent_detail_title">
                    已報名人數
                  </span>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-8">{data.limit}人</div>
                </div>
              </div>
              <div>
                <div className="row mt-2">
                  <i className="far fa-address-book col-1"></i>
                  <span className="col-8 singleEvent_detail_title">
                    目前剩餘名額
                  </span>
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-8">{data.quota}人</div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="row">
                  <i className="fas fa-map-marker-alt col-1"></i>
                  <span className="col-8 singleEvent_detail_title">
                    活動地點
                  </span>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <span className="col-8">
                    {data.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center my-5">
              <button className="singleEvent_detail_signUpBtn" onClick={apply}>立即報名</button>
            </div>
          </div>
        </div>
        <h5 class="text-start my-5 mx-5">活動地圖</h5>
        <div class="singleEvent_map_wrapper">
          <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          center={{lat: location.lat, lng: location.lng}}
          zoom={18}          
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default EventContent;