import React from "react";

const colors = {
  "Đồ ăn & Đồ uống": "#FFB74D",
  "Di chuyển": "#90CAF9",
  "Hóa đơn & Phí": "#E57373",
  Lương: "#81C784",
  "Giải trí": "#BA68C8",
  "Nhà cửa": "#A1887F",
  "Gia đình & Cá nhân": "#FF8A65",
  "Xe cộ": "#4FC3F7",
  "Chăm sóc sức khỏe": "#F06292",
  "Bán đồ cũ": "#FFD54F",
  default: "#BDBDBD",
};

const icons = {
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
  default: "💸",
};

export default function CategoryIcon({ category, size = 40 }) {
  if (category === "Tất cả danh mục") return null;
  const bg = colors[category] || colors.default;
  const icon = icons[category] || icons.default;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: size * 0.55,
        color: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        userSelect: "none",
        lineHeight: 1,
      }}
    >
      {icon}
    </div>
  );
}
