import {useState} from "react";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function CoachEventAddCard() {
    

    const [eventName, setEventName] = useState('')
    const [eventTime, setEventTime] = useState('')
    const [eventLocation, setEventLocation] = useState('')
    const [eventQuotaLimit, setEventQuotaLimit] = useState('')
    const [eventDeadline, setEventDeadline] = useState('')
    const [eventIntro, setEventIntro] = useState('')
    const [duration, setDuration] = useState(0);
    const[image, setImage] = useState(null);

    const submitEvent = async () => {
      let formData = new FormData();
      formData.append("title", eventName);
      formData.append("datetime", eventTime);
      formData.append("duration", duration);
      formData.append("location", eventLocation);
      formData.append("deadline", eventDeadline);
      formData.append("limit", eventQuotaLimit);
      formData.append("content", eventIntro);
      formData.append("image", image);
      
      let result = await axios.post("http://localhost:3001/event/coach-event-add", formData, {withCredentials: true});
      
   
    }

       
   

  return (
    <div className="member-activity-content ">
      <div className="row" style={{ margin: "50px 150px" }}>
        <div className="">
          <div className="CoachEventAdd_wrapper">
            
            <div className="mb-4">
              <label for="">活動圖片新增</label>
              <input
                type="file"
                className="form-control"
                name="CoachEventAdd_banner"
                id="banner"
                onChange={(e) => {setImage(e.target.files[0])}}
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
              <label for="">活動時長</label>
              <input
                type="number"
                className="form-control"
                min="1"                
                onChange = {(e)=>{setDuration(e.target.value)}}
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
                onChange={(e) => {setEventIntro(e.target.value)}}
              ></textarea>
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
