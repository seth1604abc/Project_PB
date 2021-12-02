import React, { useState, useEffect } from "react";
import CoachLeftBar from "../components/CoachLeftBar";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function CoachEvent() { 
  const [memberEventData, setMemberEventData] = useState([]);
  useEffect(async () => {
    let result = await axios.get("http://localhost:3001/coach/event", {withCredentials: true});
    setMemberEventData(result.data);
  })

  const handleDelete = (e) => {
    let id = e.target.id;
    Swal.fire({
      title: "即將要刪除",
      text: "確定要將此活動從清單中移除嗎",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消",
    }).then(async (result) => {
      if (result.isConfirmed) {        
        let result = await axios.post("http://localhost:3001/event/event-delete", {id: id}, {withCredentials: true});
        Swal.fire(result.data).then(() => {
          history.go(0);
        })
      }
    });
  };
  const history = useHistory()
  const newAdd = () => {
    history.push("/coach-event-add");
  }

  const goEdit = (id) => {
    history.push(`/coach-event-edit/${id}`);
  }

  return (
    <>
      <Navbar />
      <div className="member-container d-flex">
        <CoachLeftBar />
        <div className="coach-activity-content">
        <button className="coach-activity-addBtn" onClick={newAdd}>新增活動</button>
          {memberEventData.map((data, index) => {
            return (
              <>
                <div className="coach-activity-content__card">
                  <div className="container">
                    <div className="row px-5">
                      <div className="col-4 d-flex align-items-center">
                        <div className="coach-activity-content__card__img">
                          <img src={`/event_imgs/${data.image}`} alt="" />
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="coach-activity-info_wrapper">
                          <div className="cotainer lh-lg p-0">
                            <div className="row">
                              
                              <div className="col coach-activity-content_info__eventName">
                                <div>{data.title}</div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-3">
                                <p className=" coach-activity-content_info__title">
                                時間
                                </p>
                              </div>
                              <div className="col-9">
                                <p>{data.datetime}</p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-3">
                                <p className=" coach-activity-content_info__title">
                                地點
                                </p>
                              </div>
                              <div className="col-9">
                                <p>{data.location}</p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-3">
                                <p className=" coach-activity-content_info__title">
                                  已報名
                                </p>
                              </div>
                              <div className="col-9">
                                <p>{data.limit}人</p>
                              </div>
                            </div>
                          </div>

                          <div className="row ">
                            <div className="col-3 ">
                              <span className=" coach-activity-content_info__title">
                                尚餘名額
                              </span>
                            </div>
                            <div className="col-9">
                              <p>{data.quota}人</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 coach-activity-content__card__control_wrapper d-flex">
                        <div className="coach-activity-content__card__control">
                          <button onClick={() => {
                            goEdit(data.id);
                          }}>
                            <i className="far fa-eye"></i>編輯活動
                          </button>
                          <button id={data.id} onClick={handleDelete}>
                            <i className="far fa-window-close"></i>刪除活動
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoachEvent;
