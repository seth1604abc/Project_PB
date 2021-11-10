import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";


function Coach() {
    return (
        <>
           <div className="main-nav-sub" style={{position: "relative", background: "center no-repeat url(image/coach-person-1.png)"}}>
                <div className="sub-nav">
                    <div className="main-nav__logo">
                        <img src="/image/pblogo.png" alt="" />
                    </div>
                    <div className="main-nav__link d-flex align-items-center">
                        <ul className="main-nav__ul d-flex align-items-center">
                            <li><Link to="/member-info">課程</Link></li>
                            <li><Link to="/">商城</Link></li>
                            <li><Link to="/subscribe">訂閱</Link></li>
                            <li><Link to="/">活動</Link></li>
                            <li style={{marginRight: "50px"}}><Link to="/">文章</Link></li>
                            <li style={{justifyContent: "end"}}><Link to="/"><i style={{}} className="fas fa-shopping-cart"></i></Link></li>
                            <li><Link to="/login"><i className="fas fa-user"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="coach-person-nav__title">
                    <p style={{fontSize: "40px", letterSpacing: "10px"}}>想擁有完美的身材以及</p>
                    <p style={{fontSize: "40px", letterSpacing: "10px"}}>健康的身體嗎?</p>
                    <p>現在就跟我一起開始行動</p>
                    <button style={{marginTop: "100px", backgroundColor: "transparent", border: "2px solid white", color: "white", padding: "10px 50px", borderRadius: "8px"}}>即刻前往</button>
                </div>                
            </div>

            <div className="d-flex justify-content-between" style={{ width: "60%", margin: "200px auto 0"}}>
                <div>
                    <img src="/image/coach-person-2.png" alt="" style={{width: "400px"}} />
                </div>
                <div style={{ width: "40%"}}>
                    <p style={{fontSize: "30px", fontWeight: "bold", marginBottom: "100px"}}>Yes I am Mina</p>
                    <p>2013年，於JYP娛樂全球試鏡的最後一天，Mina在日本大阪
                        市梅田與母親購物時[註 3]，被JYP娛樂的星探發掘，因試鏡
                        歌唱宇多田光的《First Love》而合格通過試鏡。於2014
                        年1月2日成為JYP娛樂旗下的練習生，被譽為JYP最美練習生。
                    </p>
                    <p>2013年，於JYP娛樂全球試鏡的最後一天，Mina在日本大阪
                        市梅田與母親購物時[註 3]，被JYP娛樂的星探發掘，因試鏡
                        歌唱宇多田光的《First Love》而合格通過試鏡。於2014
                        年1月2日成為JYP娛樂旗下的練習生，被譽為JYP最美練習生。
                    </p>
                    <p>2013年，於JYP娛樂全球試鏡的最後一天，Mina在日本大阪
                        市梅田與母親購物時[註 3]，被JYP娛樂的星探發掘，因試鏡
                        歌唱宇多田光的《First Love》而合格通過試鏡。於2014
                        年1月2日成為JYP娛樂旗下的練習生，被譽為JYP最美練習生。
                    </p>
                </div>
            </div>

            <div className="coach-person-achieve">
                <div className="row">
                    <div className="col text-center">
                        <i className="far fa-calendar-alt"></i>
                        <p>資歷長達 7 年</p>
                    </div>
                    <div className="col text-center">
                        <i className="fas fa-book"></i>
                        <p>發佈過 5 堂課程</p>
                    </div>
                    <div className="col text-center">
                        <i className="fas fa-calendar-check"></i>
                        <p>舉辦過 2 次活動</p>
                    </div>
                </div>
            </div>

            <div className="coach-hot">
                <div className="coach-hot__title">熱門發佈課程</div>
                <div className="row m-auto" style={{width: "70%"}}>
                    <div className="col text-center">
                        <img src="https://fakeimg.pl/250x300/"/>
                    </div>
                    <div className="col text-center">
                        <img src="https://fakeimg.pl/250x300/"/>
                    </div>
                    <div className="col text-center">
                        <img src="https://fakeimg.pl/250x300/"/>
                    </div>
                </div>
            </div>

            <div className="coach-hot" style={{marginBottom: "100px"}}>
                <div className="coach-hot__title">熱門活動</div>
                <div className="row m-auto" style={{width: "70%"}}>
                    <div className="col text-center">
                        <img src="https://fakeimg.pl/250x300/"/>
                    </div>
                    <div className="col text-center">
                        <img src="https://fakeimg.pl/250x300/"/>
                    </div>
                    <div className="col text-center">
                        <img src="https://fakeimg.pl/250x300/"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Coach