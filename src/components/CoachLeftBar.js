import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function CoachLeftBar() {
    const [image, setImage] = useState("");
    useEffect(async () => {
        let result = await axios.get("http://localhost:3001/coach/image", {withCredentials: true});
        setImage(result.data[0].image)
        
    })


    return (
        <>
            <div className="member-left-nav">                
                <div style={{paddingLeft: "50px", margin: "50px 0"}}>
                    <img src={`/image/${image}`} alt="" style={{width: "200px", height: "200px", borderRadius: "50%",objectFit:"contain"}} />
                </div>
                <ul className="member-left__ul">
                    <li>
                        <NavLink to="/coach-info" activeClassName = "member-active-link">
                            <i className="fas fa-user-edit d-flex align-items-center"></i>個人資料
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/coach-course" activeClassName = "member-active-link">
                            <i className="fas fa-book d-flex align-items-center"></i>已發佈課程
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/coach-event" activeClassName = "member-active-link">
                            <i className="fas fa-calendar-check d-flex align-items-center"></i>已發佈活動
                        </NavLink>
                    </li>                                                                         
                </ul>            
            </div>
        </>
    )
}

export default CoachLeftBar
