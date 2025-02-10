import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router";
import { ThemeProvider as AppThemeProvider } from "styled-components";
import "reset-css/reset.css";
import "@/css/main.css";
import { breakpoint } from "./utils/breakpoint.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider theme={breakpoint}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
