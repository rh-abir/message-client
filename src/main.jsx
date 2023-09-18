import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./main.scss";
import AuthPorvider from "./provider/AuthPorvider.jsx";
import router from "./routes/router.jsx";

import { Provider as AlertProvider, positions, transitions } from "react-alert";

import alertTemplate from "react-alert-template-basic";

const options = {
  timeout: 3000,
  positions: positions.TOP_CENTER,
  transitions: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorvider>
      <AlertProvider template={alertTemplate} {...options}>
        <RouterProvider router={router} />
      </AlertProvider>
    </AuthPorvider>
  </React.StrictMode>
);
