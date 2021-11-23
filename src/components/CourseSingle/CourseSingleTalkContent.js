import React from "react";
import Membericon from "../MemberIcon";

export default function CourseSingleTalkContent() {
  return (
    <div>
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
  );
}
