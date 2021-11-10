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
