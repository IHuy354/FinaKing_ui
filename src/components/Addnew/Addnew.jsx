import React, { useState } from "react";
import { Button } from "@mui/material";
import AddnewModal from "./AddnewModal/AddnewModal";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Addnew() {
  //add new
  const [openGiaodich, setOpenGiaoDich] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const handleAddTransaction = (data) => {
    setTransactions((prev) => [...prev, { id: Date.now(), ...data }]);
    setOpenGiaoDich(false);
  };
  return (
    <div>
      <Button
        sx={{
          mb: 2,
          mt: 2,
          backgroundColor: "rgb(18, 195, 139)",
          "&:hover": { backgroundColor: "rgb(16, 172, 123)" },
        }}
        variant="contained"
        onClick={() => setOpenGiaoDich(true)}
      >
        <AddBoxIcon sx={{ mr: 1 }} />
        Thêm giao dịch
      </Button>

      {/*gọi modal  */}
      <AddnewModal
        open={openGiaodich}
        onClose={() => setOpenGiaoDich(false)}
        onSubmit={handleAddTransaction}
      />
    </div>
  );
}

export default Addnew;
