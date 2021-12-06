import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoachLeftBar from "../components/CoachLeftBar";
import Swal from "sweetalert2";
import axios from "axios";

function CoachInfo() {
  const [{ image, alt }, setImage] = useState({
    image: "",
    alt: "",
  });
  const [uploadImage, setUploadImage] = useState(null);
  const [name, setName] = useState("");
  const history = useHistory();

  useEffect(async () => {
    let result = await axios.get("http://localhost:3001/coach/info", {
      withCredentials: true,
    });
    setName(result.data);
  });

  const handleImage = async (e) => {
    if (e.target.files[0]) {
      let data = URL.createObjectURL(e.target.files[0]);
      let name = e.target.files[0].name;
      let result = await setImage({
        image: data,
        alt: name,
      });
      const formData = new FormData();
      formData.append("member", e.target.files[0], e.target.files[0].name);
      setUploadImage(formData);
    }
  };

  const uploadPost = () => {
    if (uploadImage != null) {
      Swal.fire({
        text: "確定要更改大頭貼?",
        showDenyButton: true,
        confirmButtonText: "確定",
        denyButtonText: "取消",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let res = await axios.post(
            "http://localhost:3001/member/formdata",
            uploadImage,
            { withCredentials: true }
          );
          Swal.fire("上傳成功");
          history.go(0);
        }
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="member-container d-flex">
        <CoachLeftBar />
        <div
          className="member-container"
          style={{ height: "120vh", position: "relative" }}
        >
          <div className="coach-content d-flex align-items-center">
            <div className="coach-content__pic">
              <div className="member-main-info__img__ct">
                <img src={image} alt={alt} width="100%" height="100%" style={{objectFit:"contain"}}/>
              </div>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                id="photo"
                onChange={handleImage}
              />
              <label htmlFor="photo" style={{cursor:"pointer"}}>
                <i class="fas fa-plus" style={{ marginRight: "5px" }}></i>
                更改大頭貼
              </label>
              <button onClick={uploadPost}>上傳大頭貼</button>
            </div>

            <div className="coach-content__info">
              <div className="coach-content__info__data d-flex justify-content-between">
                <div className="coach-content__info__data__title">姓名</div>
                <div className="coach-content__info__data__data">{name}</div>
              </div>
              <div className="coach-content__info__data d-flex justify-content-between">
                <div className="coach-content__info__data__title">資歷</div>
                <div className="coach-content__info__data__data">6年</div>
              </div>
              <div className="coach-content__info__data d-flex justify-content-between">
                <div className="coach-content__info__data__title">擅長領域</div>
                <div className="coach-content__info__data__data">
                  <p>手部訓練</p>
                  <p>腿部訓練</p>
                  <p>背部訓練</p>
                </div>
              </div>
              <div
                className="coach-content__info__data d-flex justify-content-between"
                style={{ width: "70%" }}
              >
                <div
                  className="coach-content__info__data__title"
                  style={{ paddingLeft: "70px" }}
                >
                  自我簡介
                </div>
                <div
                  className="coach-content__info__data__data"
                  style={{ width: "200px" }}
                >
                  <p>私人教練能讓您事半功倍</p>

                  <p>用最少的時間達成您心目中的體態</p>

                  <p>讓每次的努力不會白費</p>

                  <p>我們擁有全台最大的教練培訓團隊</p>

                  <p>
                    透過不停的突破訓練、進修課程、考取證照，成為一位專業的私人教練
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoachInfo;
