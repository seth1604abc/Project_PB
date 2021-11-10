import React from "react";
import Membericon from "../MemberIcon";

let articleAuthorTopic = [
  {
    id: 1,
    img: "./images/01.png",
    title: "這是文章標題",
    time: "2021/10/23",
  },
  {
    id: 2,
    img: "./images/02.png",
    title: "這是文章標題",
    time: "2011/09/23",
  },
  {
    id: 3,
    img: "./images/01.png",
    title: "這是文章標題",
    time: "2015/11/12",
  },
];

function ArticleAuthor() {
  return (
    <>
      <div className="ArticleAuthor align-items-center py-4 px-2">
        <div className="ArticleAuther__info">
          <div className="ArticleAuthor__Coach__image">
            <Membericon />
          </div>
          <div className="text-nowrap ArticleAuthor__Coach__Name">
            Taylor Swift
          </div>
          <div className="text-nowrap">22年健身教練</div>
        </div>
        <div className="d-flex">
          {articleAuthorTopic.map((item) => {
            return (
              <div className="ArticleAuthor__HotArticle pointer" key={item.id}>
                <div className="ArticleAuthor__HotArticle__img">
                  <img src={item.img} alt="" />
                </div>

                <h4 className="pt-1">{item.title}</h4>
                <div className="pb-2">
                  <div className="ArticleAuthor__HotArticle__Date">
                    發佈時間：{item.time}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ArticleAuthor;
