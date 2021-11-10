import React from "react";

function CoachCourseAddCard() {
    return(
    <div className="member-activity-content">
    <div className="pt-2 d-flex justify-content-between"> 
    </div>
    <div className="row" style={{margin: "50px 150px"}} >
        <div className="">
            <form className="CoachCourseAdd_wrapper">
              
                <div className="mb-4">
                  <label for="">課程名稱</label>
                    <input type="text" className="form-control" name="name" required />
                </div>
                <div className="mb-4">
                    <label for="">課程分類</label>
                    <select type="text" className="form-select" name="type">
                        <option value=""></option>
                    </select>
                </div>
                <div className="mb-4">
                    <label for="">難易度</label>
                    <select type="text" className="form-select" name="level">
                            <option value=""></option>
                    </select>
                </div>
                <div className="mb-4">
                   <label for="">課程概述</label>
                    <textarea type="text" className="form-control" name="content" id="content" cols="30" rows="5" required></textarea>
                </div>
               
                <div className="mb-4">
                    <label for="file"><span>影片上傳</span></label>
                    <input type="file" name="file" id="file" className="form-control"/>
                </div>
                <button className="btn btn-primary me-3" type="submit">新增</button>
                <button className="btn btn-warning" type="submit">取消</button>
            </form>
        </div>
    </div>

</div>
)
    
}

export default CoachCourseAddCard;