import { Routes, Route } from "react-router-dom";
import { OnexAppRoutes } from "../../../constants/routes.constants";
import Home from "../../../pages/Home";

export default function AuthenticatedApp() {
  return (
    <Routes>
      <Route path={OnexAppRoutes.home()} element={<Home />} />
    </Routes>
  );
}
