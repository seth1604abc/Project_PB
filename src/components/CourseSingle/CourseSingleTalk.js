import React from "react";
import CourseSingleTalkContent from "./CourseSingleTalkContent";
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
          <CourseSingleTalkContent />
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
