import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";


function CoachCourseAddCard() {
  const [data, setData] = useState([]);
  const [postForm, setPostForm] = useState({});
  const history = useHistory();
  useEffect(async () => {
    let result = await axios.get("http://localhost:3001/coach/select-info", {withCredentials: true});    
    setData(result.data)
  }, [])

  const cancel = () => {
    history.push("/coach-course");
  }

  const postClick = async () => {
    let formData = new FormData();
    formData.append("title", postForm.title);
    formData.append("body_part", postForm.body_part);
    formData.append("level", postForm.level);
    formData.append("content", postForm.content);
    formData.append("video", postForm.video);
    formData.append("image", postForm.image);
    let result = await axios.post("http://localhost:3001/coach/new-course", formData, {withCredentials: true});
    console.log(result.data);
  }
  

  return (
    <div className="member-activity-content">
      <div className="pt-2 d-flex justify-content-between"></div>
      <div className="row" style={{ margin: "50px 150px" }}>
        <div className="">
          <div className="CoachCourseAdd_wrapper">
            <div className="mb-4">
              <label for="">課程名稱</label>
              <input type="text" className="form-control" onChange={(e) => {
                let newData = {...postForm}
                newData.title = e.target.value;
                setPostForm(newData);
              }}/>
            </div>
            <div className="mb-4">
              <label for="">課程分類</label>
              <select type="text" className="form-select" name="type" onChange={(e) => {
                  let newData = {...postForm}
                  newData.body_part = e.target.value;
                  setPostForm(newData);
              }}>
                {
                  data.map((part) => {
                    return (
                      <option value={part.id}>{part.name}</option>
                    )
                  })
                }
                
              </select>
            </div>
            <div className="mb-4">
              <label for="">難易度</label>
              <select type="text" className="form-select" name="level" onChange={(e) => {
                  let newData = {...postForm}
                  newData.level = e.target.value;
                  setPostForm(newData);
              }}>
                <option value="">請選擇</option>
                <option value="2">初級</option>
                <option value="3">中級</option>
                <option value="4">高級</option>
              </select>
            </div>
            <div className="mb-4">
              <label for="">課程概述</label>
              <textarea
                type="text"
                className="form-control"
                name="content"
                id="content"
                cols="30"
                rows="5"
                required
                onChange={(e) => {
                  let newData = {...postForm}
                  newData.content = e.target.value;
                  setPostForm(newData);
              }}
              ></textarea>
            </div>

            <div className="mb-4">
              <label for="file">
                <span>影片上傳</span>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="form-control"
                accept=".mp4"
                onChange={(e) => {                  
                  let newData = {...postForm}
                  newData.video = e.target.files[0];
                  setPostForm(newData);
              }}
              />
            </div>

            <div className="mb-4">
              <label for="file">
                <span>圖片上傳</span>
              </label>
              <input
                type="file"
                name="file"                
                className="form-control"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {                  
                  let newData = {...postForm}
                  newData.image = e.target.files[0];
                  setPostForm(newData);
              }}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-warning me-3" type="button" onClick={cancel}>
                取消
              </button>
              <button className="btn btn-primary " type="button" onClick={postClick}>
                上傳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachCourseAddCard;
