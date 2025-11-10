import Addnew from "../../components/Addnew/Addnew";
import Boloc from "../../components/Boloc/Boloc";
import Sodu from "../../components/Sodu";

import Biendong from "./Biendong/Biendong.jsx";
import Chiphi from "./ChiPhi/Chiphi.jsx";

const Dashboard = () => {
  return (
    <div>
      {/* tái sử dụng  */}
      <Addnew />
      <Boloc />
      <Sodu />
      {/* Phần biểu đồ  */}
      <Biendong />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "20px",
          paddingBottom: "70px",
        }}
      >
        <Chiphi />
        <Chiphi />
      </div>
    </div>
  );
};

export default Dashboard;
