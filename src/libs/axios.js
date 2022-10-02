import axios from "axios";

import { NodeEnvs } from "../constants/env";

axios.defaults.baseURL =
  process.env.NODE_ENV === NodeEnvs.development
    ? process.env.REACT_APP_BASE_URL_DEV
    : process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export default axios;
