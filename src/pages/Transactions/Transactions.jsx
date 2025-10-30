import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Sodu from "../../components/Sodu";
import Boloc from "../../components/Boloc/Boloc";
import { transactionList } from "../../services/mockdata";
import Backdrop from "@mui/material/Backdrop";
import AddnewModal from "./AddnewModal/AddnewModal";
import { Button } from "@mui/material";
import Addnew from "../../components/Addnew/Addnew";

const categoryIcons = {
  "Đồ ăn & Đồ uống": "🍜",
  "Di chuyển": "🛵",
  "Hóa đơn & Phí": "💡",
  Lương: "💰",
  "Giải trí": "🎮",
  "Nhà cửa": "🏠",
  "Gia đình & Cá nhân": "👪",
  "Xe cộ": "🚗",
  "Chăm sóc sức khỏe": "💊",
  "Bán đồ cũ": "🛍️",
};

export default function Transactions() {
  const [openImage, setOpenImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  //add new
  const [openGiaodich, setOpenGiaoDich] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const handleAddTransaction = (data) => {
    setTransactions((prev) => [...prev, { id: Date.now(), ...data }]);
    setOpenGiaoDich(false);
  };

  const formatCurrency = (amount) =>
    amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div>
      {/* Nút thêm giao dịch */}
      <Addnew />
      {/* Bộ lọc  */}
      <Boloc />
      {/* Số dư ví hiện tại và các biến thể */}
      <Sodu />

      {/* Bảng dữ liệu */}
      <TableContainer
        component={Paper}
        sx={{ mt: 2, borderRadius: 2, boxShadow: 2 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="transaction table">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Danh mục</TableCell>
              <TableCell align="center">Ngày</TableCell>
              <TableCell align="center">Ghi chú</TableCell>
              <TableCell align="center">Tần suất</TableCell>
              <TableCell align="center">Ảnh</TableCell>
              <TableCell align="right">Số tiền</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {transactionList.map((t) => (
              <TableRow
                key={t.id}
                hover
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: t.type === "income" ? "#eaf7ea" : "#fff8f8",
                }}
              >
                {/* Danh mục + loại giao dịch */}
                <TableCell component="th" scope="row">
                  {categoryIcons[t.category] || "💸"}{" "}
                  <strong>{t.category}</strong>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    {t.type === "income" ? "Thu nhập" : "Chi tiêu"}
                  </div>
                </TableCell>

                {/* Ngày */}
                <TableCell align="center">{formatDate(t.date)}</TableCell>

                {/* Ghi chú */}
                <TableCell align="center">{t.note}</TableCell>

                {/* Tần suất */}
                <TableCell align="center">
                  {t.repeat === "never"
                    ? "Một lần"
                    : t.repeat === "monthly"
                    ? "Hàng tháng"
                    : t.repeat === "weekly"
                    ? "Hàng tuần"
                    : t.repeat === "daily"
                    ? "Hàng ngày"
                    : "Khác"}
                </TableCell>

                {/* Ảnh minh họa */}
                <TableCell align="center">
                  <img
                    src={t.imageUrl}
                    alt={t.category}
                    onClick={() => {
                      setSelectedImage(t.imageUrl);
                      setOpenImage(true);
                    }}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      cursor: "pointer",
                      transition: "0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
                  />
                </TableCell>

                {/* Số tiền */}
                <TableCell
                  align="right"
                  sx={{
                    color: t.type === "income" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {formatCurrency(t.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Backdrop xem ảnh chi tiết */}
      <Backdrop
        open={openImage}
        onClick={() => setOpenImage(false)}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "#fff",
          backdropFilter: "blur(4px)",
        }}
      >
        <img
          src={selectedImage}
          alt="Ko có ảnh"
          style={{
            maxHeight: "90%",
            maxWidth: "90%",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
        />
      </Backdrop>
    </div>
  );
}
