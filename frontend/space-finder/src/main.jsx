import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
import { AuthContextProvider } from "./context/AuthContext";
import { CreateSpaceProvider } from "./context/CreateSpaceContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CreateSpaceProvider>
          <App />
        </CreateSpaceProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
