import { lazy } from "react";
import { Route, Routes } from "react-router";
const Home = lazy(() => import("@page/Home/Home"));
const Notification = lazy(() => import("@page/Notifications/Notification"));
export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
}
