import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './contexts/ThemeProvider.tsx'
import { ThemeProvider as AppThemeProvider } from "styled-components";
import "reset-css/reset.css";
import "./index.css";
const theme = {
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg : "1024px",
    xl:"1280px"
  },
};
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppThemeProvider>
    </ThemeProvider>
  </StrictMode>,
)
