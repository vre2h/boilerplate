import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import App from "./App";
import "./index.css";
import store from "./libs/redux/store";
import { ProvideAuth } from "./hooks/useAuth.hooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
