import React from "react";
import { useState } from "react";

function ArticleBanner() {
  const [position, setPosition] = useState("Article__Banner__image2");
  const [banner1button, setBanner1button] = useState("");
  const [banner2button, setBanner2button] = useState(
    "Courses__Banner-ControlBar_active"
  );
  const [banner3button, setBanner3button] = useState("");
  return (
    <>
      <div className="range">
        <div className={`Article__Banner__Mask ${position}`}>
          {/* Article__Banner-1 */}
          <div className="position-relative">
            <div className="Article__Banner__group">
              <img
                className="Article__Banner__image"
                src="./images/02.png"
                alt="圖片"
              />
            </div>
            <div className="Article__Banner__title position-absolute">
              <div className="Article__Banner__title__content p-5">
                <div>編輯精選</div>
                <h3>一些關於健身的基本觀念</h3>
                <div>
                  健身是需要持續的訓練，不是三兩天會馬上見效健身是需要持續的訓練，不是三兩天會馬上見效健身是需要持續的訓練，不是三兩天會馬上見效健身是需要持續的訓練，不是三兩天會馬上見效健身是需要持續的訓練，不是三兩天會馬上見效健身是需要持續的訓練，不是三兩天會馬上見效健身是需要持續的訓練，不是三兩天會馬上見效
                </div>
                <div className='d-flex'>
                  <p className="Article__Banner__title__content__Btn">完整文章</p>
                </div>
              </div>
            </div>
          </div>
          {/* Article__Banner-2 */}
          <div className="position-relative">
            <div className="Article__Banner__group">
              <img
                className="Article__Banner__image"
                src="./images/01.png"
                alt="圖片"
              />
            </div>
            <div className="Article__Banner__title position-absolute">bbb</div>
          </div>
          {/* Article__Banner-3 */}
          <div className="position-relative">
            <div className="Article__Banner__group">
              <img
                className="Article__Banner__image"
                src="./images/03.jpg"
                alt="圖片"
              />
            </div>
            <div className="Article__Banner__title position-absolute">ccc</div>
          </div>
        </div>
      </div>

      <div className="Courses__Banner-ControlBar mt-2">
        <ul className="row">
          <li
            className="col"
            onClick={() => {
              setPosition("Article__Banner__image1");
              setBanner1button("Courses__Banner-ControlBar_active");
              setBanner2button("");
              setBanner3button("");
              // videos[1].pause();
            }}
          >
            <i className={`far fa-circle  ${banner1button}`}></i>
          </li>
          <li
            className="col"
            onClick={() => {
              setPosition("Article__Banner__image2");

              setBanner1button("");
              setBanner2button("Courses__Banner-ControlBar_active");
              setBanner3button("");
            }}
          >
            <i className={`far fa-circle  ${banner2button}`}></i>
          </li>
          <li
            className="col"
            onClick={() => {
              setPosition("Article__Banner__image3");

              setBanner1button("");
              setBanner2button("");
              setBanner3button("Courses__Banner-ControlBar_active");
            }}
          >
            <i className={`far fa-circle  ${banner3button}`}></i>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ArticleBanner;
