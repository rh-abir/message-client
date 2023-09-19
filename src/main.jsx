import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./main.scss";
import AuthPorvider from "./provider/AuthPorvider.jsx";
import router from "./routes/router.jsx";

import { Provider as AlertProvider, positions, transitions } from "react-alert";

import alertTemplate from "react-alert-template-basic";

import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

const options = {
  timeout: 3000,
  positions: positions.TOP_CENTER,
  transitions: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorvider>
      <AlertProvider template={alertTemplate} {...options}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AlertProvider>
    </AuthPorvider>
  </React.StrictMode>
);
