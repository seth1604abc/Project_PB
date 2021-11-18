import React from "react";
import { useState, useEffect } from "react";
import "../css/Product.css";

function ProductFiter({ changeList }) {
  const [cat, setCat] = useState("");
  const handleCat = (v) => {
    setCat(v);
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
            className={`btn text-nowrap ${
              cat === "健身器材" ? "product__fillter__buttons-active" : ""
            }`}
            onClick={() => {
              handleCat("健身器材");
              changeList(3);
            }}
          >
            <option selected>健身器材</option>
            <option value="1">手部</option>
            <option value="2">腿部</option>
            <option value="3">胸部</option>
            <option value="4">肩部</option>
            <option value="5">背部</option>
          </select>
        </div>
        <div className="product__fillter__search d-flex">
          <input type="text" className="form-control" />
          <button className="btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductFiter;
