import React from "react";
import ResponsiveAppBar from "./navbar/Navbar";
// import Footer from "./footer/Footer";
import FooterFinal from "./footer/FooterFinal";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <FooterFinal />
      </div>
    </div>
  );
};

export default Layout;
