import React from "react";
import { useEffect } from "react";
import Comment from "../components/Comment";
import "../css/ProductSingle.css";
import "../css/Article.css";
import "../css/Course.css";
import RecommandProduct from "../components/RecommandProduct";
import { useState } from "react";
import ArticleRecommand from "../components/ArticleRecommand";
import CourseSingleHitCourse from "../components/CourseSingleHitCourse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const ProductSingle = () => {
  useEffect(()=>{
    window.scroll({
      top:0,
      behavior:"instant"
    });
    
  },[])
  const text = ["介紹", "規格"];
  const defaultText = text[0];
  const [showText, setShowText] = useState(defaultText);

  const [number, setNumber] = useState(1);
  const handleClick = (i) => {
    if (i === 0) {
      if (number === 1) {
        return;
      }
      setNumber(number - 1);
    }
    if (i === 1) {
      setNumber(number + 1);
    }
  };

  const handleChange = (e) => {
    console.log(typeof Number(e.target.value));
    if (Number.isInteger(Number(e.target.value))) {
      e.target.value <= 0 ? setNumber(1) : setNumber(Number(e.target.value));
    } else {
      return;
    }
  };

  return (
    <>
      <Navbar id="productSingle-start"/>
      <div className=" my-5 productMain container d-flex justify-content-center align-items-center">
        <div className="productMain_pictures me-5">
          <Gallery />
          {/* <img
            src="https://via.placeholder.com/550x400/333/FFECD2/?text=picture"
            alt=""
          /> */}
        </div>
        <div className="productMain__info ms-3">
          <h1>20kg啞鈴組</h1>
          <a href="#/">
            <span className="me-1">
              4.5<i className="fas fa-star"></i>
            </span>{" "}
            10筆評價
          </a>
          <hr className="my-1" />
          <h3>NT$1250</h3>
          <div className="productMain__info__count">
            <p>數量:</p>
            <div className="d-flex justify-content-between align-items-center productMain__info__count__group">
              <button
                className="btn productMain__info__count__group__substract"
                onClick={() => {
                  handleClick(0);
                }}
              >
                -
              </button>
              <input
                type="text"
                className="form-control rounded-0"
                value={number}
                onChange={handleChange}
                maxLength="2"
              />
              <button
                className="btn productMain__info__count__group__add"
                onClick={() => {
                  handleClick(1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-start">
            <button className="btn productMain__info__btn--cart me-3">
              加入購物車
            </button>
            <button className="btn productMain__info__btn--buy">
              直接購買
            </button>
          </div>
        </div>
      </div>
      <div className="product__secondary mb-5 container d-flex  justify-content-center">
        <div clasName="product__secondary__left " style={{ width: "60%" }}>
          <div className=" mb-5 ">
            <button
              className={`btn product__secondary__left__btn--intro ${
                showText === "介紹"
                  ? "product__secondary__left__btn--detail-active"
                  : ""
              }`}
              onClick={() => {
                setShowText(text[0]);
              }}
            >
              商品介紹
            </button>
            <button
              onClick={() => {
                setShowText(text[1]);
              }}
              className={`btn product__secondary__left__btn--detail ${
                showText === "規格"
                  ? "product__secondary__left__btn--detail-active"
                  : ""
              }`}
            >
              商品規格
            </button>
            <p className="btn product__secondary__left__text w-100">
              {showText}
            </p>
          </div>
          <div className="product__secondary__left__comment  d-flex flex-column mb-5">
            <div>商品評價</div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <button className="btn product__secondary__left__comment__more m-1 align-self-end">
              更多評論
            </button>
          </div>
          <ArticleRecommand />
        </div>
        <div className="product__secondary__recommand d-flex flex-column align-items-start ms-5 ">
          <div className="d-flex Article__area__title w-100">
            <i class="fas fa-shopping-bag Course__area__icon p-2"></i>
            <h2 className="">推薦商品</h2>
          </div>

          <RecommandProduct />
          <RecommandProduct />
          <RecommandProduct />
          <button className="btn product__secondary__recommand__more align-self-end mb-5">
            更多商品
          </button>
          <CourseSingleHitCourse />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductSingle;
