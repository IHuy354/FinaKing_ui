import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const Newimg = () => {
  const handleChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully`);
      console.log("File uploaded:", info.file.response.url);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
      alert("Ảnh lỗi");
    }
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture"
        maxCount={1}
        onChange={handleChange}
      >
        <Button
          type="primary"
          icon={<UploadOutlined />}
          style={{
            backgroundColor: "#12c38b",
            borderColor: "#12c38b",
            color: "white",
          }}
        >
          Thêm ảnh
        </Button>
      </Upload>
    </div>
  );
};

export default Newimg;
