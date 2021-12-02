import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Home.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import axios from "axios";
import CoursesCourseCard from "../components/Course/CoursesCourseCard";

function Home() {
  const [pImg, setPImg] = useState({});
  const [hotProduct, setHotProduct] = useState([]);

  useEffect(async () => {
    // let pImages = await axios.get(
    //   `http://localhost:3001/product/images`,
    //   {
    //     withCredentials: true,
    //   }
    // );
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    let resProduct = await axios.get(
      "http://localhost:3001/product/hot-product",
      { withCredentials: true }
    );
    // setPImg();
    setHotProduct(resProduct.data);
    // console.log(hotProduct);
    console.log(resProduct.data);
  }, []);

  //選擇部位
  const [part, setPart] = useState("");
  const handlePart = (i) => {
    setPart(i);
  };
  //拉出特定部位的課程
  const [partCourse, setPartCourse] = useState([]);
  const handlePartCourse = async (partid) => {
    let resCourse = await axios.get(
      `http://localhost:3001/course/part-best/${partid}`
    );
    setPartCourse(resCourse.data);
  };
  let bestCourse=partCourse.map(course=>
    <CoursesCourseCard
      course={course }
    />
  )

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
        <ReactPlayer
          url="https://www.youtube.com/watch?v=YARJ99FqcYE"
          loop="true"
          muted="true"
          playing="true"
          width="100vw"
          height="92vh"
          className="hero-player"
        />
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
              透過部位、時間長度還有程度標籤，快速從上百堂的課程中找到你想學習的健身知識!
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
        <section className="playList">
          <img src="https://via.placeholder.com/300x200" alt="" />
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
            <div className="event--group--cards">
              <img src="https://via.placeholder.com/400x100" alt="" />
              <img src="https://via.placeholder.com/400x100" alt="" />
              <img src="https://via.placeholder.com/400x100" alt="" />
            </div>
            <Link to="/event">
              <button className="event--group--link">更多活動</button>
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
            <div className="mx-4 my-3 coach__link" style={{ width: "300px" }}>
              <Link
                to="/product"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-1.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>洪啟學</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
            <div className="mx-4 my-3 coach__link" style={{ width: "300px" }}>
              <Link
                to="/product"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-2.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>洪啟學</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
            <div className="mx-4 my-3 coach__link" style={{ width: "300px" }}>
              <Link
                to="/product"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-3.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>洪啟學</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
            <div className="mx-4 my-3 coach__link" style={{ width: "300px" }}>
              <Link
                to="/product"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-4.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>洪啟學</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
            <div className="mx-4 my-3 coach__link" style={{ width: "300px" }}>
              <Link
                to="/product"
                style={{ color: "#09203f" }}
                className="text-decoration-none"
              >
                <img
                  src="./coach_imgs/coach-5.png"
                  style={{ width: "200px" }}
                  alt=""
                />
                <h4>洪啟學</h4>
                <p>教練資歷:5年</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="giftCard mb-5 p-5">
          <img src="./images/giftcard.png" alt="" />
          <h3>購買禮物卡，邀請朋友一起來運動!</h3>
          <p>送給朋友一個月的會籍，一起享受運動的樂趣!</p>
          <Link to="/giftcard">
            <button>前往購買</button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
