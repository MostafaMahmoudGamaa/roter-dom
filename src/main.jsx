import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthStateProvider } from "./context/AuthStateProvider";
import ToastProvider from "./context/ToastContext";
import ThemeProvider from "./context/themeContext";
import QuryCacheClientProvider from "./context/QuryCacheClientProvider";
import AppLoader from "./AppLoader/AppLoader";
import AllDaysProvider from "./context/AllDaysProvider";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<AppLoader />}>
      <Provider store={store}>
        <BrowserRouter>
          <QuryCacheClientProvider>
            <AuthStateProvider>
              <ToastProvider>
                <ThemeProvider>
                  <AllDaysProvider>
                    <App />
                  </AllDaysProvider>
                </ThemeProvider>
              </ToastProvider>
            </AuthStateProvider>
          </QuryCacheClientProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
