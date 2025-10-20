import React from "react";
import "../styles/Sodu.css";
function Sodu() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "15px",
            height: "100%",
            width: "100%",
          }}
        >
          <p href="">Số dư ví hiện tại</p>
          <p className="money">20.000.000 VND</p>
        </div>
        <div
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "15px",
            height: "100%",
            width: "100%",
          }}
        >
          <p href="">Tổng thay đổi theo kì</p>
          <p className="money">20.000.000 VND</p>
        </div>
        <div
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "15px",
            height: "100%",
            width: "100%",
          }}
        >
          <p href="">Tổng chi phí theo kì</p>
          <p className="money">20.000.000 VND</p>
        </div>
        <div
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "15px",
            height: "100%",
            width: "100%",
          }}
        >
          <p href="">Tổng thu nhập theo kì</p>
          <pc className="money">20.000.000 VND</pc>
        </div>
      </div>
    </>
  );
}

export default Sodu;
