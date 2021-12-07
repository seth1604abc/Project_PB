import React, { useEffect, useState } from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';
import {ZipCodeTW} from "zipcode-tw-react";
import { useHistory, Link } from 'react-router-dom';
import $ from 'jquery';
import Swal from "sweetalert2";

function MemberInfo() {
  const [data, setData] = useState({});
  const [{image, alt}, setImage] = useState({
    image: "",
    alt: "",
  });
  const [uploadImage, setUploadImage] = useState(null);

  useEffect(async () => {
    let result = await axios.get("http://localhost:3001/member/info", { withCredentials: true });
    if(result.data == "loginerror"){
      history.push("/login");
    }
    let res = await setData(result.data[0]);   
    
  }, [])

  // document.getElementsByClassName("countyClass")[0].value = data.city;
  // document.getElementsByClassName("districtClass")[0].value = data.area;

  const history = useHistory();
  const cancelReload = () => {
    history.go(0);
  }
  
  const modify = () => {    
    let modifyData = {};
    modifyData.first_name = $("input[name='first_name']").val();
    modifyData.last_name = $("input[name='last_name']").val();
    modifyData.birth = $("input[name='birth']").val();
    modifyData.phone = $("input[name='phone']").val();
    modifyData.email = $("input[name='email']").val();
    modifyData.address = $("input[name='address']").val();
    modifyData.city = $(".countyClass").val();
    modifyData.area = $(".districtClass").val();    
    
    Swal.fire({
      title: "提交修改資訊",
      text: "確定要修改以上個人資訊嗎",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消",
    }).then(async (result) => {
        if(result.isConfirmed){
          let response = axios.post("http://localhost:3001/member/info", modifyData, {
            withCredentials: true,            
          });
          if(response){
            Swal.fire("修改成功");
          }
          
        }
    })
  }

  const redeem = async () => {
    let data = {}
    data.code = document.getElementsByName("redeem")[0].value;
    let res = await axios.post("http://localhost:3001/member/redeem", data, {withCredentials: true});
    let message = res.data.message;
    Swal.fire({
      text: message,
      showDenyButton: false,
      confirmButtonText: "確定"
    }).then((result) => {
      if(result.isConfirmed) {
        history.go(0);
      }
    })
    
  }
  
  const cancelMember = () => {    
    
    Swal.fire({
      title: "確定要取消訂閱?",
      text: "取消訂閱後將不會退還任何款項",      
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消",
    }).then((res) => {
      if(res.isConfirmed) {
        let result = axios.get("http://localhost:3001/member/cancel", {withCredentials: true});
        Swal.fire({
          title: "取消成功",
          showDenyButton: false,
          confirmButtonText: "確定",
        }).then((result) => {
          if(result.isConfirmed) {
            history.go(0);
          }
        })
      }
    })
  }

  const handleImage = async (e) => {
    if(e.target.files[0]) {
      let data = URL.createObjectURL(e.target.files[0]);
      let name = e.target.files[0].name;
      let result = await setImage({
        image: data,
        alt: name,
      })
      const formData = new FormData();      
      formData.append('member', e.target.files[0], e.target.files[0].name);            
      setUploadImage(formData);
      
    }    
  }

  const uploadPost = () => {    
    if(uploadImage != null) {      
      Swal.fire({
        text: "確定要更改大頭貼?",
        showDenyButton: true,
        confirmButtonText: "確定",
        denyButtonText: "取消",
      }).then( async (result) => {
        if(result.isConfirmed){
          let res = await axios.post("http://localhost:3001/member/formdata", uploadImage, {withCredentials: true})
          Swal.fire("上傳成功");
          history.go(0);
        }
      })
    }
  }

  const handleCountyChange = (e) => {
    const {countyValue} = e;
    let newData = {...data}
    newData.city = countyValue;
    setData(newData);
  }

  const handleDistrictChange = (e) => {    
    const {districtValue} = e;
    let newData = {...data};
    newData.area = districtValue;    
    setData(newData);
  }

  return (
    <>
      <Navbar />
      <div className="member-container d-flex">
        <MemberLeftBar />
        <div className="member-container d-flex justify-content-center">
          <div className="member-container__content">
            <div className="member-container__content__title">個人資料</div>
            <div className="member-main-info d-flex">
              <div className="member-main-info--l w-50">
                <div className="member-main-info__img mt-3">
                  <div className="member-main-info__img__ct">
                    <img src={image} alt={alt} />
                  </div>
                  <input type="file"
                    accept=".png, .jpg, .jpeg"
                    id="photo"
                    onChange={handleImage}
                  />
                  <label htmlFor="photo"><i class="fas fa-plus" style={{marginRight: "5px"}}></i>更改大頭貼</label>
                  <button onClick={uploadPost}>上傳大頭照</button>
                </div>
                
                <div className="w-75 m-auto member-main-info--l__ct">
                  <p>個人資訊</p>
                  <label for="">姓氏</label>
                  <br />
                  <input type="text" defaultValue={data.first_name} name="first_name"/>
                  <br />
                  <label for="">名字</label>
                  <br />
                  <input type="text" defaultValue={data.last_name} name="last_name"/>
                  <br />
                  <label for="">生日</label>
                  <br />
                  <input type="date" defaultValue={data.birth} name="birth"/>
                </div>
              </div>
              <div className="w-50 member-main-info--r">
                <div className="w-75 m-auto member-main-info--l__ct">
                  <p>聯絡方式</p>
                  
                  <label for="">電話(手機)</label>
                  <br />
                  <input type="text" defaultValue={data.phone} name="phone"/>
                  <br />
                  <label for="">電子信箱</label>
                  <br />
                  <input type="text" defaultValue={data.email} name="email"/>
                  <br />
                  <label for="">地址</label>
                  <br />  

                  <ZipCodeTW displayType="text" zipStyle={{display: "none"}} districtStyle={{marginLeft: "20px"}} districtClass="districtClass" countyClass="countyClass" countyValue={data.city} handleChangeCounty={handleCountyChange} districtValue={data.area} handleChangeDistrict={handleDistrictChange}/>

                  <input type="text" style={{marginTop: "15px"}} defaultValue={data.address} name="address"/>
                  <div className="member-main-info--l__ct__btn">
                    <button onClick={modify}>提交修改</button>
                    <button style={{marginLeft: "20px", backgroundColor: "#ffecd2", color: "black"}} onClick={cancelReload}>取消修改</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="member-code h-30 w-100 mt-5">
            {
              data.endtime != null ? (
                <div className="member-code__ct d-flex justify-content-around m-auto">                              
                  <div>
                    <p>會員狀態:</p>
                    <p style={{marginTop: "10px"}}>會員到期日:</p>
                  </div>
                  <div >
                    <p>訂閱會員</p>
                    <p style={{marginTop: "10px"}}>{data.endtime}</p>
                  </div>
                  <div>
                    <div>
                      <button style={{padding: "5px 20px", backgroundColor: "#09203f", borderRadius: "5px", border: "0px"}}><Link to="/course" style={{color: "#ffecd2",textDecoration: "none", fontSize: "14px"}}>前往課程</Link></button>
                    </div>
                    <div style={{ marginTop: "5px" }}>
                      <button className="member-upgrade-btn" onClick={cancelMember}>取消訂閱</button>
                    </div>
                  </div>               
                </div>
              ) : (
                <div className="member-code__ct d-flex justify-content-around m-auto">                              
                  <div>
                    <p>會員狀態:</p>
                    <p style={{marginTop: "10px"}}>禮物卡兌換:</p>
                  </div>
                  <div >
                    <p>一般會員</p>
                    <input type="text"  style={{marginTop: "10px"}} name="redeem"/>
                  </div>
                  <div>
                    <div>
                      <button className="member-upgrade-btn" style={{padding: "0"}}><Link to="/subscribe">升級會員</Link></button>
                    </div>
                    <div style={{ marginTop: "5px" }}>
                      <button className="member-upgrade-btn" onClick={redeem}>兌換</button>
                    </div>
                  </div>               
                </div>
              )
            }
              
            </div>
          </div>
        </div>
      </div>
      <Footer />      
    </>
  );
}

export default MemberInfo;

