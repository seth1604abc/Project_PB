import React from "react";
import CourseSingleTalkParentContent from "./CourseSingleTalkParentContent";
import { useState, useEffect } from "react";
import axios from "axios";

function CourseSingleTalk({ course_id, singleCourse, videoid, theUser }) {
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);
  const [childComment, setChildComment] = useState([]);
  const [icon, setIcon] = useState("far");
  const [text, setText] = useState("");
  const [textPlaceHolder, setTextPlaceHolder] = useState("留言");
  const [videoId, setVideoId] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [reply, setReply] = useState(false);
  const [replyText, setReplyText] = useState("回覆");
  const [mainCommentId, setMainCommentId] = useState();
  const [random, setRandom] = useState(0);

  useEffect(async () => {
    //所有留言
    let allComment = await axios.get("http://localhost:3001/course/comment", {
      withCredentials: true,
    });
    setComment(allComment.data);
    // 設變數抓子留言
    let sonComment = allComment.data;
    sonComment = sonComment[sonComment.length - 1];
    setChildComment(sonComment);
    // 抓主留言(刪除子留言的陣列)
    let parentComment = allComment.data;
    parentComment = parentComment.pop();
    setComments(parentComment);
    setVideoId(videoid);
    let input = document.getElementById("talkInput");
  }, [random]);

  async function submitComment(e) {
    if (theUser === undefined || theUser === null) {
      setTextPlaceHolder("請先登入會員！");
    } else if (theUser !== undefined && theUser !== null) {
      let sendtext = {
        user_id: 4,
        text: text,
        course_id: videoId,
        created_at: new Date(),
      };
      let childSendText = {
        user_id: 4,
        text: text,
        course_comment_id: mainCommentId,
        created_at: new Date(),
      };
      if (reply === false) {
        try {
          let result = await axios.post(
            "http://localhost:3001/course/addComment",
            sendtext,
            { withCredentials: true }
          );
          //console.log(text);
          let newComment = [...comments, sendtext];
          setComment(newComment);
          setTextValue("");
          //console.log('newComment',newComment)
        } catch (e) {
          console.error(e);
        }
      }
      if (reply === true) {
        try {
          let result = await axios.post(
            "http://localhost:3001/course/addChildrenComment",
            childSendText,
            { withCredentials: true }
          );
          let newChildrenComment = [...childComment, childSendText];
          setComment(newChildrenComment);
          setTextValue("");
          //console.log("newChildrenComment", newChildrenComment);
          setTextPlaceHolder("留言");
          setReply(false);
        } catch (e) {
          console.error(e);
        }
      }
    }
  }

  function responseUser(e) {
    let name = e.target.id;
    let talkinput = document.getElementById("talkInput");
    if (reply === false) {
      setReply(true);
      e.target.innerText = "取消回覆";
      setTextPlaceHolder(`回覆 ${name} 的留言...`);
      setMainCommentId(e.target.parentElement.id);
      // 點擊回覆時，自動focus到輸入框
      talkinput.focus();
    } else {
      setReply(false);
      e.target.innerText = "回覆";
      setTextPlaceHolder("留言");
    }
  }

  if (
    comment === undefined ||
    childComment === [] ||
    comments === undefined ||
    course_id === undefined ||
    videoId === undefined
  ) {
    return <></>;
  }

  return (
    <>
      <div className="p-3 m-1">
        <div className="d-flex align-items-center Article__area__title">
          <i class="far fa-comment-alt Course__area__icon p-2"></i>
          <h2 className="Course__area__title me-3">留言板</h2>
          <div className="Course__area__Secondtitle">
            共
            <span className="p-2">
              {Number(videoId) === Number(course_id)
                ? Number(
                    comment.filter((item) => {
                      return item.course_id == videoId;
                    }).length
                  )
                : 0}
            </span>
            則
          </div>
        </div>
        <div className="Course__area__TalkHeight">
          {comment.map((item) => {
            if (item.course_id === Number(course_id)) {
              return (
                <CourseSingleTalkParentContent
                  key={item.id}
                  name={item.user_id}
                  content={item.content}
                  course_id={item.course_id}
                  id={item.id}
                  childComment={childComment}
                  responseUser={responseUser}
                  replyText={replyText}
                  image={item.image}
                />
              );
            }
          })}
        </div>
        <div className="Course__area__Talk__InputArea px-4 py-2 my-3">
          <input
            id="talkInput"
            className="input-form-control Course__area__Talk__InputArea__Input"
            placeholder={
              theUser === undefined || theUser === null
                ? "請先登入會員！"
                : textPlaceHolder
            }
            value={textValue}
            readOnly={
              theUser === undefined || theUser === null ? "readonly" : ""
            }
            onChange={(e) => {
              setText(e.target.value);
              setTextValue(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                console.log("有喔");
                submitComment(e);
                setRandom(Math.random());
              }
            }}
          />
          <i
            class={` ${icon} fa-paper-plane ps-2 pointer MainColor`}
            onMouseOver={() => {
              setIcon("fas");
            }}
            onMouseLeave={() => {
              setIcon("far");
            }}
            onClick={(e) => {
              submitComment(e);
              setRandom(Math.random());
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default CourseSingleTalk;
