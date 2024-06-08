import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Footer, Navbar } from "../components";
import FooterAvatar from "../components/FooterAvatar";

function MainLayout() {
  return (
    <div className=" ">
      <Navbar />
      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
