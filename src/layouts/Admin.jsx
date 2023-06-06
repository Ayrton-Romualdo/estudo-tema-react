import React from "react";

// components

import AdminNavbar from "./../components/Navbars/AdminNavbar.jsx";
import Sidebar from "./../components/Sidebar/Sidebar.jsx";
import HeaderStats from "./../components/Headers/HeaderStats.jsx";
import FooterAdmin from "./../components/Footers/FooterAdmin.jsx";
import { Outlet } from "react-router-dom";

// views

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
