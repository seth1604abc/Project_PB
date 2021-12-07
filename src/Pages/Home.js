import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Home.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import axios from "axios";
// import CoursesCourseCard from "../components/Course/CoursesCourseCard";
import Moment from 'react-moment';
import 'moment-timezone';
import { BODY_PARTS, LEVEL } from "../components/BodyPartandLevelTable.js";

function Home() {
  const [pImg, setPImg] = useState({});
  const [hotProduct, setHotProduct] = useState([]);
  const [topEvent, setTopEvent] = useState([]);
  useEffect(async () => {
    //頁面拉到頂端
    window.scroll({
      top: 0,
      behavior: "instant",
    });

    //拿推薦商品
    let resProduct = await axios.get(
      "http://localhost:3001/product/hot-product",
      { withCredentials: true }
    );
    setHotProduct(resProduct.data);
    //預設推薦課程
    let resCourse = await axios.get(
      `http://localhost:3001/course/part-best/2`,{ withCredentials: true }
    );
    setPartCourse(resCourse.data);
    //拿推薦活動
    let resEvent = await axios.get("http://localhost:3001/event/topEvent", {
      withCredentials: true,
    });
    setTopEvent(resEvent.data);
  
    
  }, []);

  //MAP活動卡片
  let eventList=topEvent.map(event=>{
    return(
      
      <Link to={`/event-single/${event.id}`} style={{textDecoration:"none"}} className="">
      <div className="home__eventCard d-flex align-items-center mb-3 p-1 ps-0">
        <img src={`/event_imgs/${event.image}`} className="me-3" style={{height:"9rem",width:"9rem"}} alt="" />
        <div className="home_eventCard__container d-flex flex-column  align-self-start">
          <h5 className="home__eventCard__title mb-2 fw-bold">{event.title}</h5>
          <p className="home__eventCard__content mb-2"><i class="fas fa-map-marked-alt"></i> {event.location}</p>
          <p className="home__eventCard__content"><i class="far fa-calendar-alt"></i> <Moment format="YYYY-MM-DD HH:mm">{event.datetime}</Moment></p>
        </div>
      </div>
        </Link>
      
    )
  }

    )

  //選擇部位
  const [part, setPart] = useState("");
  const handlePart = (i) => {
    setPart(i);
  };
  //拉出特定部位的課程
  const [partCourse, setPartCourse] = useState([]);
  const handlePartCourse = async (partid) => {
    let resCourse = await axios.get(
      `http://localhost:3001/course/part-best/${partid}`,{ withCredentials: true }
    );
    setPartCourse(resCourse.data);
  };
  let bestCourse = partCourse.map((course) => (
    <>
      <div className="Courses__singlecourse__card">
        <Link to={`/course-single/${course.id}`} className="LinkNoStyle">
          <img
            src={`/images/${course.filename}.png`}
            className="card-img-top"
            alt="課程1"
          />
          <div className="card-body">
            <div className="mb-2 d-flex">
              <div className="Courses__singlecourse__card__type">
                {BODY_PARTS[course.body_part_id]}
              </div>
              <div className="Courses__singlecourse__card__coach_name ms-3">
                {course.coach}
              </div>
            </div>
            <h3 className="mt-3 Courses__singlecourse__card__title">
              {course.title}
            </h3>
            <div className="mt-4 d-flex">
              <div className="Courses__singlecourse__card__count me-2">
                觀看次數：{course.views}次
              </div>
              <div className="Courses__singlecourse__card__created-at me-4">
                <Moment format="YYYY-MM-DD HH:mm">{course.upload_time}</Moment>
              </div>   
            </div>
          </div>
          <div className="Courses__singlecourse__card__coach Courses__singlecourse__card__coach-setting">
            <img src={`/images/${course.image}.jpg`} alt="coach" />
          </div>
        </Link>
      </div>
    </>
  ));

  //熱門商品
  const hotList = hotProduct.map((product) => {
    return (
      <ProductCard
        productId={product.product_id}
        name={product.title}
        sold={product.sold}
        part={product.body_part_id}
        price={product.price}
        rate={product.average_rate}
        category={product.product_type_id}
        mainImage={product.name}
      />
    );
  });
  return (
    <>
      <header className="">
        <NavBar className="" />
        <div className="d-flex justify-content-center overflow-hidden hero-player ">
        <div className="hero-player--title d-flex justify-content-center align-items-center" >
        <h1 className=" text-nowrap m-0 p-0">P&B Fitness</h1>
        </div>
        
        <ReactPlayer
          url="https://youtu.be/phAMA0PVAAc"
          loop="true"
          muted="true"
          playing="true"
          width="100vw" 
          height="140vh"
          className=""
          style={{minHeight:"100vh"}}
        />
        </div>
        
        <div className="home-video-filter"></div>
        <div className="nav-scrollDown">
          <a href="#scrollTo" className="scrollTo">
            <p>了解更多</p>
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </header>
      <main>
        <div id="scrollTo" className=""></div>
        <section className="course d-flex align-items-center">
          <div className="course--context">
            <h3 className="text-nowrap">你在找什麼課程?</h3>
            <p className="mb-3">
              透過部位、時間長度還有程度標籤，快速從眾多課程中找到你想學習的健身知識!
            </p>
            <div className="course--context--filter">
              <div className="course--context--filter--part">
                <button
                  className={
                    part === "手部"
                      ? "course--context--filter--part-active"
                      : ""
                  }
                  onClick={() => {
                    handlePart("手部");
                    handlePartCourse(2);
                  }}
                >
                  手部
                </button>
                <button
                  className={
                    part === "腿部"
                      ? "course--context--filter--part-active"
                      : ""
                  }
                  onClick={() => {
                    handlePart("腿部");
                    handlePartCourse(3);
                  }}
                >
                  腿部
                </button>
                <button
                  className={
                    part === "胸部"
                      ? "course--context--filter--part-active"
                      : ""
                  }
                  onClick={() => {
                    handlePart("胸部");
                    handlePartCourse(4);
                  }}
                >
                  胸部
                </button>
                <button
                  className={
                    part === "肩部"
                      ? "course--context--filter--part-active"
                      : ""
                  }
                  onClick={() => {
                    handlePart("肩部");
                    handlePartCourse(5);
                  }}
                >
                  肩部
                </button>
                <button
                  className={
                    part === "背部"
                      ? "course--context--filter--part-active"
                      : ""
                  }
                  onClick={() => {
                    handlePart("背部");
                    handlePartCourse(6);
                  }}
                >
                  背部
                </button>
              </div>
              {/* <div className="course--context--filter--input ">
                <input type="text" name="" id="" />
                <button className="px-3 py-1">
                  <i className="fas fa-search"></i>
                </button>
              </div> */}
            </div>
          </div>
          {bestCourse}
          {/* <ProductCard /> */}
        </section>
        <section className="playList d-flex align-items-center ">
        <div className="d-flex align-items-center" style={{width:"20rem",height:"29rem",overflow:"hidden",position:"relative"}}>
        <img src="/playlist.gif" style={{position:"absolute",left:"-273px",width:"54.1rem"}}/>
        </div>
          {/* <img src="https://via.placeholder.com/300x200" alt="" /> */}
          <div className="playList--context">
            <h3 className="nowrap">隨你所好，安排課程</h3>
            <p className="mb-3 me-0">
              在眾多課程中收藏你所喜愛的課程，並依照需要安排你的課表!
            </p>
            <Link to="/course">
              <button className="">前往課程</button>
            </Link>
          </div>
        </section>
        <section className="event">
          <div className="event--context">
            <h3 className="text-nowrap">輕鬆報名，簡單規劃</h3>
            <p>
              不定期舉辦線上講座以及活動，輕鬆報名活動，並且加入行事曆讓生活更便利!
            </p>
          </div>
          <div className="event--group">
            <div className="mb-4">
            {eventList}
              {/* <img src="https://via.placeholder.com/400x100" alt="" />
              <img src="https://via.placeholder.com/400x100" alt="" />
              <img src="https://via.placeholder.com/400x100" alt="" /> */}
            </div>
            <Link to="/event" className="event--group--link text-nowrap">
              更多活動
            </Link>
          </div>
        </section>
        <section className="d-flex flex-column align-items-center">
          <div className="product--context">
            <h3>熱門商品</h3>
            <p>搭配優選商品，讓訓練更有效</p>
          </div>
          <div className="product--items">{hotList}</div>
        </section>
        <section className="coach">
          <h3>
            所有課程
            <br />
            皆由專業教練指導
          </h3>
          <div className="coach--list d-flex flex-wrap justify-content-center">
            <div className="mx-4 my-0 coach__link" style={{ width: "300px" }}>
              <Link
                to="/coach/97"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-1.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>CYFIT兆佑</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
            <div className="mx-4 my-0 coach__link" style={{ width: "300px" }}>
              <a
                href="/coach/99"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-2.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>Eugene & Jayn</h4>
                <p>教練資歷:5年</p>
              </a>
            </div>
            <div className="mx-4 my-0 coach__link" style={{ width: "300px" }}>
              <Link
                to="/coach/100"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-3.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>Coffee林芊妤</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
            <div className="mx-4 my-0 coach__link" style={{ width: "300px" }}>
              <Link
                to="/coach/96"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-4.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>May Fit</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
            <div className="mx-4 my-0 coach__link" style={{ width: "300px" }}>
              <Link
                to="/coach/98"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-5.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>KosmoFit</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="giftCard mb-5 p-5">
          <img src="./images/giftcard.png" alt="" />
          <h3>購買禮物卡，邀請朋友一起來運動!</h3>
          <p>送給朋友一個月的會籍，一起享受運動的樂趣!</p>
          <Link to="/product-single/2/19">
            <button>前往購買</button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
