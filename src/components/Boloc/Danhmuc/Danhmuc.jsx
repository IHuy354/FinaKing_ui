import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import CategoryIcon from "../../Icon/CategoryIcon";

function Danhmuc() {
  const names = [
    "Tất cả danh mục",
    "Chuyển khoản đi",
    "Chuyển khoản đến",
    "Đồ ăn & Đồ uống",
    "Di chuyển",
    "Hóa đơn & Phí",
    "Lương",
    "Giải trí",
    "Nhà cửa",
    "Gia đình & Cá nhân",
    "Xe cộ",
    "Chăm sóc sức khỏe",
    "Bán đồ cũ",
  ];
  const [personName, setPersonName] = React.useState(names);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.includes("Tất cả danh mục")) {
      // Nếu trước đó đã chọn hết -> bỏ chọn tất cả
      if (personName.length === names.length) {
        setPersonName([]);
      } else {
        setPersonName(names); // chọn hết
      }
      return;
    }

    // 2. Nếu bỏ tick 1 mục -> bỏ tick "Tất cả"
    if (personName.includes("Tất cả danh mục")) {
      setPersonName(value.filter((v) => v !== "Tất cả danh mục"));
      return;
    }

    // 3. Nếu tick hết tất cả mục con -> tự động tick "Tất cả"
    if (value.length === names.length - 1) {
      setPersonName(names);
    } else {
      setPersonName(value);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "300px" }}>
        <InputLabel id="demo-multiple-checkbox-label" shrink>
          Theo danh mục
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Theo danh mục" />}
          renderValue={(selected) => {
            if (selected.length === names.length) {
              return "Tất cả danh mục";
            }
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          sx={{
            height: "40px",
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <div style={{ marginRight: "7px" }}>
                <CategoryIcon category={name} size={30} />
              </div>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Danhmuc;
