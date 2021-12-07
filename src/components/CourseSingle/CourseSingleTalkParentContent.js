import React from "react";
import Membericon from "../MemberIcon";
import CourseSingleTalkChildrenContent from "./CourseSingleTalkChildrenContent";
import { useState, useEffect } from "react";

function CourseSingleTalkParentContent({
  name,
  content,
  id,
  childComment,
  responseUser,
  replyText,
  image,
}) {
  const [child, setChild] = useState();
  // const [text, setText] = useState();
  useEffect(() => {
    setChild(childComment);
    // setText(replyText)
  }, [childComment,replyText]);
  if (child === undefined) {
    return <></>;
  }

  
  return (
    <div key={id}>
      <div className="m-3">
        <div className="d-flex row w100">
          <div className="col Course__CourseTalk__MainImg">
            <Membericon image={image} />
          </div>
          <div className="col-10">
            <div className="Course__CourseTalk__Name normalMouse">{name}</div>
            <div className="Course__CourseTalk__Content">{content}</div>
            <div>
              <p className="text-end me-3 mt-1 fz08" id={id}>
                <span className="pe-3 targetid normalMouse">
                  {Number(
                    child.filter((item) => {
                      return item.course_comment_id === id;
                    }).length
                  )}
                  則留言
                </span>
                <span id={name} className="pointer" onClick={responseUser}>
                  {replyText}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          {child.map((item) => {
            if (item.course_comment_id === id) {
              return (
                <CourseSingleTalkChildrenContent
                  key={item.id}
                  user_id={item.user_id}
                  content={item.content}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseSingleTalkParentContent;
