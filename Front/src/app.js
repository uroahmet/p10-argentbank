import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Error from "./pages/Error/Error.jsx";
import PrivateRoute from "./components/Privateroute";
import "./sass/_Main.scss";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
