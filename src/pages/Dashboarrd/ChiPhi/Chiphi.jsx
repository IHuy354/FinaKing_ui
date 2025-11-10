import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const Chiphi = () => {
  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];

  const size = {
    width: 200,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
  return (
    <>
      <div
        style={{
          background: "white",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid rgba(0, 0, 0, 0.16)",
        }}
      >
        <div>
          <div style={{ padding: "18px" }}>
            {/* top  */}
            <div>
              <h1 style={{ fontWeight: "600", fontSize: "14px" }}>
                Thu nhập theo kì
              </h1>
              <p style={{ color: "#bbcdd8", fontSize: "12px" }}>Th10 01–31</p>
            </div>

            {/* chart */}
            <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
              <PieCenterLabel>15,200,000 ₫</PieCenterLabel>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chiphi;
