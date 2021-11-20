import {useState} from "react";
import Axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function CoachEventAddCard() {
    const  modules  = { 
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const [eventName, setEventName] = useState('')
    const [eventTime, setEventTime] = useState('')
    const [eventLocation, setEventLocation] = useState('')
    const [eventQuotaLimit, setEventQuotaLimit] = useState('')
    const [eventDeadline, setEventDeadline] = useState('')
    const [eventIntro, setEventIntro] = useState('')

    const submitEvent =() => {
      Axios.get("http://localhost:3001/event/coach-event-add", {
        title: eventName,
        datetime: eventTime,
        location: eventLocation,
        deadline: eventDeadline,
        limit: eventQuotaLimit,
        content: eventIntro
      }).then(()=>{
        alert("successful insert");
      })
      // console.log(eventName);
   
    }
  return (
    <div className="member-activity-content ">
      <div className="row" style={{ margin: "50px 150px" }}>
        <div className="">
          <div className="CoachEventAdd_wrapper">
            <div className="mb-4 CoachEventAdd_banner_preview"></div>
            <div className="mb-4">
              <label for="">活動圖片新增</label>
              <input
                type="file"
                className="form-control"
                name="CoachEventAdd_banner"
                id="banner"
              />
            </div>
            <div className="mb-4">
              <label for="">活動名稱</label>
              <input
                type="text"
                className="form-control"
                name="CoachEventAdd_name"
                onChange = {(e)=>{setEventName(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label for="">活動時間</label>
              <input
                type="datetime-local"
                className="form-control"
                name="CoachEventEdit_time"
                placeholder="YYYY-MM-DD HH:MM"
                onChange = {(e)=>{setEventTime(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label for="">活動地點</label>
              <input
                type="text"
                className="form-control"
                name="CoachEventAdd_location"
                onChange = {(e)=>{setEventLocation(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label for="">活動報名截止時間</label>
              <input
                type="datetime-local"
                className="form-control"
                name="CoachEventAdd_singUp_deadline"
                placeholder="YYYY-MM-DD HH:MM"
                onChange = {(e)=>{setEventDeadline(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label for="">報名人數上限</label>
              <input
                type="number"
                className="form-control"
                name="CoachEventAdd_attendance"
                min="0"
                onChange = {(e)=>{setEventQuotaLimit(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label for="">活動介紹</label>
              <textarea
                rows="6"
                className="form-control"
                name="CoachEventAdd_info"
               
              ></textarea>
            </div>
            <div className="editor">
              <h2>Quill</h2> 
              <ReactQuill 
              theme="snow"   
              modules={modules}
              onChange = {(e)=>{setEventIntro(e.target.value)}} />
              {/* onChange={setValue}  */}
              {/* onChange = {(e)=>{setEventIntro(e.target.value)}} */}
            </div>
            <div className="d-flex justify-content-end">
            <button className="btn btn-warning me-3" type="button">
              取消
            </button>
            <button className="btn btn-primary " type="button" onClick={submitEvent}>
              新增
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoachEventAddCard;
