import React, { useState } from 'react'
import CoachLeftBar from '../components/CoachLeftBar'
import Swal from "sweetalert2"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
function CoachEvent() {

    const datas = [
        {id: 1, title: "臨時活動名稱1", datetime: "2021/11/04 12:00", location: "桃園市中壢區中大路300號"},
        {id: 2, title: "臨時活動名稱2", datetime: "2021/11/04 12:00", location: "桃園市中壢區中大路300號"},
        {id: 3, title: "臨時活動名稱3", datetime: "2021/11/04 12:00", location: "桃園市中壢區中大路300號"},
        {id: 4, title: "臨時活動名稱4", datetime: "2021/11/04 12:00", location: "桃園市中壢區中大路300號"},
        {id: 5, title: "臨時活動名稱5", datetime: "2021/11/04 12:00", location: "桃園市中壢區中大路300號"},
        {id: 6, title: "臨時活動名稱6", datetime: "2021/11/04 12:00", location: "桃園市中壢區中大路300號"},
    ]

    const [memberEventData, setMemberEventData] = useState(datas)
    
    const handleDelete = (e) => {
        let id = e.target.id;
        Swal.fire({
            title: "即將要刪除",
            text: "確定要將此活動從清單中移除嗎",
            showDenyButton: true,
            confirmButtonText: "確定",
            denyButtonText: "取消"
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire("成功刪除");
                setMemberEventData(memberEventData.filter((data) => data.id != id))
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className="member-container d-flex">
                <CoachLeftBar />
                <div className="member-activity-content">
                    {memberEventData.map((data, index) => {
                        return (
                            <>
                                <div className="member-activity-content__card">
                                    <div className="member-activity-content__card__img"></div>
                                    <div className="member-activity-content__card__info d-flex">
                                        <div className="member-activity-content__card__info__title">
                                            <p>活動名稱:</p>
                                            <p>活動時間:</p>
                                            <p>地點:</p>
                                            <p>已報名人數</p>
                                            <p>尚餘名額</p>
                                        </div>
                                        <div className="member-activity-content__card__info__data">
                                            <p>{data.title}</p>
                                            <p style={{marginTop: "20px"}}>{data.datetime}</p>
                                            <p style={{marginTop: "20px"}}>{data.location}</p>
                                            <p>10人</p>
                                            <p>10人</p>
                                        </div>
                                        
                                    </div>
                                    <div className="member-activity-content__card__control">
                                        <button><i className="far fa-eye"></i>編輯活動</button>
                                        <button id={data.id} onClick={handleDelete}><i className="far fa-window-close"></i>刪除活動</button>                                        
                                    </div>
                                </div>
                                <hr/>
                            </>
                        );
                    })}              
                </div>
            </div>
            <Footer />
        </>    
    )
}

export default CoachEvent