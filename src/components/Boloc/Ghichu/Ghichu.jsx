import React from "react";
import TextField from "@mui/material/TextField";

const Ghichu = () => {
  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="Tìm kiếm theo ghi chú"
          variant="outlined"
          sx={{
            width: 300,
            "& .MuiInputBase-input": {
              height: "21px",
              padding: "10px 14px",
            },
          }}
        />
      </div>
    </>
  );
};

export default Ghichu;
