import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

const AddnewModal = ({ open, onClose, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); // reset form sau khi submit
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Thêm giao dịch mới</DialogTitle>
        <DialogContent dividers>
          <form id="transaction-form" onSubmit={handleSubmit(handleFormSubmit)}>
            <TextField
              label="Tên giao dịch"
              {...register("name")}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Số tiền"
              type="number"
              {...register("amount")}
              fullWidth
              margin="normal"
              inputProps={{ step: 50000, min: 0 }}
            />
            <TextField
              label="Ngày"
              type="date"
              {...register("date")}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Ghi chú"
              {...register("note")}
              fullWidth
              margin="normal"
              multiline
              // rows={2}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Hủy
          </Button>
          <Button
            type="submit"
            form="transaction-form"
            variant="contained"
            color="primary"
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddnewModal;
