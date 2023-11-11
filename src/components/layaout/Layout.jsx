import React from "react";
import FooterFinal from "./footer/FooterFinal";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./navbar/Navbar";

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
