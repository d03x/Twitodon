

import { Route, Routes } from 'react-router'
import {  useTheme } from './contexts/ThemeProvider'
import { lazy, useEffect } from 'react';
import { GlobalStyle } from './theme/globalStyles';
import LoginForm from './components/login/LoginForm';

//##### IMPORT PAGES ########/
const Home = lazy(()=>import("@/pages/Home"));

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // bisa menyimpan tema yang aktif di localStorage atau cookie untuk persist
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'purple' | null;
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, [toggleTheme]);

  return (
    <>
        <GlobalStyle theme={theme} />
        <Routes>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
    </>
  )
}

export default App
