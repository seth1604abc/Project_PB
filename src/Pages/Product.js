import React from "react";
import "../css/Product.css";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Banner from "../components/ProductBanner";
import CoursesPageButton from "../components/Course/CoursesPageButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function ShoppingMain() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [hotProduct, setHotProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [newNewProduct, setNewNewProduct] = useState([]);
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
    setNewNewProduct(resProduct.data);

    let res = await axios.get("http://localhost:3001/auth/login", {
      withCredentials: true,
    });
    if (res.data.userId) {
      setIsLoggedin(true);
    }
  }, []);
  //設定composition

  //監聽搜尋
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search)
  };
  useEffect(() => {
    let List = [...newNewProduct];
    console.log(List);
    let searchList = List.filter((item) => {
      let productName = item.title;
      return productName.includes(search);
    });
    console.log(searchList);
    if (search === "") {
      setProduct(newNewProduct);
    } else {
      setProduct(searchList);
    }
  }, [search, newNewProduct]);

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
        isLoggedin={isLoggedin}
      />
    );
  });

  let pList = product.map((product) => {
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
        isLoggedin={isLoggedin}
      />
    );
  });

  const handleChangeCat = (i) => {
    let catProduct = [...newProduct];
    let newList = catProduct.filter((item) => {
      return item.product_type_id === i;
    });
    setProduct(newList);
    setNewNewProduct(newList);
    // console.log(newList);
  };

  //健身器材部位篩選
  const [option, setOption] = useState(0);
  const handleSelect = (e) => {
    setOption(e.target.value);
    // console.log(e.target.value)
    // console.log(option)
    let partProduct = [...newProduct];
    if (e.target.value == 1) {
      handleChangeCat(3);
    } else {
      let partList = partProduct.filter((item) => {
        return item.body_part_id === Number(e.target.value);
      });
      setProduct(partList);
      setNewNewProduct(partList);
      // console.log(partProduct);
      // console.log(partList);
      // console.log(product);
    }
  };
  return (
    <>
      {/* <button
        onClick={() => {
          console.log(pList);
          console.log(product);
        }}
      >
        1
      </button> */}
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
          handleSearch={handleSearch}
        />
      </div>

      {/* 商品列表 */}
      <div className="ms-3">
        <div className="d-flex flex-wrap container justify-content-start">
          {pList}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default ShoppingMain;
