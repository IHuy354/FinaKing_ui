import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(18, 195, 139)",
        height: "50px",
      }}
      className="nav-main"
    >
      <NavLink to="/" end>Bảng điều khiển</NavLink>
      <NavLink to="/transactions">Giao dịch</NavLink>
      <NavLink to="/stats">Thống kê</NavLink>
      <NavLink to="/settings">Cài đặt</NavLink>
    </nav>
  );
}
