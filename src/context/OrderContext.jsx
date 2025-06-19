// import React, { createContext, useContext, useState, useEffect } from "react";

// const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [order, setOrder] = useState(() => {
//     const stored = localStorage.getItem("zufos-order");
//     return stored
//       ? JSON.parse(stored)
//       : {
//           type: "", // pickup or delivery
//           address: "", // string or object depending on your design
//           items: [], // array of cart/order items
//         };
//   });

//   useEffect(() => {
//     localStorage.setItem("zufos-order", JSON.stringify(order));
//   }, [order]);

//   return (
//     <OrderContext.Provider value={{ order, setOrder }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

// export const useOrder = () => useContext(OrderContext);

import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

const defaultOrder = {
  type: "", // pickup or delivery
  address: "",
  items: [],
};

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(() => {
    const stored = localStorage.getItem("zufos-order");
    return stored ? JSON.parse(stored) : defaultOrder;
  });

  const [placedOrders, setPlacedOrders] = useState(() => {
    const stored = localStorage.getItem("zufos-placed-orders");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync current order to localStorage
  useEffect(() => {
    localStorage.setItem("zufos-order", JSON.stringify(order));
  }, [order]);

  // Sync placed orders to localStorage
  useEffect(() => {
    localStorage.setItem("zufos-placed-orders", JSON.stringify(placedOrders));
  }, [placedOrders]);

  // Place current order
  const placeOrder = () => {
    if (order.items.length === 0) return;

    const newOrder = {
      ...order,
      id: Date.now(), // simple unique ID
      placedAt: new Date().toISOString(),
    };

    const updatedOrders = [...placedOrders, newOrder];
    setPlacedOrders(updatedOrders);
    localStorage.setItem("zufos-placed-orders", JSON.stringify(updatedOrders));

    setOrder(defaultOrder);
    localStorage.removeItem("zufos-order");
  };

  // Cancel a placed order by ID
  const cancelPlacedOrder = (id) => {
    const updatedOrders = placedOrders.filter((o) => o.id !== id);
    setPlacedOrders(updatedOrders);
    localStorage.setItem("zufos-placed-orders", JSON.stringify(updatedOrders));
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        placedOrders,
        placeOrder,
        cancelPlacedOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
