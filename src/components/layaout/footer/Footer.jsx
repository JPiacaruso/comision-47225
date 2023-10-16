import "./Footer.css";
import { Outlet } from "react-router-dom";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        className="footer"
        sx={{
          backgroundColor: "#fbaf85",
          p: 7,
        }}
        component="footer"
      >
        <Container maxwidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="">
              Piantao Ceramicas
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
