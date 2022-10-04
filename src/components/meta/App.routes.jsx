import { Route, Routes } from "react-router-dom";

import { Loading } from "../general/Loading";
import AuthenticatedApp from "./auth/AuthenticatedApp";
import UnauthenticatedApp from "./auth/UnauthenticatedApp";
import { useAuth } from "../../hooks/useAuth.hooks";
import { OnexAppRoutes } from "../../constants/routes.constants";

export function AppRoutes() {
  const { user } = useAuth();

  const getAppBasedOnAuth = () => {
    if (user === null) return <Loading />;
    if (user) return <AuthenticatedApp />;
    if (user === false) return <UnauthenticatedApp />;

    return <UnauthenticatedApp />;
  };

  return (
    <Routes>
      <Route path={OnexAppRoutes.fallback()} element={getAppBasedOnAuth()} />
    </Routes>
  );
}
