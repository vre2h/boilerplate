import { PERMISSIONS, ROLES } from "../../constants/permissions";
import { useAuth } from "../../hooks/useAuth.hooks";

const hasPermission = ({ permissions, scopes }) => {
  const scopesMap = {};
  scopes.forEach((scope) => {
    scopesMap[scope] = true;
  });

  return permissions?.some((permission) => scopesMap[permission]);
};

export default function PermissionsGate({ children, scopes = [] }) {
  const { user } = useAuth();
  const permissions = PERMISSIONS[user?.role || ROLES.USER];
  const permissionGranted = hasPermission({ permissions, scopes });

  if (!permissionGranted) return <></>;

  return <>{children}</>;
}
