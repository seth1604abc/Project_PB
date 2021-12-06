import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function MemberLeftBar() {
    const [photo, setPhoto] = useState("");

    useEffect(async () => {
        let result = await axios.get("http://localhost:3001/member/memberphoto", {withCredentials: true})
        if(result.data[0]){
            setPhoto(result.data[0].image);
        }        
        
        
    }, [])

    return (
        <>
            <div className="member-left-nav">
                {/* <div className="member-bread">
                    <h2>會員專區</h2>
                    <p>首頁>會員專區>個人資料</p>
                </div> */}
                <div className="member-main-info__img__ct " style={{margin: "50px 0 50px 18%", border: "0px",}}>
                    <img src={`/image/${photo}`} alt="" width="100%" height="100%" style={{objectFit:"cover"}}/>
                </div>
                <ul className="member-left__ul">
                    <li>
                        <NavLink to="/member-info" activeClassName = "member-active-link">
                            <i className="fas fa-user-edit d-flex align-items-center"></i>個人資料
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/member-order" activeClassName = "member-active-link">
                            <i className="fas fa-truck d-flex align-items-center"></i>訂單狀態
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/member-coin" activeClassName = "member-active-link">
                            <i className="fas fa-coins d-flex align-items-center"></i>購物點數
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/member-course" activeClassName = "member-active-link">
                            <i className="fas fa-bookmark d-flex align-items-center"></i>已收藏課程
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/member-event" activeClassName = "member-active-link">
                            <i className="fas fa-calendar-check d-flex align-items-center"></i>已報名活動
                        </NavLink>
                    </li>                                                     
                </ul>            
            </div>
        </>
    )
}

export default MemberLeftBar
