import React, { useEffect, useState } from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';
import Button from '@mui/material/Button';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Swal from 'sweetalert2';

function MemberOrder() {
  const[notYet, setNotYet] = useState(0);
  const[already, setAlready] = useState(0);
  const[complete, setComplete] = useState(0);
  //data 是總order列表
  const [data, setData] = useState([]);
  //detail是order_detail
  const [detail, setDetail] = useState([]);
  const [totalPrice, setToatalPrice] = useState(0);
  //進入rate拉出的資料
  const [rateData, setRateData] = useState({});
  

  function turnStatus(id) {
    switch (id) {
      case 1:
        return "未出貨";
      case 2:
        return "已出貨";
      case 3:
        return "已完成";
    }
  }

  function turnShip(id) {
    switch (id) {
      case 1:
        return "宅配";
      case 2:
        return "超商取貨";      
    }
  }

  function turnPay(id) {
    switch (id) {
      case 1:
        return "信用卡";
      case 2:
        return "現金";      
    }
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "訂單編號", width: 100 },
    { field: "created_at", headerName: "時間", width: 150 },
    { field: "ship_status", headerName: "狀態", width: 100 },
    { field: "ship_method", headerName: "運送方式", width: 100 },
    { field: "pay_method", headerName: "付款方式", width: 100 },
    { field: "total_price", headerName: "訂單金額", width: 120 },
    { field: "address", headerName: "地址", width: 350 },
    {
      field: "detail",
      headerName: "查看詳情",
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = async () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
  
          fields.forEach((c) => {
            thisRow[c] = params.getValue(params.id, c);
          });
  
          // let data = JSON.stringify(thisRow, null, 4);
          let id = thisRow.id;
          let result = await axios.post("http://localhost:3001/member/order-detail", {id: id}, {withCredentials: true});          
          $('.member-order-show-box').css("display", "flex");
          console.log(result);
          setDetail(result.data);
          let total = 0;
          for(let i =0; i<result.data.length; i++){
            total += result.data[i].price * result.data[i].amount
          }
          setToatalPrice(total);          
        };
  
        return <Button variant="contained" color="success" onClick={onClick}>查看購買商品</Button>;
      }
    }    
  ];
  
  const rows: GridRowsProp = data

  useEffect( async () => {
    let result = await axios.get("http://localhost:3001/member/order", {withCredentials: true});
    if(result.data == "loginerror"){
      history.push("/login");
    } else {
      setAlready(result.data.already);
      setComplete(result.data.complete);
      setNotYet(result.data.notYet);
      
      for(let i=0; i<result.data.data.length; i++){
        result.data.data[i].ship_status = turnStatus(result.data.data[i].ship_status);
        result.data.data[i].ship_method = turnShip(result.data.data[i].ship_method);
        result.data.data[i].pay_method = turnPay(result.data.data[i].pay_method);
      }
  
      setData(result.data.data);
    }   
    
  }, [])

  const history = useHistory();
  const refresh = () => {
    history.go(0);
  }
  //將送出的評分data
  const ratingPostData={};
  const rate = async (e) => { 
    //設置評分框data
    let id = e.target.id;
    let result = await axios.post("http://localhost:3001/member/rate-check",{id: id}, {withCredentials:true})        
    if(result.data.message){      
      Swal.fire(result.data.message)
    } else {
      const data = {
        id: e.target.id,
        title: e.target.title,
        price: e.target.value,
      }
      setRateData(data);
      $('.member-order-show-box-rate').css("display", "flex");
      $('.member-order-show-box').css("display", "none");
    }     
         
  }

  const ratingChanged = (newRating) => {
    ratingPostData.rate = newRating;
  };

  const postRate = async (e) => {
    let text = $("#ratetext").val();
    ratingPostData.comment = text;
    ratingPostData.id = e.target.id;
    if(!ratingPostData.rate) {
      Swal.fire("請評分")
    } else {
      let result = await axios.post("http://localhost:3001/member/rate-product", ratingPostData, {withCredentials: true});
      Swal.fire(result.data.message).then((res) => {
        history.go(0);
      })
    }
    // console.log(ratingPostData);
    
  }

  const cancelRate = () => {
    $('.member-order-show-box-rate').css("display", "none");
    $('.member-order-show-box').css("display", "flex");
  }

  return (
    <>    
      <Navbar />
      <div className="member-container d-flex">
        <MemberLeftBar />
        <div className="member-container">
          <p style={{ fontSize: "30px", marginTop: "50px" }}>訂單紀錄</p>
          <div className="member-order-boxes d-flex">
            <div
              className="order-boxes"
              style={{ backgroundColor: "rgba(46, 181, 239, 0.8)" }}
            >
              <p>
                <i className="fas fa-clipboard-list"></i>未出貨
              </p>
              <p>{notYet}</p>
            </div>
            <div
              className="order-boxes"
              style={{ backgroundColor: "rgba(239, 200, 46, 0.8)" }}
            >
              <p>
                <i className="fas fa-truck"></i>已出貨
              </p>
              <p>{already}</p>
            </div>
            <div
              className="order-boxes"
              style={{ backgroundColor: "rgba(101, 209, 101, 0.8)" }}
            >
              <p>
                <i className="fas fa-check-circle"></i>已完成
              </p>
              <p>{complete}</p>
            </div>
          </div>

          <div className="member-order-content">
            <DataGrid rows={rows} columns={columns} />
          </div>
        </div>
        <div className="member-order-show-box">
          <div className="member-order-show-box__ct">
            <h3>購買商品清單</h3>
            <hr />
            <table>
              <thead style={{fontSize: "18px"}}>
                <tr>
                  <th>物品名稱</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>功能</th>
                </tr>
              </thead>
              <tbody>
                {
                  detail.map((de) => {                    
                    return (
                      <tr>
                        <td>{de.title}</td>
                        <td>${de.price}</td>
                        <td>{de.amount}</td>
                        <td><Button id={de.id} title={de.title} value={de.price} variant="contained" color="success" size="small" onClick={rate}>評分</Button></td>
                      </tr>
                    )
                  })
                }                
              </tbody>              
            </table>
            <hr style={{border: "1px solid gray", width: "70%", margin: "20px auto"}}/>
            <div style={{width: "60%", margin: "20px auto", textAlign: "right", padding: "10px", fontSize: "20px"}}>
              總價格: ${totalPrice}
            </div>
            <div className="text-center">
              <button style={{marginTop: "20px", padding: "5px 20px", backgroundColor: "#2571e3", color: "white", border: "0"}} onClick={refresh}>返回訂單列表</button>
            </div>            
          </div>
        </div>
        <div className="member-order-show-box-rate">
          <div className="member-order-show-box__rate__ct">
            <div className="member-order-show-box__ct__title">評分表</div>
            <div className="member-order-show-box__rate__ct__ct">
              <div>
                <span>產品名稱:</span>
                <span style={{marginLeft: "30px"}}>{rateData.title}</span>
              </div>
              <div>
                <span>產品價格:</span>
                <span style={{marginLeft: "30px"}}>${rateData.price}</span>
              </div>
              <div>
                <div>
                  <span>評分:</span>                
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>                
              </div>
              <div>
                <div>評論</div>                
                <textarea name="" id="ratetext" rows="5" style={{width: "100%"}}></textarea>
              </div>
              <div className="d-flex justify-content-between member-order__ratebtn">                
                <button style={{backgroundColor: "#ffecd2", color: "black"}} onClick={cancelRate}>取消評論</button>
                <button style={{backgroundColor: "#2571e3", color: "white"}} id={rateData.id} onClick={postRate}>送出評論</button>
              </div>
            </div>
                       
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemberOrder;
