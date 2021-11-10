import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoachLeftBar from "../components/CoachLeftBar";
import $ from 'jquery'
import Swal from "sweetalert2"

function CoachCourse() {
    useEffect(() => {        
        $("i").on("click", function(){            
            let hideBar = $(this).parent().next();        
            hideBar.toggle();
        })
    }, [])    

    const datas = [
        {id: 1, title: "臨時影片名稱1", duration: "05:30", body_part: "手", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure alias culpa repellat animi. Corrupti minima omnis quae quo quos debitis natus, id, sint error inventore assumenda tempore eveniet fuga eligendi."},
        {id: 2, title: "臨時影片名稱2", duration: "05:30", body_part: "手", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure alias culpa repellat animi. Corrupti minima omnis quae quo quos debitis natus, id, sint error inventore assumenda tempore eveniet fuga eligendi."},
        {id: 3, title: "臨時影片名稱3", duration: "05:30", body_part: "手", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure alias culpa repellat animi. Corrupti minima omnis quae quo quos debitis natus, id, sint error inventore assumenda tempore eveniet fuga eligendi."},
        {id: 4, title: "臨時影片名稱4", duration: "05:30", body_part: "手", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure alias culpa repellat animi. Corrupti minima omnis quae quo quos debitis natus, id, sint error inventore assumenda tempore eveniet fuga eligendi."},
        {id: 5, title: "臨時影片名稱5", duration: "05:30", body_part: "手", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure alias culpa repellat animi. Corrupti minima omnis quae quo quos debitis natus, id, sint error inventore assumenda tempore eveniet fuga eligendi."},
    ]
    const [memberCourseData, setMemberCourseData] = useState(datas)
    
    const handleDelete = (e) => {
        let id = e.target.id;
        Swal.fire({
            title: "即將要刪除",
            text: "確定要將此課程從清單中移除嗎?",
            showDenyButton: true,
            confirmButtonText: "確定",
            denyButtonText: "取消"
        }).then((result) => {
            if(result.isConfirmed) {
                Swal.fire("成功刪除", "success")
                setMemberCourseData(memberCourseData.filter((user) => user.id != id));
            }
        })               
    }

    return (
        <>
            <Navbar />
            <div className="member-container d-flex">
                <CoachLeftBar />
                <div className="member-course-content">
                    <div className="member-container" style={{backgroundColor: "white"}}>
                        {memberCourseData.map((data, index) => {
                                return (
                                    <>
                                        <div className="member-course-list d-flex">
                                            <div className="member-course-list__img">
                                                <div className="member-course-list__img__box"></div>
                                            </div>
                                            <div className="member-course-list__info">
                                                <span className="member-course-list__info__title">影片名稱:</span>
                                                <span className="member-course-list__info__data">{data.title}</span>
                                                <br/>
                                                <span className="member-course-list__info__title">影片長度:</span>
                                                <span className="member-course-list__info__data">{data.duration}</span>
                                                <br/>
                                                <span className="member-course-list__info__title">部位:</span>
                                                <span className="member-course-list__info__data">{data.body_part}</span>
                                                <br/>
                                                <span className="member-course-list__info__title">影片概述:</span>
                                                <span className="member-course-list__info__data">{data.detail}</span>                        
                                            </div>
                                            <div className="member-course-list__btn">
                                                <i className="fas fa-ellipsis-h" style={{fontSize: "20px"}}></i>
                                            </div>
                                            <div className="member-course-hidebar">
                                                <input type="hidden" value={data.id}/>
                                                <p id={data.id} onClick={handleDelete}>移除清單</p>
                                                <hr />
                                                <p>加入待播清單</p>
                                            </div>
                                        </div>
                                        <hr/>
                                    </>
                                )
                            })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CoachCourse