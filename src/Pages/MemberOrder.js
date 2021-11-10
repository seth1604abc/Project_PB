import React from "react";
import MemberLeftBar from "../components/MemberLeftBar";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MemberOrder() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "訂單編號", width: 150 },
    { field: "time", headerName: "時間", width: 150 },
    { field: "status", headerName: "狀態", width: 100 },
    { field: "trans", headerName: "運送方式", width: 150 },
    { field: "paymethod", headerName: "付款方式", width: 100 },
    { field: "payment", headerName: "訂單金額", width: 150 },
    { field: "addr", headerName: "地址", width: 300 },
  ];

  const rows: GridRowsProp = [
    {
      id: 20211104,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
    {
      id: 20211105,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
    {
      id: 20211104,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
    {
      id: 20211104,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
    {
      id: 20211104,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
    {
      id: 20211104,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
    {
      id: 20211104,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
    {
      id: 20211104,
      time: "2021/11/04",
      status: "運送中",
      trans: "7-11便利商店",
      paymethod: "信用卡",
      payment: "NT $3000",
      addr: "台北市總統路總統府1號",
    },
  ];

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
                <i className="fas fa-clipboard-list"></i>已訂貨
              </p>
              <p>3</p>
            </div>
            <div
              className="order-boxes"
              style={{ backgroundColor: "rgba(239, 200, 46, 0.8)" }}
            >
              <p>
                <i className="fas fa-truck"></i>已出貨
              </p>
              <p>5</p>
            </div>
            <div
              className="order-boxes"
              style={{ backgroundColor: "rgba(101, 209, 101, 0.8)" }}
            >
              <p>
                <i className="fas fa-check-circle"></i>已完成
              </p>
              <p>6</p>
            </div>
          </div>

          <div className="member-order-content">
            <DataGrid rows={rows} columns={columns} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemberOrder;
