import React from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MemberInfo() {
  return (
    <>
      <Navbar />
      <div className="member-container d-flex">
        <MemberLeftBar />
        <div className="member-container d-flex justify-content-center">
          <div className="member-container__content">
            <div className="member-container__content__title">個人資料</div>
            <div className="member-main-info d-flex">
              <div className="member-main-info--l w-50">
                <div className="text-center mt-3">
                  <img src="/image/member.png" alt="" />
                </div>
                <div className="w-75 m-auto member-main-info--l__ct">
                  <p>個人資訊</p>
                  <label for="">姓氏</label>
                  <br />
                  <input type="text" />
                  <br />
                  <label for="">名字</label>
                  <br />
                  <input type="text" />
                  <br />
                  <label for="">生日</label>
                  <br />
                  <input type="text" />
                </div>
              </div>
              <div className="w-50 member-main-info--r">
                <div className="w-75 m-auto member-main-info--l__ct">
                  <p>聯絡方式</p>
                  <label for="">電話(室內)</label>
                  <br />
                  <input type="text" />
                  <br />
                  <label for="">電話(手機)</label>
                  <br />
                  <input type="text" />
                  <br />
                  <label for="">電子信箱</label>
                  <br />
                  <input type="text" />
                  <br />
                  <label for="">地址</label>
                  <br />
                  <select name="" id="">
                    <option value="">桃園市</option>
                    <option value="">台北市</option>
                  </select>
                  <select
                    name=""
                    id=""
                    style={{
                      marginLeft: "20px",
                      marginBottom: "15px",
                    }}
                  >
                    <option value="">好玩區</option>
                    <option value="">好吃區</option>
                  </select>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="member-code h-30 w-100 mt-5">
              <div className="member-code__ct d-flex justify-content-around m-auto">
                <div>
                  <p>會員狀態:</p>
                  <p>禮物卡兌換:</p>
                </div>
                <div>
                  <p>一般會員</p>
                  <input type="text" />
                </div>
                <div>
                  <div>
                    <button className="member-upgrade-btn">升級會員</button>
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <button className="member-upgrade-btn">兌換</button>
                  </div>
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

export default MemberInfo;
