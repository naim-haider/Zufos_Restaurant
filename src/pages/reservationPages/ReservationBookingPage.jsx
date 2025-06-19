import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReservation } from "../../context/ReservationContext";
import { useUser } from "../../context/UserContext";
import { Tabs } from "../../components/ShiftingDropDown";

const ReservationBookingPage = () => {
  const { bookReservation } = useReservation();
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/account");
    }
  }, [user, navigate]);

  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    tablePreference: "Any",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookReservation(form);
    navigate("/reservation-review");
  };

  return (
    <div className="h-screen w-full overflow-y-hidden">
      {/* Header */}
      <div className="flex flex-wrap">
        <section className="mx-auto w-full">
          <nav className="flex flex-col lg:flex-row justify-between items-center text-white w-full bg-[#091b1e]">
            <Link to="/">
              <div className="px-5 xl:px-12 py-4">
                <div className="font-lavish text-4xl lg:text-5xl text-[#ebdfd4] transition-all duration-500">
                  Zufos
                </div>
              </div>
            </Link>
            <div className="px-5 py-4 font-serif text-lg lg:text-xl text-[#ebdfd4] border border-[#ebdfd4] w-full lg:w-[30%] flex justify-center items-center">
              <div className="flex justify-evenly w-full items-center space-x-4 text-center">
                <Link to="/order">Order Online</Link>
                <div className="relative group">
                  <div className="text-2xl select-none"> & </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50">
                    <Tabs />
                  </div>
                </div>
                <Link to="/reservation">Reservations</Link>
              </div>
            </div>
          </nav>
        </section>
      </div>

      {/* Content Section */}
      <div className="flex flex-col xl:flex-row min-h-[calc(100vh-80px)] w-full">
        {/* Left Form */}
        <section
          className={`
          flex-1 flex flex-col justify-center items-center text-center px-6 py-12 
          xl:bg-none bg-[url('https://cdn7.bigcommerce.com/s-nu6nzn6ej0/product_images/uploaded_images/restaurant-complete-interior-solution-booth-seating-with-tables-and-chairs-made-in-usa-package-12-27-47771.1519141289.jpg')] bg-cover bg-center relative
        `}
        >
          {/* Overlay for mobile */}
          <div className="absolute inset-0 bg-[#091b1ed9] xl:hidden z-0"></div>

          <div className="relative z-10 w-full max-w-xl bg-[#091b1e] p-8 rounded-xl shadow-lg text-left text-[#ebdfd4]">
            <h2 className="text-3xl md:text-4xl font-serif font-bol mb-8 border-b pb-3 border-[#d8cfc2]">
              Book a Reservation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 font-serif">
              <div>
                <label className="block font-semibold mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#d8cfc2] bg-[#133b3d] text-[#ebdfd4] px-3 py-2 rounded placeholder-[#d8cfc2]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Time</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#d8cfc2] bg-[#133b3d] text-[#ebdfd4] px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Guests</label>
                <input
                  type="number"
                  name="guests"
                  min={1}
                  max={20}
                  value={form.guests}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#d8cfc2] bg-[#133b3d] text-[#ebdfd4] px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Table Preference
                </label>
                <select
                  name="tablePreference"
                  value={form.tablePreference}
                  onChange={handleChange}
                  className="w-full border border-[#d8cfc2] bg-[#133b3d] text-[#ebdfd4] px-3 py-2 rounded"
                >
                  <option className="bg-[#133b3d] text-[#ebdfd4]">Any</option>
                  <option className="bg-[#133b3d] text-[#ebdfd4]">
                    Window
                  </option>
                  <option className="bg-[#133b3d] text-[#ebdfd4]">Booth</option>
                  <option className="bg-[#133b3d] text-[#ebdfd4]">
                    Outdoor
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-[#ebdfd4] text-[#091b1e] px-6 py-3 rounded text-lg uppercase font-serif hover:bg-[#e1d3c3] w-full"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </section>

        {/* Right Side Image for xl+ */}
        <div className="hidden xl:block w-1/2">
          <img
            className="w-full h-full object-cover mt-5"
            src="https://cdn7.bigcommerce.com/s-nu6nzn6ej0/product_images/uploaded_images/restaurant-complete-interior-solution-booth-seating-with-tables-and-chairs-made-in-usa-package-12-27-47771.1519141289.jpg"
            alt="Dining Area"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationBookingPage;
