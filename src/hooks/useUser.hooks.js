/* eslint-disable no-shadow */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getCurrentUser,
  login as loginService,
  signUp as signUpService,
} from "../services/user";

export function useUser() {
  const [user, setUser] = useState(null);
  const [refreshState, setRefreshState] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");

    setUser(false);
    navigate("/");
  };

  const logIn = (user) =>
    loginService(user).then(async ({ accessToken }) => {
      localStorage.setItem("token", accessToken);
      const iUser = await getCurrentUser();
      setUser(iUser.data);
      return iUser;
    });

  const signUp = (user) =>
    signUpService(user).then(async ({ accessToken }) => {
      localStorage.setItem("token", accessToken);
      const iUser = await getCurrentUser();
      setUser(iUser.data);
      return iUser;
    });

  useEffect(() => {
    getCurrentUser()
      .then((u) => {
        setUser(u.data);
      })
      .catch(() => {
        setUser(false);
      });

    return () => {
      setUser(null);
    };
  }, [refreshState]);

  const refreshUser = () => {
    setRefreshState(!refreshState);
  };

  return { user, logOut, logIn, signUp, refreshUser };
}
