import React from "react";

import Slider from "@mui/material/Slider";

function Khoangia() {
  const [value, setValue] = React.useState([-5000000, 10000000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "100%" }}>
      <p
        style={{
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        Khoảng giá
      </p>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={10000000}
        step={50000}
        sx={{
          height: 3,
          p: 0,
          color: "#12c38b",
          "& .MuiSlider-thumb": {
            width: 16,
            height: 16,
            backgroundColor: "#fff",
            border: "2px solid #12c38b",
          },
          "& .MuiSlider-rail": {
            opacity: 0.3,
            backgroundColor: "#12c38b",
          },
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "12px" }}>{value[0].toLocaleString()} đ</span>
        <span style={{ fontSize: "12px" }}>{value[1].toLocaleString()} đ</span>
      </div>
    </div>
  );
}

export default Khoangia;
