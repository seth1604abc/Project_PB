import React from "react";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import "../css/ProductSingle.css";
import "../css/Article.css";
import "../css/Course.css";
import RecommandProduct from "../components/RecommandProduct";
import ArticleRecommand from "../components/ArticleRecommand";
import CourseSingleHitCourse from "../components/CourseSingleHitCourse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductSingle = () => {
  useEffect(async () => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    let recommandProduct = await axios.get(
      `http://localhost:3001/product/recommand-product/${category}`,
      {
        withCredentials: true,
      }
    );

    let product = await axios.get(
      `http://localhost:3001/product/${productId}`,
      {
        withCredentials: true,
      }
    );
    console.log(recommandProduct.data);
    setProductData(product.data[0]);
    setRProduct(recommandProduct.data);
    setShowText(product.data[0].intro);
    console.log(product.data[0]);
    console.log(recommandProduct.data);
  }, []);
  const { category, productId } = useParams();
  //拿商品資料
  const [productData, setProductData] = useState({});
  //推薦商品資料
  const [rProduct, setRProduct] = useState([]);
  const rList = rProduct.map((product) => {
    return (
      <RecommandProduct
        productId={product.id}
        name={product.title}
        sold={product.sold}
        part={product.body_part_id}
        price={product.price}
        rate={product.average_rate}
        category={product.product_type_id}
      />
    );
  });
  //拿url傳的資料
  

  //拿介紹文字
  const text = ["介紹", "規格"];
  const show = [productData.intro, productData.detail];
  const [showText, setShowText] = useState(show[0]);

  //記數量
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
      <Navbar id="productSingle-start" />
      <div className=" my-5 productMain container d-flex justify-content-center align-items-center">
        <div className="productMain_pictures me-5">
          <Gallery />
          {/* <img
            src="https://via.placeholder.com/550x400/333/FFECD2/?text=picture"
            alt=""
          /> */}
        </div>
        <div className="productMain__info ms-3">
          <h1>{productData.title}</h1>
          <a href="#/">
            <span className="me-1">
              {productData.average_rate}
              <i className="fas fa-star"></i>
            </span>{" "}
            10筆評價
          </a>
          <hr className="my-1" />
          <h3>NT${productData.price}</h3>
          <div className="productMain__info__count">
            <p>數量:</p>
            <div className="d-flex justify-content-between align-items-center productMain__info__count__group">
              <button
                className="btn productMain__info__count__group__substract"
                onClick={() => {
                  handleClick(0);
                  console.log(productData);
                  console.log(Number(category));
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
                showText === show[0]
                  ? "product__secondary__left__btn--detail-active"
                  : ""
              }`}
              onClick={() => {
                setShowText(show[0]);
                console.log(show);
              }}
            >
              商品介紹
            </button>
            <button
              onClick={() => {
                setShowText(show[1]);
                console.log(showText);
              }}
              className={`btn product__secondary__left__btn--detail ${
                showText === show[1]
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
            <i className="fas fa-shopping-bag Course__area__icon p-2"></i>
            <h2 className="">推薦商品</h2>
          </div>
          {rList}
          <Link to="/product">
          <button className="btn product__secondary__recommand__more align-self-end mb-5">
            更多商品
          </button>
          </Link>
          <CourseSingleHitCourse />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductSingle;
