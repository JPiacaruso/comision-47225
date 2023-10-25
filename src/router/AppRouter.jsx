import { Route, Routes } from "react-router-dom";
import Layout from "../components/layaout/Layout";
import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
      <Route path="*" element={<h1>Página no encontrada</h1>} />;
    </Routes>
  );
};

export default AppRouter;
