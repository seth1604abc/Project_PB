import React from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MemberCoin() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "訂單編號", width: 150 },
    { field: "gain", headerName: "獲得點數", width: 150 },
    { field: "used", headerName: "使用點數", width: 150 },
    { field: "balance", headerName: "點數餘額", width: 150 },
    { field: "time", headerName: "時間", width: 150 },
  ];

  const rows: GridRowsProp = [
    { id: 20211104, gain: 20, used: "10", balance: 189, time: "2021/11/04" },
    { id: 20211104, gain: 20, used: "10", balance: 189, time: "2021/11/04" },
    { id: 20211104, gain: 20, used: "10", balance: 189, time: "2021/11/04" },
    { id: 20211104, gain: 20, used: "10", balance: 189, time: "2021/11/04" },
    { id: 20211104, gain: 20, used: "10", balance: 189, time: "2021/11/04" },
    { id: 20211104, gain: 20, used: "10", balance: 189, time: "2021/11/04" },
    { id: 20211104, gain: 20, used: "10", balance: 189, time: "2021/11/04" },
  ];

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
                500
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
