
import {useState, useEffect} from "react"
import ProductCard from "../components/ProductCard";
import "../css/Home.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar"
import axios from "axios";
function Home() {
  const[part,setPart]=useState("");
  const handlePart=(i)=>{
    setPart(i);
  }  
  return (
    <>
      <header>
      <NavBar />        
                 
        <div className="nav-scrollDown">
          <p>了解更多</p>
          <i className="fas fa-chevron-down"></i>
        </div>
      </header>
      <main>
        <section className="course d-flex align-items-center">
          <div className="course--context">
            <h3 className="text-nowrap">你在找什麼課程?</h3>
            <p>
              透過部位、時間長度還有程度標籤，快速從上百堂的課程中找到你想學習的健身知識!
            </p>

            <div className="course--context--filter">
              <div className="course--context--filter--part">
                <button className={part==="手部"?"course--context--filter--part-active":""} onClick={()=>{handlePart("手部")}}>手部</button>
                <button className={part==="腿部"?"course--context--filter--part-active":""} onClick={()=>{handlePart("腿部")}}>腿部</button>
                <button className={part==="胸部"?"course--context--filter--part-active":""} onClick={()=>{handlePart("胸部")}}>胸部</button>
                <button className={part==="肩部"?"course--context--filter--part-active":""} onClick={()=>{handlePart("肩部")}}>肩部</button>
                <button className={part==="背部"?"course--context--filter--part-active":""} onClick={()=>{handlePart("背部")}}>背部</button>
              </div>
              <div className="course--context--filter--input ">
                <input type="text" name="" id="" />
                <button className="px-3 py-1">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <ProductCard />
        </section>

        <section className="playList">
          <img src="https://via.placeholder.com/300x200" alt="" />
          <div className="playList--context">
            <h3 className="nowrap">隨你所好，安排課程</h3>
            <p className="mb-3 me-0">在眾多課程中收藏你所喜愛的課程，並依照需要安排你的課表!</p>
            <button className="">前往課程</button>
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
            <button className="event--group--link">更多活動</button>
          </div>
        </section>

        <section className="product">
          <div className="product--context">
            <h3>熱門商品</h3>
            <p>搭配優選商品，讓訓練更有效</p>
          </div>
          <div className="product--items">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        <section className="coach">
          <h3>
            所有課程
            <br />
            皆由專業教練指導
          </h3>
          <div className="coach--list">
           
            <div className="divider"></div>
            <div className="coachName">Chris</div>
            <div className="coachTime">教練資歷5年</div>
            <img src="https://via.placeholder.com/250x250" alt="" />
            <img src="https://via.placeholder.com/250x250" alt="" />
            <img src="https://via.placeholder.com/250x250" alt="" />
            <img src="https://via.placeholder.com/250x250" alt="" />
            <img src="https://via.placeholder.com/250x250" alt="" />
          </div>
        </section>
        <section className="giftCard mb-5 p-5">
          <img src="https://via.placeholder.com/300x200" alt="" />
          <h3>購買禮物卡，邀請朋友一起來運動!</h3>
          <p>送給朋友一個月的會籍，一起享受運動的樂趣!</p>
          <button>前往購買</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
