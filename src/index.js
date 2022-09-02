import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//this is used if we do not have a store already up and running
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
