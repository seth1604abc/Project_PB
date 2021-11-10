import React from "react";
// 文章CARD 元件
import ArticleNewsCard from "./ArticleNewsCard";

function ArticleNews() {
  return (
    <>
      <div>
        <h2 className="Article__area__title pb-2">最新文章</h2>
        <div>
          <ArticleNewsCard />
        </div>
      </div>
    </>
  );
}

export default ArticleNews;
