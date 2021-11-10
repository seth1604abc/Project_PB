import React from "react";
// 文章CARD 元件
import ArticleNewsCard from "./ArticleNewsCard";
// 控制列
import ArticleControlBar from "./ArticleControlBar";

function ArticleList() {
  return (
    <>
      <div className="container">
        <div className="Article__area__title d-flex justify-content-between">
          <h2 className="pt-3">文章列表</h2>
          <div>
            <ArticleControlBar />
          </div>
        </div>
        <div>
          <ArticleNewsCard />
        </div>
      </div>
    </>
  );
}

export default ArticleList;
