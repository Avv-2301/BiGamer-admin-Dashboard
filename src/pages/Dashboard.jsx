import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Bars/Sidebar";
import Topbar from "../components/Bars/Topbar";

const Dashboard = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-1.5rem)] bg-[#cbd5e1]">
      <Sidebar />
      <div className="lg:h-[calc(100vh)] flex-1 overflow-auto">
        <Topbar />
        <div className="mx-auto w-11/12 max-w-[1300px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
