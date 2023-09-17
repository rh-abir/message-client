import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./main.scss";
import AuthPorvider from "./provider/AuthPorvider.jsx";
import router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorvider>
      <ToastContainer position="top-center" autoClose={2000} />
      <RouterProvider router={router} />
    </AuthPorvider>
  </React.StrictMode>
);
