import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthStateProvider } from "./context/AuthStateProvider";
import ToastProvider from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthStateProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </AuthStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
