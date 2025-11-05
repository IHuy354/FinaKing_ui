import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Selectnew from "./Selectnew/Selectnew";
import SelectDatetime from "./SelectDatetime/SelectDatetime";
import Newimg from "./Addimg/Newimg";
import InputAdornment from "@mui/material/InputAdornment";

const AddnewModal = ({ open, onClose, onSubmit }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  const [transactionType, setTransactionType] = useState("expense");

  const handleFormSubmit = (data) => {
    onSubmit({
      ...data,
      type: transactionType,
      amount:
        transactionType === "expense"
          ? -Math.abs(data.amount)
          : Math.abs(data.amount),
    });
    reset(); // Reset form sau khi submit
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ color: "#12c38b" }}>Thêm giao dịch mới</DialogTitle>
        <DialogContent dividers>
          <form id="transaction-form" onSubmit={handleSubmit(handleFormSubmit)}>
            <RadioGroup
              row
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                value="expense"
                control={
                  <Radio
                    sx={{
                      color: "#12c38b",
                      "&.Mui-checked": {
                        color: "#12c38b",
                      },
                    }}
                  />
                }
                label="Chi tiêu"
              />

              <FormControlLabel
                value="income"
                control={
                  <Radio
                    sx={{
                      color: "#12c38b",
                      "&.Mui-checked": {
                        color: "#12c38b",
                      },
                    }}
                  />
                }
                label="Thu nhập"
              />
            </RadioGroup>

            <div style={{ display: "flex", gap: "10px" }}>
              <Selectnew />
              <SelectDatetime />
            </div>

            <TextField
              label="Số tiền"
              type="number"
              {...register("amount", { valueAsNumber: true })}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {transactionType === "expense" ? "-" : ""}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">VND</InputAdornment>
                ),
                inputProps: { step: 50000, min: 0 },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: transactionType === "expense" ? "red" : "green",
                },
              }}
            />

            <TextField
              label="Ghi chú"
              {...register("note")}
              fullWidth
              margin="normal"
              multiline
            />

            <Newimg />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            color="secondary"
            sx={{
              backgroundColor: "#12c38b",
              "&:hover": {
                backgroundColor: "#0e8b63ff",
              },
              color: "white",
            }}
          >
            Hủy
          </Button>
          <Button
            type="submit"
            form="transaction-form"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#12c38b",
              "&:hover": {
                backgroundColor: "#0e8b63ff",
              },
              color: "white",
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddnewModal;
