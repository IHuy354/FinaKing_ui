import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CategoryIcon from "../../../Icon/CategoryIcon";

const Selectnew = () => {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const categories = [
    "Đồ ăn & Đồ uống",
    "Di chuyển",
    "Hóa đơn & Phí",
    "Giải trí",
    "Nhà cửa",
    "Gia đình & Cá nhân",
    "Xe cộ",
    "Chăm sóc sức khỏe",
    "Bán đồ cũ",
  ];

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">
          Danh mục
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Danh mục"
         
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CategoryIcon category={cat} size={30} />
                <span>{cat}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Selectnew;
