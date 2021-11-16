import React from "react";


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   }

function EventContent() {

 
  return (
    <div className="d-flex justify-content-center">
      <div className="singleEvent_container">
        <div className="singleEvent_cover">
          <img src="./event_imgs/event_cover_1.jpg" alt="cover" />
        </div>
        <div className="singleEvent_title h2 mx-5 mt-5">
          科學增肌減脂-Dr.史考特來解惑
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center mt-4">
            <div className="singleEvent_coach ms-5"></div>
            <div className="h6 ms-3">Fiona</div>
          </div>
      
            <button
              className="
              singleEvent_shareBtn
              d-flex
              align-items-center
              justify-content-center
              mt-3
            "
            >
              <span className="d-flex">
                <i className="fas fa-share-alt me-2"></i>
                <span className="fs-6"> 分享活動</span>
              </span>
            </button>
          
        </div>
        {/* <!-- 活動內容 & 報名區塊 --> */}
        <div className="d-flex">
          <div className="singleEvent_eventContent_wrapper">
            <div className="my-3">
              <span className="h5">【 活動介紹 】</span>
              <p className="my-3">
                增肌健身變壯，最新研究怎麼說？
                <br />
                -為何喝符水能治頭痛？運動科學好重要
                <br />
                -健身效果好不好，竟和基因有關！？
                <br />
                -健身要看到效果，為何不能不談科學？
                <br />
                -挑對時間運動，增肌效果大不同
                <br />
                -一公斤肌肉能燃燒多少熱量？
                <br />
                -不必辛苦鍛鍊，靠這招也能變壯！？
                <br />
                -擁有六塊肌，等於擁有健康？
                <br />
                -活得更久更健康，運動是萬靈丹
                <br />
                -總是肥在屁股和大腿！拆解女生梨形身材原因
                <br />
                -訓練拚命到筋疲力盡，比較有效嗎？
                <br />
                科學改善了人類生活的所有面向，飲食運動也不該例外。
                <br />
                此次特地邀請到長庚醫院復健科主治醫師史考特(王思恆) <br />
                與本站課程會員分享科學增肌減脂的最新觀念
                <br />
                健身不只是強健身體，健身更要強健大腦。
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
                  <span className="col-8">2021/11/13 14:30-16:00</span>
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
                  <div className="col-8">2021/11/12 24:00 止</div>
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
                  <div className="col-8">10人</div>
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
                    <div className="col-8">10人</div>
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
                    MRT文創古亭6號空間 <br />
                    台北市大安區羅斯福路二段33號12樓
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center my-5">
              <button className="singleEvent_detail_signUpBtn">立即報名</button>
            </div>
          </div>
        </div>
        <h5 class="text-start my-5 mx-5">活動地圖</h5>
        <div class="singleEvent_map_wrapper">
          <div
            class="singleEvent_img"
            style={{ backgroundImage: "url(/event_imgs/google_map_1.jpg)" }}
          >
          <div style={{ height: '100vh', width: '100%' }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: AIzaSyD8fY5DEYdmYwYY2bhrq0PC73DkY5tBK1E}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact> */}
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContent;