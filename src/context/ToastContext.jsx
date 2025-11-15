import { createContext, useState } from "react";
import ToastContainor from "../toast/ToastContainer";
import Toast from "../toast/Toast";

export const ToastContext = createContext(null);

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showToast = (message, type = "info", duration = 3000) => {
    const id = Date.now() + Math.random();

    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainor>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastContainor>

      {children}
    </ToastContext.Provider>
  );
}
