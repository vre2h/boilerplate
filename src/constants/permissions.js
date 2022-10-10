export const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
};

export const SCOPES = {
  canSeeUserProfile: "can-see-user-profile",
  canSeeAdminProfile: "can-see-admin-profile",
  canCreateAllUsers: "can-create-all-users",
  canDeleteAllUsers: "can-delete-all-users",
  canEditAllUsers: "can-edit-all-users",
  canGetAllUsers: "can-get-all-users",
  seeAnyUserMeals: "see-any-user-meals",
};

export const PERMISSIONS = {
  [ROLES.USER]: [SCOPES.canSeeUserProfile],
  [ROLES.ADMIN]: [SCOPES.canSeeAdminProfile, SCOPES.seeAnyUserMeals],
};

export const isAdmin = (role) => role === ROLES.ADMIN;
export const isUser = (role) => role === ROLES.USER;
