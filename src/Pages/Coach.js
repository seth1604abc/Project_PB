import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';
import Footer from "../components/Footer";
import axios from 'axios';
import EventOtherCard from "../components/EventSingle/EventOtherCard";
import CoachCourse from '../components/CoachCourse';

function Coach() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [len, setLen] = useState({});
    const [event, setEvent] = useState();
    const [course, setCourse] = useState([]);


    useEffect( async () => {
        let result = await axios.post("http://localhost:3001/coach", {id: id}, {withCredentials: true})        
        console.log(result)
        setData(result.data.result[0]);
        let newLen = {
            event: result.data.eLength,
            course: result.data.cLength
        }
        setLen(newLen);
        setEvent(result.data.event);
        setCourse(result.data.course)        
    }, [])
    const history = useHistory();
    const pushHome = () => {
        history.push("/");
    }
    const pushCourse = () => {
        history.push("/course");
    }
    


    if(data == null){
        return <p></p>
    }
    if(event == null){
        return <p></p>
    }

    return (
        <>
           <div className="main-nav-sub" style={{position: "relative", backgroundImage: "url(/image/Fitness.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="sub-nav">
                    <div className="main-nav__logo" onClick={pushHome}>
                        <img src="/image/pblogo.png" alt="" />
                    </div>
                    <div className="main-nav__link d-flex align-items-center">
                        <ul className="main-nav__ul d-flex align-items-center">
                            <li><Link to="/course">課程</Link></li>
                            <li><Link to="/product">商城</Link></li>
                            <li><Link to="/subscribe">訂閱</Link></li>
                            <li><Link to="/event">活動</Link></li>                            
                            <li style={{justifyContent: "end"}}><Link to="/"><i style={{}} className="fas fa-shopping-cart"></i></Link></li>
                            <li><Link to="/login"><i className="fas fa-user"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="coach-person-nav__title">
                    <p style={{fontSize: "40px", letterSpacing: "10px"}}>想擁有完美的身材以及</p>
                    <p style={{fontSize: "40px", letterSpacing: "10px"}}>健康的身體嗎?</p>
                    <p>現在就跟我一起開始行動</p>
                    <button style={{marginTop: "100px", backgroundColor: "transparent", border: "2px solid white", color: "white", padding: "10px 50px", borderRadius: "8px"}} onClick={pushCourse}>即刻前往</button>
                </div>                
            </div>

            <div className="d-flex justify-content-between" style={{ width: "60%", margin: "200px auto 0"}}>
                <div style={{backgroundColor: "black", borderRadius: "20px", overflow: "hidden"}}>
                    <img src={`/image/${data.image}`} alt="" style={{width: "400px"}}/>
                </div>
                <div style={{ width: "40%"}}>
                    <p style={{fontSize: "30px", fontWeight: "bold", marginBottom: "100px"}}>{data.last_name}</p>
                    <p>
                        私人教練能讓您事半功倍                        
                    </p>
                    <br />
                    <p>
                        用最少的時間達成您心目中的體態                        
                    </p>
                    <br />
                    <p>
                        讓每次的努力不會白費                        
                    </p>
                    <br />
                    <p>
                        我們擁有全台最大的教練培訓團隊                        
                    </p>
                    <br />
                    <p>
                        透過不停的突破訓練、進修課程、考取證照，成為一位專業的私人教練
                    </p>
                    <br />
                    <p>
                        聯絡信箱: {data.email}
                    </p>
                </div>
            </div>

            <div className="coach-person-achieve">
                <div className="row">
                    <div className="col text-center">
                        <i className="far fa-calendar-alt"></i>
                        <p>資歷長達 5 年</p>
                    </div>
                    <div className="col text-center">
                        <i className="fas fa-book"></i>
                        <p>發佈過 {len.course} 堂課程</p>
                    </div>
                    <div className="col text-center">
                        <i className="fas fa-calendar-check"></i>
                        <p>舉辦過 {len.event} 次活動</p>
                    </div>
                </div>
            </div>

            <div className="coach-hot">
                <div className="coach-hot__title">熱門發佈課程</div>
                <div className="d-flex justify-content-between mx-auto" style={{width: "70%"}}>
                    {
                        course.map((theCourse) => {
                            return (
                                <CoachCourse
                                    key={theCourse.id}
                                    theCourse={theCourse}
                                    course={course}
                                    // setHeartCourse={setHeartCourse}
                                    // heartCourse={heartCourse}
                                    // setCourseCardMask={setCourseCardMask}
                                />
                            )
                        })
                    }
                    
                </div>
            </div>

            <div className="coach-hot" style={{marginBottom: "100px"}}>
                <div className="coach-hot__title">熱門活動</div>
                <div className="row m-auto" style={{width: "70%"}}>
                    <EventOtherCard datas={event[0]} />
                    <EventOtherCard datas={event[1]} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Coach