import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";

const Biendong = () => {
  const sampleData = {
    "1D": [0, 0.5, -1.2, 0.8, 1.5, 2.3, 3.1, 3.8, 4.2, 4.5, 4.8, 5],
    "1W": [1, 1.5, 2, -2.3, 3.2, 3.8, 4],
    "1M": [2, 2.5, 3, 3.5, 3.7, 4, 4.5, 5],
    "1Y": [1, 2, 3, 2.5, 3.5, 4, 4.8, 5, 5.2, 5.5],
  };

  const sampleLabels = {
    "1D": [
      "Th10 01, 2025",
      "Th10 02, 2025",
      "Th10 03, 2025",
      "Th10 04, 2025",
      "Th10 05, 2025",
      "Th10 06, 2025",
      "Th10 07, 2025",
      "Th10 08, 2025",
      "Th10 09, 2025",
      "Th10 10, 2025",
      "Th10 11, 2025",
      "Th10 12, 2025",
    ],
    "1W": [
      "Th10 01",
      "Th10 02",
      "Th10 03",
      "Th10 04",
      "Th10 05",
      "Th10 06",
      "Th10 07",
    ],
    "1M": [
      "Tuần 1",
      "Tuần 2",
      "Tuần 3",
      "Tuần 4",
      "Tuần 5",
      "Tuần 6",
      "Tuần 7",
      "Tuần 8",
    ],
    "1Y": ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10"],
  };

  const [timeRange, setTimeRange] = useState("1D");

  const data = sampleData[timeRange];
  const xData = sampleLabels[timeRange];

  return (
    <div>
      <Stack spacing={2}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Số dư tài khoản
          </Typography>

          <ButtonGroup
            sx={{ mb: 2, background: "#12c38b", color: "white" }}
            variant="outlined"
          >
            {["1D", "1W", "1M", "1Y"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "contained" : "outlined"}
                onClick={() => setTimeRange(range)}
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    color: "white",
                    borderColor: "white",
                    backgroundColor: "#10a678",
                  },
                }}
              >
                {range}
              </Button>
            ))}
          </ButtonGroup>

          <LineChart
            xAxis={[
              {
                data: xData,
                scaleType: "point",
                label: "Thời gian",
              },
            ]}
            yAxis={[
              {
                label: "Giá trị (VND)",
                valueFormatter: (v) =>
                  v >= 0
                    ? `${v.toLocaleString("vi-VN")} VND`
                    : `-${Math.abs(v).toLocaleString("vi-VN")} VND`,
              },
            ]}
            series={[
              {
                data,
                color: "#00e676", // xanh tươi kiểu ngân hàng
                area: true,
                showMark: true,
                curve: "monotoneX",
                areaBaseline: 0,
              },
            ]}
            grid={{ vertical: false }}
            height={350}
          />
        </Paper>
      </Stack>
    </div>
  );
};

export default Biendong;
