import React from "react";
import "../css/Product.css";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Banner from "../components/Course/CoursesBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ShoppingMain() {
  return (
    <>
      <Navbar />
      <Banner/>
      {/* <div className="banner  container d-flex justify-content-around align-items-center text-white  mb-5">
        <div className="banner__context ">
          <h3 className="display-1  mb-5">舉起來!</h3>
          <p className="mb-3">啞鈴全面88折</p>
          <button className=" ">立即前往</button>
        </div>
        <img
          src="https://via.placeholder.com/500x400/333/FFECD2/?text=picture"
          className="banner__img "
          alt=""
        />
      </div> */}

      {/* 熱門商品區 */}
      <div className="product__hot container  justify-content-center align-items-center  ">
        <h3 className="mb-4">熱門商品</h3>
        <div className="product__list__card-group d-flex justify-content-around">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* 商品搜尋 */}
      <div className="container">
        <ProductFilter />
      </div>

      {/* 商品列表 */}
      <div className="d-flex flex-wrap container justify-content-between ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </>
  );
}

export default ShoppingMain;
