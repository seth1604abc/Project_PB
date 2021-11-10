import React from "react";
import Membericon from "../MemberIcon";
import { useState } from "react";

function CourseSingleTalk() {
  const [icon, setIcon] = useState("far");
  return (
    <>
      <div className="p-3 m-1">
        <div className="d-flex align-items-center Article__area__title">
          <i class="far fa-comment-alt Course__area__icon p-2"></i>
          <h2 className="Course__area__title me-3">留言板</h2>
          <div className="Course__area__Secondtitle">
            共<span className="p-2">7</span>則
          </div>
        </div>
        <div className="Course__area__TalkHeight">
          <div className="d-flex m-3">
            <div className="Course__CourseTalk__img me-3">
              <Membericon />
            </div>
            <div>
              {/* 主留言 */}
              <div>
                <div className="Course__CourseTalk__Name">洪啟學</div>
                <div className="Course__CourseTalk__Content">
                  這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                </div>
                <div>
                  <p className="text-end me-3 mt-1 pointer fz08">
                    <span className="pe-3">16則留言</span>回覆
                  </p>
                </div>
              </div>
              {/* 回覆主留言的留言 */}
              <div className="d-flex">
                <div className="Course__CourseTalk__img me-3">
                  <Membericon />
                </div>
                <div>
                  <div className="Course__CourseTalk__Name">王緯宸</div>
                  <div className="Course__CourseTalk__Content">
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                  </div>
                  <div>
                    <p className="text-end me-3 mt-1 pointer fz08">
                      <span className="pe-3">16則留言</span>回覆
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="Course__CourseTalk__img me-3">
                  <Membericon />
                </div>
                <div>
                  <div className="Course__CourseTalk__Name">馬厚生</div>
                  <div className="Course__CourseTalk__Content">
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                  </div>
                  <div>
                    <p className="text-end me-3 mt-1 pointer fz08">
                      <span className="pe-3">16則留言</span>回覆
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex m-3">
            <div className="Course__CourseTalk__img me-3">
              <Membericon />
            </div>
            <div>
              {/* 主留言 */}
              <div>
                <div className="Course__CourseTalk__Name">洪啟學</div>
                <div className="Course__CourseTalk__Content">
                  這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                </div>
                <div>
                  <p className="text-end me-3 mt-1 pointer fz08">
                    <span className="pe-3">16則留言</span>回覆
                  </p>
                </div>
              </div>
              {/* 回覆主留言的留言 */}
              <div className="d-flex">
                <div className="Course__CourseTalk__img me-3">
                  <Membericon />
                </div>
                <div>
                  <div className="Course__CourseTalk__Name">王緯宸</div>
                  <div className="Course__CourseTalk__Content">
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                  </div>
                  <div>
                    <p className="text-end me-3 mt-1 pointer fz08">
                      <span className="pe-3">16則留言</span>回覆
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="Course__CourseTalk__img me-3">
                  <Membericon />
                </div>
                <div>
                  <div className="Course__CourseTalk__Name">馬厚生</div>
                  <div className="Course__CourseTalk__Content">
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                    這是一個即時聊天的訊息內容，今天是這樣的對嗎？
                  </div>
                  <div>
                    <p className="text-end me-3 mt-1 pointer fz08">
                      <span className="pe-3">16則留言</span>回覆
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Course__area__Talk__InputArea px-4 py-2 my-3">
          <input
            className="input-form-control Course__area__Talk__InputArea__Input"
            placeholder="留言"
          />
          <i
            class={` ${icon} fa-paper-plane ps-2 pointer MainColor`}
            onMouseOver={() => {
              setIcon("fas");
            }}
            onMouseLeave={() => {
              setIcon("far");
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default CourseSingleTalk;
