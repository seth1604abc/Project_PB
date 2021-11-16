import React from "react";

function CoachEventEditCard() {
  return (
    <div className="member-activity-content">
      <div className="row" style={{ margin: "50px 150px" }}>
        <div className="">
          <form className="CoachEventEdit_wrapper">
            <div className="mb-4 CoachEventEdit_banner_preview"></div>
            <div className="mb-4">
              <label for="">活動圖片修改</label>
              <input
                type="file"
                className="form-control"
                name="CoachEventEdit_banner"
                id="banner"
              />
            </div>
            <div className="mb-4">
              <label for="">活動名稱</label>
              <input
                type="text"
                className="form-control"
                name="CoachEventEdit_name"
              />
            </div>
            <div className="mb-4">
              <label for="">活動時間</label>
              <input
                type="datetime-local"
                className="form-control"
                name="CoachEventEdit_time"
                placeholder="YYYY-MM-DD HH:MM"
              />
            </div>
            <div className="mb-4">
              <label for="">活動地點</label>
              <input
                type="text"
                className="form-control"
                name="CoachEventEdit_location"
              />
            </div>
            <div className="mb-4">
              <label for="">活動報名截止時間</label>
              <input
                type="datetime-local"
                className="form-control"
                name="CoachEventEdit_singUp_deadline"
                placeholder="YYYY-MM-DD HH:MM"
              />
            </div>
            <div className="mb-4">
              <label for="">報名人數上限</label>
              <input
                type="number"
                className="form-control"
                name="CoachEventEdit_attendance"
                min="0"
              />
            </div>
            <div className="mb-4">
              <label for="">活動介紹</label>
              <textarea
                rows="6"
                className="form-control"
                name="CoachEventEdit_info"
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-warning me-3" type="submit">
                取消
              </button>
              <button className="btn btn-primary " type="submit">
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
