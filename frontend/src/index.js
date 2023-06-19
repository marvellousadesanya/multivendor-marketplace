import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { apiSlice } from "./features/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ApiProvider api={apiSlice}> */}
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
    {/* </ApiProvider> */}
  </React.StrictMode>
);
