import React from "react";
import Addnew from "../../components/Addnew/Addnew";
import Boloc from "../../components/Boloc/Boloc";
import Sodu from "../../components/Sodu";

const Dashboard = () => {
  return (
    <div>
      {/* code 1 lần dùng mọi nơi quá sướng  */}
      <Addnew />
      <Boloc />
      <Sodu />
    </div>
  );
};

export default Dashboard;
