import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Datetimerange() {
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <DatePicker
            label="Từ ngày"
            value={fromDate}
            onChange={(newValue) => {
              setFromDate(newValue);
              if (toDate && newValue && newValue.isAfter(toDate)) {
                setToDate(null); // reset nếu ngày bắt đầu > ngày kết thúc
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <DatePicker
            label="Đến ngày"
            value={toDate}
            minDate={fromDate} // chặn chọn ngày trước “Từ ngày”
            onChange={(newValue) => setToDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default Datetimerange;
