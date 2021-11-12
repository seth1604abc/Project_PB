import React from 'react'
import { NavLink } from 'react-router-dom';

function CoachLeftBar() {
    return (
        <>
            <div className="member-left-nav">                
                <div style={{paddingLeft: "50px", margin: "50px 0"}}>
                    <img src="/image/member.png" alt="" style={{width: "200px", height: "200px"}} />
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
