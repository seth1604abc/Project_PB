import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

function CoachEventEditCard() {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState({})
  const [postForm, setPostForm] = useState({});

  useEffect( async () => {
    let result = await axios.get(`http://localhost:3001/event/coach-event-edit/${id}`, {withCredentials: true});
    console.log(result.data);    
    setPostForm(result.data[0])
  }, [])

  const cancel = () => {
    history.push("/coach-event");
  }

  const submitEdit = async () => {
    let formData = new FormData();
    console.log(postForm);
    formData.append("title", postForm.title)
    formData.append("datetime", postForm.datetime)
    formData.append("location", postForm.location)
    formData.append("deadline", postForm.deadline)
    formData.append("limitcount", postForm.limitcount)
    formData.append("content", postForm.content)
    if(postForm.image){
      formData.append("image", postForm.image);
    }
    let result = await axios.post(`http://localhost:3001/event/event-edit/${id}`, formData, {withCredentials: true});
    Swal.fire("修改成功").then(() => {
      history.push("/coach-event");
    })
  }

  


  return (
    <div className="member-activity-content">
      <div className="row" style={{ margin: "50px 150px" }}>
        <div className="">
          <form className="CoachEventEdit_wrapper">            
            <div className="mb-4">
              <label for="">活動圖片修改</label>
              <input
                type="file"
                className="form-control"
                name="CoachEventEdit_banner"
                id="banner"
                onChange={(e) => {
                  let newData = {...postForm};
                  newData.image = e.target.files[0];
                  setPostForm(newData);
                }}
              />
            </div>
            <div className="mb-4">
              <label for="">活動名稱</label>
              <input
                type="text"
                className="form-control"
                name="CoachEventEdit_name"
                defaultValue={postForm.title}
                onChange={(e) => {
                  let newData = {...postForm};
                  newData.title = e.target.value;
                  setPostForm(newData);
                }}
              />
            </div>
            <div className="mb-4">
              <label for="">活動時間</label>
              <input
                type="datetime-local"
                className="form-control"
                name="CoachEventEdit_time"
                // placeholder="YYYY-MM-DD HH:MM"
                defaultValue={postForm.datetime}
                onChange={(e) => {
                  let newData = {...postForm};
                  newData.datetime = e.target.value;
                  setPostForm(newData);
                }}
              />
            </div>
            <div className="mb-4">
              <label for="">活動地點</label>
              <input
                type="text"
                className="form-control"
                name="CoachEventEdit_location"
                defaultValue={postForm.location}
                onChange={(e) => {
                  let newData = {...postForm};
                  newData.location = e.target.value;
                  setPostForm(newData);
                }}
              />
            </div>
            <div className="mb-4">
              <label for="">活動報名截止時間</label>
              <input
                type="datetime-local"
                className="form-control"
                name="CoachEventEdit_singUp_deadline"
                defaultValue={postForm.deadline}
                onChange={(e) => {
                  let newData = {...postForm};
                  newData.deadline = e.target.value;
                  setPostForm(newData);
                }}
              />
            </div>
            <div className="mb-4">
              <label for="">報名人數上限</label>
              <input
                type="text"
                className="form-control"
                name="CoachEventEdit_attendance"                
                defaultValue={postForm.limitcount}
                onChange={(e) => {
                  let newData = {...postForm};
                  newData.limit = e.target.value;
                  setPostForm(newData);
                }}
              />
            </div>
            <div className="mb-4">
              <label for="">活動介紹</label>
              <textarea
                rows="6"
                className="form-control"
                name="CoachEventEdit_info"
                defaultValue={postForm.content}
                onChange={(e) => {
                  let newData = {...postForm};
                  newData.content = e.target.value;
                  setPostForm(newData);
                }}
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-warning me-3" type="button" onClick={cancel}>
                取消
              </button>
              <button className="btn btn-primary " type="button" onClick={submitEdit}>
                修改
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CoachEventEditCard;
