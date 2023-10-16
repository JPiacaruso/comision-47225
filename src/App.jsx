import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layaout/Layout";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
// import Login from "./components/pages/login/Login";
// import MaterialUi from "./components/pages/materialUI/MaterialUi";
// import PruebaResponsive from "./components/pages/pruebaResponsive/PruebaResponsive";
// import CounterContainer from "./components/common/counter/CounterContainer";
// import { useState } from "react";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/pages/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<h1>Página no encontrada</h1>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
