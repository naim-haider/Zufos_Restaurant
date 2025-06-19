import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import OrderPage from "./pages/orderPages/OrderPage";
import ReservationsPage from "./pages/reservationPages/ReservationsPage";
import ServingOptionPage from "./pages/orderPages/ServingOptionPage";
import AddressPage from "./pages/orderPages/AddressPage";
import OrderingPage from "./pages/orderPages/OrderingPage";
import OrderSummaryPage from "./pages/orderPages/OrderSummaryPage";
import OrderReviewPage from "./pages/orderPages/OrderReviewPage";
import ReservationBookingPage from "./pages/reservationPages/ReservationBookingPage";
import ReservationReviewPage from "./pages/reservationPages/ReservationReviewPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import OrderMenu from "./pages/orderPages/OrderMenu";
import DeliveryMenuPage from "./pages/orderPages/menuItemPages/DeliveryMenuPage";
import DessertMenyPage from "./pages/orderPages/menuItemPages/DessertMenyPage";
import DinningMenuPage from "./pages/orderPages/menuItemPages/DinningMenuPage";
import DrinkMenuPage from "./pages/orderPages/menuItemPages/DrinkMenuPage";
import HappyHourPage from "./pages/orderPages/menuItemPages/HappyHourPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Toaster position="left-bottom" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Order Pages */}
        <Route path="/order" element={<OrderPage />} />
        <Route path="/serving-option" element={<ServingOptionPage />} />
        <Route path="/Address-details" element={<AddressPage />} />
        <Route path="/menu-selection" element={<OrderMenu />} />
        {/* MenuItem Pages */}
        <Route path="/delivery-menu" element={<DeliveryMenuPage />} />
        <Route path="/dessert-menu" element={<DessertMenyPage />} />
        <Route path="/dinning-menu" element={<DinningMenuPage />} />
        <Route path="/drink-menu" element={<DrinkMenuPage />} />
        <Route path="/happyhour" element={<HappyHourPage />} />

        <Route path="/item-order" element={<OrderingPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
        <Route path="/order-review" element={<OrderReviewPage />} />

        {/* Reservation Pages */}
        <Route path="/reservation" element={<ReservationsPage />} />
        <Route
          path="/reservation-booking"
          element={<ReservationBookingPage />}
        />
        <Route path="/reservation-review" element={<ReservationReviewPage />} />
      </Routes>
    </>
  );
}

export default App;
