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
  const [newProduct, setNewProduct] = useState([]);
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
    setNewProduct(resProduct.data);
    
    
  }, []);
  const hotList = hotProduct.map((product) => {
    // console.log(typeof product.id);
    return (
      <ProductCard
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

  let pList = product.map((product) => {
    
    return (
      <ProductCard
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

  const handleChangeCat = (i) => {
    let catProduct = [...newProduct];
    let newList = catProduct.filter((item) => {
      return item.product_type_id === i;
    });
    setProduct(newList);
    // console.log(newList);
  };

  //健身器材部位篩選
  const [option, setOption] = useState(0);
  const handleSelect = (e) => {
    setOption(e.target.value);
    // console.log(e.target.value)
    // console.log(option)
    let partProduct = [...newProduct];
    if (e.target.value === 0) {
      handleChangeCat(3);
    } else {
      let partList = partProduct.filter((item) => {
        return item.body_part_id === Number(e.target.value);
      });
      console.log(partProduct);
      setProduct(partList);
      console.log(partList);
      console.log(product);
    }
  };
  return (
    <>
    {/* <button onClick={()=>{console.log(pImg[3])}}>1</button> */}
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
        <ProductFilter
          changeList={handleChangeCat}
          handleSelect={handleSelect}
        />
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
