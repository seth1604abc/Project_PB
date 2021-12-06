import React from "react";
import { useState, useEffect } from "react";
import "../css/Product.css";
import axios from "axios";

function ProductFiter({
  changeList,
  handleSelect,
  handleSearch,
  
}) {
  const [cat, setCat] = useState("");
  const handleCat = (v) => {
    setCat(v);
  };
  //composition
  let isOnComposition = false;
  const handleComposition = (e) => {
    if (e.type === "compositionend") {
      //composition結束，代表中文輸入完成
      isOnComposition = false;
    } else {
      //composition進行中，代表正在輸入中文
      isOnComposition = true;
    }
  };
  return (
    <>
      {/* 搜尋篩選區 */}
      <div className="product__fillter container my-5 d-flex justify-content-between align-items-center">
        <div className="product__fillter__buttons d-flex">
          <button
            className={`btn text-nowrap ${
              cat === "營養品" ? "product__fillter__buttons-active" : ""
            }`}
            onClick={() => {
              handleCat("營養品");
              changeList(1);
            }}
          >
            <i className="fas fa-utensils me-2"></i>營養品
          </button>
          <button
            className={`btn text-nowrap ${
              cat === "禮物卡" ? "product__fillter__buttons-active" : ""
            }`}
            onClick={() => {
              handleCat("禮物卡");
              changeList(2);
            }}
          >
            <i className="fas fa-gift me-2"></i>禮物卡
          </button>
          <select
            className={`text-nowrap btn ps-4 pe-4 ${
              cat === "健身器材" ? "product__fillter__buttons-active" : ""
            }`}
            onClick={() => {
              handleCat("健身器材");
            }}
            onChange={handleSelect}
          >
            <option className="text-start" value="1">健身器材</option>
            <option className="text-start" value="2">手部</option>
            <option className="text-start" value="3">肩部</option>
            <option className="text-start" value="4">胸部</option>
            <option className="text-start" value="5">背部</option>
            <option className="text-start" value="6">腿部</option>
          </select>
        </div>
        <div className="product__fillter__search d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="搜尋商品名稱"
            id="productSearch"
            name="productSearch"
            // onCompositionStart={handleComposition}
            // onCompositionUpdate={handleComposition}
            // onCompositionEnd={handleComposition}
            onChange={
              handleSearch
              
            //   (e) => {
            // //只有onComposition===false，才作onChange
            // if (e.target instanceof HTMLInputElement && !isOnComposition){
            //   handleSearch(e);
            // }}
            }

          />
          <button className="btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductFiter;
