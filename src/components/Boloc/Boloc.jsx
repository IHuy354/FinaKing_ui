import React from "react";
import Danhmuc from "./danhmuc/Danhmuc";
import Ghichu from "./Ghichu/Ghichu";
import Datetimerange from "./Datetimerange/Datetimerange";
import Khoangia from "./Khoanggia/Khoangia";

export default function Boloc() {
  return (
    <>
      <div
        style={{
          background: "white",
          marginBottom: "20px",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <div style={{ padding: "7px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginLeft: "10px",
              marginBottom: "12px",
            }}
          >
            Bộ lọc
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              width: "97%",
            }}
          >
            <Danhmuc />
            <Ghichu />
            {/* <Datetimerange /> */}
            <Khoangia />
          </div>
        </div>
      </div>
    </>
  );
}
