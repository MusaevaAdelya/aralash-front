import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="container min-h-screen mx-auto max-w-[1335px] ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
