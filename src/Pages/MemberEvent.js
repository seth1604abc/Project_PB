import React, { useState, useEffect } from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function MemberEvent() {
  const [memberEventData, setMemberEventData] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    let result = await axios.get("http://localhost:3001/member/event", {withCredentials: true});
    if(result.data == "loginerror"){
      history.push("/login");
    } else {
      setMemberEventData(result.data);
    }
    
  }, [])
  
  

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
        let res = await axios.post("http://localhost:3001/member/event-delete", {id: id}, {withCredentials: true});
        history.go(0);              
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="member-container d-flex">
        <MemberLeftBar />
        <div className="member-activity-content">
          {memberEventData.map((data, index) => {
            return (
              <>
                <div className="member-activity-content__card">
                  <div className="member-activity-content__card__img">
                    <img src={`/event_imgs/${data.image}`} alt="" />
                  </div>
                  <div className="member-activity-content__card__info d-flex">
                    <div className="member-activity-content__card__info__title">
                      <p>活動名稱:</p>
                      <p style={{ marginTop: "20px" }}>活動時間:</p>
                      <p style={{ marginTop: "20px" }}>地點:</p>
                    </div>
                    <div className="member-activity-content__card__info__data">
                      <p>{data.title}</p>
                      <p style={{ marginTop: "25px" }}>{data.datetime}</p>
                      <p style={{ marginTop: "25px" }}>{data.location}</p>
                    </div>
                  </div>
                  <div className="member-activity-content__card__control">
                    <button>
                      <i className="far fa-eye"></i>檢視活動
                    </button>
                    <button id={data.id} onClick={handleDelete}>
                      <i className="far fa-window-close"></i>取消報名
                    </button>
                    <button>
                      <i className="far fa-calendar-alt"></i>加到行事曆
                    </button>
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

export default MemberEvent;
