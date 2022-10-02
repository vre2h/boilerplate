import axios from "../libs/axios";

export const login = async (user) => {
  const { data } = await axios.post("/auth/login", user);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${data.accessToken}`,
  };

  return data;
};

export const getCurrentUser = () => axios.get("/users/me");

export const signUp = async (user) => {
  const { data } = await axios.post("/auth/register", user);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${data.accessToken}`,
  };

  return data;
};

export const getUserById = async (id) => {
  const r = await axios.get(`/users/${id}`);
  return r.data;
};

export const createUser = async (user) => {
  const r = await axios.post(`/users`, user);
  return r.data;
};

export const updateUser = async ({ id, user }) => {
  const r = await axios.patch(`/users/${id}`, user);
  return r.data;
};

export const deleteUserById = async (id) => {
  const result = await axios.delete(`/users/${id}`);

  return result.data;
};
