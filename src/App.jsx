import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import OrderPage from "./pages/OrderPage";
import ReservationsPage from "./pages/ReservationsPage";
import Menu from "./components/Menu";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/order" element={<OrderPage />} />
        <Route path="/reservation" element={<ReservationsPage />} />
      </Routes>
    </>
  );
}

export default App;
