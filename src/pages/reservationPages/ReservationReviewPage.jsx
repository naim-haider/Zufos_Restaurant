import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReservation } from "../../context/ReservationContext";

const ReservationReviewPage = () => {
  const { reservation, cancelReservation } = useReservation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("zufos-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleCancelReservation = () => {
    cancelReservation();
  };

  if (!reservation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#091b1e] text-[#ebdfd4] font-serif text-center px-6">
        <h1 className="text-4xl font-lavish mb-4">Zufos</h1>
        {user ? (
          <>
            <p className="mb-4 text-lg">No reservation found.</p>
            <button
              onClick={() => navigate("/reservation")}
              className="bg-[#ebdfd4] text-[#091b1e] px-6 py-2 rounded hover:bg-[#e1d3c3] font-semibold"
            >
              Go to Reservation
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-lg">Login to see reservation</p>
            <button
              onClick={() => navigate("/account")}
              className="bg-[#ebdfd4] text-[#091b1e] px-6 py-2 rounded hover:bg-[#e1d3c3] font-semibold"
            >
              Login
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] font-serif text-[#091b1e]">
      {/* Header */}
      <header className="bg-[#091b1e] text-[#ebdfd4] px-6 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-4xl font-lavish">Zufos</h1>
        </Link>
        <button
          onClick={() => navigate("/reservation-booking")}
          className="bg-[#133b3d] px-4 py-2 rounded hover:bg-[#0f2f30] text-white text-lg"
        >
          Change Reservation
        </button>
      </header>

      <div className="flex flex-col xl:flex-row w-full min-h-[calc(100vh-76px)]">
        {/* Left content */}
        <section className="flex-1 flex items-center justify-center px-6 py-12 bg-[#102c31]">
          <div className="bg-[#133b3d] text-[#ebdfd4] p-8 rounded-xl shadow-xl w-full max-w-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-[#d8cfc2] pb-4">
              <h2 className="text-3xl font-bold">Your Reservation</h2>
              <button
                onClick={handleCancelReservation}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
              >
                Cancel
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <div>
                <p>
                  <span className="font-semibold">Name:</span> {user?.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {user?.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {user?.phone}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {reservation.date}
                </p>
                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {reservation.time}
                </p>
                <p>
                  <span className="font-semibold">Guests:</span>{" "}
                  {reservation.guests}
                </p>
                <p>
                  <span className="font-semibold">Table:</span>{" "}
                  {reservation.tablePreference}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right image */}
        <div className="hidden xl:block xl:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://cdn7.bigcommerce.com/s-nu6nzn6ej0/product_images/uploaded_images/restaurant-complete-interior-solution-booth-seating-with-tables-and-chairs-made-in-usa-package-12-27-47771.1519141289.jpg"
            alt="Dining Area"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationReviewPage;
