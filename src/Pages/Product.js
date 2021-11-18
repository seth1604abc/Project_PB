import React from "react";
import "../css/Product.css";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Banner from "../components/Course/CoursesBanner";
import CoursesPageButton from "../components/Course/CoursesPageButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function ShoppingMain() {
  const [hotProduct, setHotProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const[newProduct,setNewProduct]=useState([]);
  useEffect(async () => {
    //抓熱門商品
    let resHitProduct = await axios.get(
      "http://localhost:3001/product/hot-product",
      { withCredentials: true }
    );
    setHotProduct(resHitProduct.data);

    //抓全部商品
    let resProduct = await axios.get("http://localhost:3001/product", {
      withCredentials: true,
    });
    setProduct(resProduct.data);
    setNewProduct(resProduct.data)
  }, []);

  const hotList = hotProduct.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.title}
        sold={product.sold}
        part={product.body_part_id}
        price={product.price}
        rate={product.average_rate}
      />
    );
  });

  let pList = product.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.title}
        sold={product.sold}
        part={product.body_part_id}
        price={product.price}
        rate={product.average_rate}
      />
    );
  });

  

  const handleChangeCat = (i) => {
     let partProduct=[...newProduct];
    let newList = partProduct.filter((item) => {
      return item.product_type_id === i;
    });
    setProduct(newList);
    console.log(newList);
  };
  return (
    <>
      <Navbar />
      <Banner />
      {/* 熱門商品區 */}
      <div className="product__hot container  justify-content-center align-items-center mt-5 ">
        <h3 className="mb-5">熱門商品</h3>
        <div className="product__list__card-group d-flex justify-content-start">
          {hotList}
        </div>
      </div>
      {/* 商品搜尋 */}
      <div className="container">
        <ProductFilter changeList={handleChangeCat} />
      </div>

      {/* 商品列表 */}
      <div className="ms-3">
        <div className="d-flex flex-wrap container justify-content-start">
          {pList}
        </div>
      </div>
      <CoursesPageButton />
      <Footer />
    </>
  );
}

export default ShoppingMain;
