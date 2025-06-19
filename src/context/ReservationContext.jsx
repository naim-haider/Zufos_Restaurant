import React, { createContext, useContext, useState, useEffect } from "react";

const ReservationContext = createContext();

export const useReservation = () => useContext(ReservationContext);

export const ReservationProvider = ({ children }) => {
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("zufos-reservation");
    if (stored) setReservation(JSON.parse(stored));
  }, []);

  const bookReservation = (data) => {
    setReservation(data);
    localStorage.setItem("zufos-reservation", JSON.stringify(data));
  };

  const cancelReservation = () => {
    setReservation(null);
    localStorage.removeItem("zufos-reservation");
  };

  return (
    <ReservationContext.Provider
      value={{ reservation, bookReservation, cancelReservation }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
