import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";

const OrderReviewPage = () => {
  const { cancelPlacedOrder } = useOrder();
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = localStorage.getItem("zufos-placed-orders");
    const storedUser = localStorage.getItem("zufos-user");

    if (storedOrders) {
      setOrder(JSON.parse(storedOrders));
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [cancelPlacedOrder]);
  console.log(order);

  const handleCancelOrder = (i, id) => {
    cancelPlacedOrder(id);
    toast.error(`Order ${i + 1} cancelled`);
  };

  if (!order || order.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5f2] font-serif text-[#091b1e]">
        <h1 className="text-3xl font-bold mb-4">Zufos</h1>
        {user ? (
          <>
            <p className="mb-4">No previous orders found.</p>

            <button
              onClick={() => navigate("/menu-selection")}
              className="bg-[#133b3d] text-white px-6 py-2 rounded hover:bg-[#0f2f30]"
            >
              Go to Menu
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">Login to see Orders</p>
            <button
              onClick={() => navigate("/account")}
              className="bg-[#133b3d] text-white px-6 py-2 rounded hover:bg-[#0f2f30]"
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
          onClick={() => navigate("/menu-selection")}
          className="bg-[#133b3d] px-4 py-2 rounded hover:bg-[#0f2f30] text-white text-lg"
        >
          Order More
        </button>
      </header>

      <div className="p-8">
        <h2 className="text-4xl font-bold mb-10 border-b pb-4 border-[#d8cfc2]">
          Your Order Summary
        </h2>

        {order.map((order, i) => (
          <div
            key={i}
            className="bg-white border border-[#dcd4c8] rounded-xl shadow-md p-6 mb-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-[#133b3d]">
                Order #{i + 1}
              </h3>
              <button
                onClick={() => handleCancelOrder(i, order.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
              >
                Cancel Order
              </button>
            </div>

            {/* Customer Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 text-sm">
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
              <div className="flex justify-evenly">
                <p>
                  <span className="font-semibold">Order Type:</span>{" "}
                  {order.type}
                </p>

                <p>
                  <span className="font-semibold">Address:</span>{" "}
                  {order.address}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-[#fefcf9] border border-[#e2dbd0] rounded-lg overflow-hidden shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover border-r border-[#e2dbd0]"
                  />
                  <div className="p-3 flex flex-col justify-center space-y-1">
                    <h4 className="font-semibold text-[#091b1e]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#333]">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium text-[#133b3d]">
                      ₹{item.totalPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right font-bold text-lg mt-4">
              Total Paid: ₹
              {order.items.reduce((acc, item) => acc + item.totalPrice, 0)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderReviewPage;
