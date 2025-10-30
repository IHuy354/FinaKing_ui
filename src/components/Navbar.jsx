import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav
      style={{
        background: "rgb(18, 195, 139)",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Avatar alt="lỗi logo" src="../../public/logo.jpg" />
        <p style={{ fontWeight: "530", color: "white", fontSize: "21px" }}>
          Finaking
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        className="nav-main"
      >
        <NavLink style={{ fontSize: "18px", fontWeight: "bold" }} to="/" end>
          Bảng điều khiển
        </NavLink>
        <NavLink
          style={{ fontSize: "18px", fontWeight: "bold" }}
          to="/transactions"
        >
          Giao dịch
        </NavLink>
        <NavLink style={{ fontSize: "18px", fontWeight: "bold" }} to="/stats">
          Trợ lý tài chính
        </NavLink>
      </div>

      <Button
        onClick={handleClick}
        style={{ display: "flex", gap: "7px" }}
        sx={{ color: "white" }}
      >
        <Avatar alt="lỗi logo" src="../../public/LogoLHU_Daf.png" />
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "13px", fontWeight: "bold" }}>Huy Lê</p>
          <ExpandMoreIcon />
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/settings">Cài đặt</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>Tài khoản</MenuItem>
        <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
      </Menu>
    </nav>
  );
}
