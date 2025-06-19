import React from "react";
import { FiLogOut, FiList, FiCalendar, FiLogIn } from "react-icons/fi";
import { useUser } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import { useReservation } from "../context/ReservationContext";

export const Tabs = () => {
  const { user, logout } = useUser();
  const { setOrder } = useOrder();
  const { cancelReservation } = useReservation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clears user
    setOrder({ type: "", address: "", items: [] }); // clears order
    cancelReservation();
    localStorage.removeItem("zufos-order"); // optional: clean extra
    navigate("/");
  };

  return (
    <div className="w-64 bg-[#091b1e] border border-neutral-700 rounded-xl shadow-lg p-4 text-white">
      {/* Centered User Image */}
      <div className="flex justify-center mb-4">
        {user?.photo ? (
          <img
            src={user.photo}
            alt="User"
            className="w-20 h-20 rounded-full object-cover border border-neutral-600"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-2xl">
            {user?.name?.[0] ?? "?"}
          </div>
        )}
      </div>

      <ul className="space-y-3 text-sm text-neutral-300">
        <li
          className="flex items-center gap-2 hover:text-white cursor-pointer"
          onClick={() => navigate("/reservation-review")}
        >
          <FiCalendar />
          Review Reservation
        </li>
        <li
          className="flex items-center gap-2 hover:text-white cursor-pointer"
          onClick={() => navigate("/order-review")}
        >
          <FiList />
          Review Order
        </li>
        {user ? (
          <li
            className="flex items-center gap-2 hover:text-white cursor-pointer"
            onClick={handleLogout}
          >
            <FiLogOut />
            Logout
          </li>
        ) : (
          <Link to={"/account"}>
            <li className="flex mt-2 items-center gap-2 hover:text-white cursor-pointer">
              <FiLogIn />
              LogIn
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};
