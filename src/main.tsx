import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router";
import { ThemeProvider as AppThemeProvider } from "styled-components";
import "reset-css/reset.css";
import "@/css/main.css";
import { breakpoint } from "./utils/breakpoint.ts";
import { Provider } from "react-redux";
import store from "./stores/store.ts";
import LoadingBar, { LoadingBarContainer } from "react-top-loading-bar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider theme={breakpoint}>
      <Provider store={store}>
        <LoadingBarContainer>
          <LoadingBar />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LoadingBarContainer>
      </Provider>
    </AppThemeProvider>
  </StrictMode>
);
