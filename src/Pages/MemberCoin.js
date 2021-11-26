import React, { useEffect, useState } from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function MemberCoin() {
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(0);
  const history = useHistory();
  
  useEffect(async () => {
    let response = await axios.get("http://localhost:3001/member/coin-balance", { withCredentials: true})
    if(response.data == "loginerror"){
      history.push("/login");
    } else {
      setBalance(response.data[0].point);
      let result = await axios.get("http://localhost:3001/member/coin", { withCredentials: true})
      console.log(result.data);
      let total = 0;
      for(let i=0; i<result.data.length; i++){
        total = total + result.data[i].gain_point - result.data[i].use_point;
        result.data[i].balance = total;
      }
      setData(result.data);
    }    
    
  }, [])

  const columns: GridColDef[] = [
    { field: "id", headerName: "訂單編號", width: 150 },
    { field: "gain_point", headerName: "獲得點數", width: 150 },
    { field: "use_point", headerName: "使用點數", width: 150 },
    { field: "balance", headerName: "點數餘額", width: 150 },
    { field: "created_at", headerName: "時間", width: 150 },
  ];

  const rows: GridRowsProp = data;

  return (
    <>
      <Navbar />
      <div class="member-container d-flex">
        <MemberLeftBar />
        <div class="member-container">
          <div class="member-coin-box">
            <p style={{ fontSize: "26px" }}>點數總覽</p>
            <div class="d-flex justify-content-between align-items-center">
              <p>紅利點數</p>
              <p style={{ fontSize: "22px" }}>
                <i
                  class="fas fa-dollar-sign"
                  style={{ color: "yellow", marginRight: "10px" }}
                ></i>
                {balance}
              </p>
            </div>
          </div>
          <p style={{ marginTop: "100px", fontSize: "20px" }}>歷史紀錄</p>
          <div class="member-coin-content">
            <DataGrid rows={rows} columns={columns} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemberCoin;
