import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="main-body"
        style={{ background: "#f3f7fa", height: "100vh" }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
