import React from "react";
import Membericon from "../MemberIcon";

function CourseSingleTalkChildrenContent({ user_id, content,image }) {
  return (
    <div>
      {/* 回覆主留言的留言 */}
      <div className="d-flex ms-5 ps-2 mt-2 row">
        <div className="Course__CourseTalk__img me-3 col-1">
          <Membericon image={image}/>
        </div>
        <div className="col-10 mb-3">
          <div className="Course__CourseTalk__Name">{user_id}</div>
          <div className="Course__CourseTalk__Content">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default CourseSingleTalkChildrenContent;
