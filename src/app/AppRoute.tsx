import { lazy } from "react";
import { Route, Routes } from "react-router";
const Home = lazy(() => import("@page/Home/Home"));
export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
