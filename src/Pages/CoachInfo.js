import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoachLeftBar from "../components/CoachLeftBar";


function CoachInfo() {
  return (
    <>
      <Navbar />
      <div className="member-container d-flex">
        <CoachLeftBar />
        <div
          className="member-container"
          style={{ height: "85vh", position: "relative" }}
        >
          <button
            style={{
              position: "absolute",
              right: "300px",
              top: "150px",
              padding: "5px 30px",
              border: "0px",
              backgroundColor: "#E4B96F",
            }}
          >
            <i class="fas fa-edit"></i>編輯
          </button>
          <div className="coach-content d-flex">
            <div className="coach-content__pic">
              <img src="/image/coach-content-pic.png" alt="" />
            </div>

            <div className="coach-content__info">
              <div className="coach-content__info__data d-flex justify-content-between">
                <div className="coach-content__info__data__title">姓名</div>
                <div className="coach-content__info__data__data">
                  黃禮志(Yeji)
                </div>
              </div>
              <div className="coach-content__info__data d-flex justify-content-between">
                <div className="coach-content__info__data__title">資歷</div>
                <div className="coach-content__info__data__data">6年</div>
              </div>
              <div className="coach-content__info__data d-flex justify-content-between">
                <div className="coach-content__info__data__title">擅長領域</div>
                <div className="coach-content__info__data__data">
                  <p>手部訓練</p>
                  <p>腿部訓練</p>
                  <p>背部訓練</p>
                </div>
              </div>
              <div
                className="coach-content__info__data d-flex justify-content-between"
                style={{ width: "70%" }}
              >
                <div
                  className="coach-content__info__data__title"
                  style={{ paddingLeft: "70px" }}
                >
                  自我簡介
                </div>
                <div
                  className="coach-content__info__data__data"
                  style={{ width: "200px" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  eligendi aperiam nobis sed facere laborum temporibus error
                  velit. Magnam, velit autem? Blanditiis omnis ad nisi quia
                  quibusdam cupiditate voluptatem deleniti?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoachInfo;
