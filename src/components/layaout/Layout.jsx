import React from "react";
import FooterFinal from "./footer/FooterFinal";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./navbar/Navbar";
import { Height } from "@mui/icons-material";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <div style={{ Height: "10vh" }}>
        <FooterFinal />
      </div>
    </div>
  );
};

export default Layout;
