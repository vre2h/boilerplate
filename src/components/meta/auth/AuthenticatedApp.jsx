import { Routes, Route } from "react-router-dom";
import { OnexAppRoutes } from "../../../constants/routes.constants";
import Customers from "../../../pages/Customers";
import Home from "../../../pages/Home";

export default function AuthenticatedApp() {
  return (
    <Routes>
      <Route path={OnexAppRoutes.home()} element={<Home />} />
      <Route path={OnexAppRoutes.customers()} element={<Customers />} />
    </Routes>
  );
}
