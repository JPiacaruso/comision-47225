import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";
// import Login from "./components/pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        <ThemeProvider theme={customTheme}>
          <CartContextComponent>
            <AppRouter />
          </CartContextComponent>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
