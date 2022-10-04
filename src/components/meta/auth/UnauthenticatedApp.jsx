import { Routes, Route, Navigate } from "react-router-dom";
import { OnexAppRoutes } from "../../../constants/routes.constants";
import SignIn from "../../../pages/SignIn";
import SignUp from "../../../pages/SignUp";

export default function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path={OnexAppRoutes.singIn()} element={<SignIn />} />
      <Route path={OnexAppRoutes.signUp()} element={<SignUp />} />
      <Route
        path={OnexAppRoutes.fallback()}
        element={<Navigate replace to={OnexAppRoutes.signIn()} />}
      />
    </Routes>
  );
}
