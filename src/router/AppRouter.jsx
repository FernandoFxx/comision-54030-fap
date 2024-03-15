import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./router";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />}></Route>
        ))}
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
