import React from "react";

function ArticleControlBar() {
  return (
    <>
        <div className="d-flex">
          <select className="form-select Courses__control-bar__select-width">
            <option value="1" selected>
              文章分類
            </option>
            <option value="2">手部</option>
            <option value="3">肩部</option>
            <option value="4">胸部</option>
            <option value="5">背部</option>
            <option value="6">腿部</option>
          </select>
          <select className="form-select Courses__control-bar__select-width">
            <option value="1" selected>
              教練
            </option>
            <option value="2">Ariel</option>
            <option value="3">Chris</option>
            <option value="4">Eddie</option>
            <option value="5">Eric</option>
            <option value="6">Tommy</option>
          </select>
          <select className="form-select Courses__control-bar__select-width">
            <option value="1" selected>
              排序方式
            </option>
            <option value="2">熱門程度</option>
            <option value="3">更新時間</option>
          </select>
        </div>
    </>
  );
}

export default ArticleControlBar;
