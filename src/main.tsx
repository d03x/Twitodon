import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './contexts/ThemeProvider.tsx'
import { ThemeProvider as AppThemeProvider } from "styled-components";
import "reset-css/reset.css";
import "./index.css";
import { breakpoint } from './utils/breakpoint.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppThemeProvider theme={breakpoint}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppThemeProvider>
    </ThemeProvider>
  </StrictMode>,
)
