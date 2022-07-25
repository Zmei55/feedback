import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./constants";
import { App } from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
