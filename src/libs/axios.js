import axios from "axios";

import { NodeEnvs } from "../constants/env";

axios.defaults.baseURL =
  import.meta.env.NODE_ENV === NodeEnvs.development
    ? import.meta.env.REACT_APP_BASE_URL_DEV
    : import.meta.env.REACT_APP_BASE_URL;

axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export default axios;
