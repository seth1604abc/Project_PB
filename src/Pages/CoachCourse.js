import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoachLeftBar from "../components/CoachLeftBar";
import $ from 'jquery'
import Swal from "sweetalert2";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function CoachCourse() {
    const [memberCourseData, setMemberCourseData] = useState([]);   
    useEffect(async () => {
        let result = await axios.get("http://localhost:3001/coach/course", { withCredentials: true });              
        setMemberCourseData(result.data);        
    }, [])

    const show = (id) => {
        $(`#${id}`).toggle();
    }
    const history = useHistory();
    const newCourse = async () => {
        history.push("/coach-course-add");
    }

    const deleteCourse = (e) => {
        Swal.fire({
            title: "確定要刪除此課程?",
            text: "所有課程相關都會被刪除",
            showDenyButton: true,
            confirmButtonText: "確定",
            denyButtonText: "取消"
        }).then(async (res) => {
            if(res.isConfirmed){
                let id = e.target.getAttribute("data-delete");        
                let result = await axios.post("http://localhost:3001/coach/delete-course", {id: id}, { withCredentials: true });
                Swal.fire(result.data).then((ok) => {
                    if(ok.isConfirmed){
                        history.go(0);
                    }
                })
            }
        })
        
        
    }

    return (
        <>
            <Navbar />
            <div className="member-container d-flex">
                <CoachLeftBar />
                <div className="member-course-content">
                    <button onClick={newCourse} style={{border: "0", padding: "5px 20px", backgroundColor: "#09203f", color: "#ffecd2"}}>新增課程</button>
                    <div className="member-container" style={{ backgroundColor: "white" }}>
                        {memberCourseData.map((data, index) => {
                            return (
                                <>
                                    <div className="member-course-list d-flex">
                                        <div className="member-course-list__img">
                                            <div className="member-course-list__img__box">
                                                <video src={`/videos/${data.filename}.mp4`} controls>
                                                    
                                                </video>
                                            </div>
                                        </div>
                                        <div className="member-course-list__info">
                                            <span className="member-course-list__info__title">影片名稱:</span>
                                            <Link to={`/course-single/${data.id}`} className="member-course-list__info__data" style={{ textDecoration: "none" }}>{data.title}</Link>
                                            <br />
                                            <span className="member-course-list__info__title">影片長度:</span>
                                            <span className="member-course-list__info__data">{data.duration} 分鐘</span>
                                            <br />
                                            <span className="member-course-list__info__title">部位:</span>
                                            <span className="member-course-list__info__data">{data.name}</span>
                                            <br />
                                            <span className="member-course-list__info__title">影片概述:</span>
                                            <span className="member-course-list__info__data">{data.detail}</span>
                                        </div>
                                        <div className="member-course-list__btn" onClick={() => {
                                            show(data.id)
                                        }}>
                                            <i className="fas fa-ellipsis-h" style={{ fontSize: "20px" }}></i>
                                        </div>

                                        <div className="member-course-hidebar" id={data.id}>
                                            <input type="hidden" value={data.id} />                                           
                                            
                                            <p data-delete={data.id} onClick={deleteCourse}>刪除課程</p>
                                        </div>



                                    </div>
                                    <hr />
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