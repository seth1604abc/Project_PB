import React from "react";
import Membericon from "../MemberIcon";

let ArticleNews = [
  {
    id: 1,
    img: "./images/01.png",
    title: "子瑜是TWICE「最強富婆」？身價破2百萬美金原因曝光",
    content:
      "南韓女團TWICE在全球擄獲眾多粉絲的心，更將於今年進軍歐美，近期傳出年紀最小的台籍成員周子瑜，是最富有的成員，身價高達200萬美元（約新台幣5600萬元），外媒分析可能有兩大原因，但未獲經紀公司任何回應。",
    coach: "Taylor Swift",
    created_at: "2021/10/20",
  },
  {
    id: 2,
    img: "./images/02.png",
    title: "子瑜是TWICE「最強富婆」？身價破2百萬美金原因曝光",
    content:
      "南韓女團TWICE在全球擄獲眾多粉絲的心，更將於今年進軍歐美，近期傳出年紀最小的台籍成員周子瑜，是最富有的成員，身價高達200萬美元（約新台幣5600萬元），外媒分析可能有兩大原因，但未獲經紀公司任何回應。",
    coach: "Taylor Swift",
    created_at: "2015/10/20",
  },
  {
    id: 3,
    img: "./images/03.jpg",
    title: "子瑜是TWICE「最強富婆」？身價破2百萬美金原因曝光",
    content:
      "南韓女團TWICE在全球擄獲眾多粉絲的心，更將於今年進軍歐美，近期傳出年紀最小的台籍成員周子瑜，是最富有的成員，身價高達200萬美元（約新台幣5600萬元），外媒分析可能有兩大原因，但未獲經紀公司任何回應。",
    coach: "Taylor Swift",
    created_at: "2018/10/20",
  },
];

function ArticleNewsCard() {
  return (
    <div>
      {ArticleNews.map((news) => {
        return (
          <div className="d-flex ArticleNewsCard justify-content-between pointer">
            <div className="ArticleNewsCard__image">
              <img src={news.img} alt="文章圖片" />
            </div>
            <div className="ArticleNewsCard__content">
              <h4 className="fw-bold mb-4">{news.title}</h4>
              <p>
                {news.content}
              </p>
            </div>
            <div className=" ArticleNewsCard__info d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-end">
                <div className="ArticleNewsCard__CoachImg">
                  <Membericon />
                </div>
                <div className="ps-2">{news.coach}</div>
              </div>
              <div className="d-flex justify-content-end">
                發佈時間：{news.created_at}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticleNewsCard;
