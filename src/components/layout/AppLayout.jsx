import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
