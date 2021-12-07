import React from "react";
import { useEffect, useState } from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import $ from "jquery";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function MemberCourse() {
  const [memberCourseData, setMemberCourseData] = useState([]);
  const history = useHistory();
  
  useEffect(async () => {
    let result = await axios.get("http://localhost:3001/member/course", {withCredentials: true})
    console.log(result.data);
    if(result.data == "loginerror"){
      history.push("/login");
    } else {
      setMemberCourseData(result.data);
      $("i").on("click", function () {
        let hideBar = $(this).parent().next();
        hideBar.toggle();
      });
    }
    

  }, []);
  
  
  

  const handleDelete = (e) => {
    let id = e.target.id;
    Swal.fire({
      title: "即將要刪除",
      text: "確定要將此課程從清單中移除嗎?",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消",
    }).then( async (result) => {
      if (result.isConfirmed) {
        let result = await axios.post("http://localhost:3001/member/course-delete", {id: id}, {withCredentials: true})
        Swal.fire("成功刪除", "success").then((res) => {
          if(res.isConfirmed){
            history.go(0);
          }
          
        })       
      }
      
    });
  };

  return (
    <>
      <Navbar />
      <div className="member-container d-flex">
        <MemberLeftBar />
        <div className="member-course-content">
          {
            memberCourseData.length > 0 ? (
              memberCourseData.map((data, index) => {
                return (
                  <>
                    <div className="member-course-list d-flex">
                      <div className="member-course-list__img">
                        <div className="member-course-list__img__box">
                          <img src={`/images/${data.filename}.png`} alt="" style={{width: "100%", height: "100%", overflow: "cover"}}/>
                        </div>
                      </div>
                      <div className="member-course-list__info">
                        <span className="member-course-list__info__title">
                          影片名稱:
                        </span>
                        <span className="member-course-list__info__data">
                          <a href={`/course-single/${data.id}`}>{data.title}</a>
                        </span>
                        <br />
                        <span className="member-course-list__info__title">
                          影片長度:
                        </span>
                        <span className="member-course-list__info__data">
                          {data.duration}
                        </span>
                        <br />
                        <span className="member-course-list__info__title">
                          部位:
                        </span>
                        <span className="member-course-list__info__data">
                          {data.name}
                        </span>
                        <br />
                        <span className="member-course-list__info__title">
                          影片概述:
                        </span>
                        <span className="member-course-list__info__data">
                          {data.detail}
                        </span>
                      </div>
                      <div className="member-course-list__btn">
                        <i
                          className="fas fa-ellipsis-h"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </div>
                      <div className="member-course-hidebar">
                        <input type="hidden" value={data.id} />
                        <p id={data.id} onClick={handleDelete}>
                          移除清單
                        </p>
                        <hr />
                        <p>加入待播清單</p>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })              
            ) : (               
                <p style={{fontSize: "30px", textAlign: "center"}}>還沒有任何收藏的課程!</p>                            
            )           
          }
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemberCourse;
