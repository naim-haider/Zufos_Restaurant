import React, { useEffect, useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OrderSummaryPage = () => {
  const { order, setOrder, placeOrder } = useOrder();
  const { user } = useUser();
  const navigate = useNavigate();
  console.log(order.address);

  const [orderType, setOrderType] = useState("Pickup");
  const [address, setAddress] = useState(order.address);

  useEffect(() => {
    if (order?.address) {
      setAddress(order.address);
    }
    if (order?.type) {
      setOrderType(order.type);
    }
  }, [order]);

  if (!order?.items || order.items.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f8f5f2] font-serif">
        <div className="text-center">
          <h2 className="text-2xl text-[#091b1e]">No items in your order.</h2>
          <button
            className="mt-4 px-6 py-2 bg-[#133b3d] text-white rounded hover:bg-[#0f2f30]"
            onClick={() => navigate("/menu-selection")}
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const updateQuantity = (index, change) => {
    const newItems = [...order.items];
    const item = newItems[index];
    const newQuantity = item.quantity + change;

    if (newQuantity < 1) return;
    item.quantity = newQuantity;
    item.totalPrice = item.price * newQuantity;

    setOrder((prev) => ({
      ...prev,
      items: newItems,
    }));
  };

  const removeItem = (index) => {
    const updatedItems = order.items.filter((_, i) => i !== index);
    setOrder((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const handleUpdateDetails = () => {
    setOrder((prev) => ({
      ...prev,
      type: orderType,
      address: address,
    }));
    toast.success("Order details updated!");
  };

  const placedOrder = () => {
    if (!order.items || order.items.length === 0) {
      toast.error("You dont have any Item to Order");
      return;
    }
    placeOrder();
    navigate("/order-review");
    toast.success("Order Placed successfully");
  };

  const subtotal = order.items.reduce((acc, item) => acc + item.totalPrice, 0);

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
          Add More Items
        </button>
      </header>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Items */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded shadow border p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Price per item: ₹{item.price}
                </p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-md font-medium mt-2">
                  Total: ₹{item.totalPrice}
                </p>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="ml-4 text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Subtotal */}
          <div className="text-right text-xl font-semibold pt-4">
            Subtotal: ₹{subtotal}
          </div>
        </div>

        {/* Customer Details & Edit Form */}
        <div className="bg-white rounded shadow p-6 space-y-4 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
          <div>
            {user?.photo && (
              <img
                src={user.photo}
                alt="Profile"
                className="w-16 h-16 rounded-full mt-2 object-cover"
              />
            )}
            <p>
              <span className="font-medium">Name:</span> {user?.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user?.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {user?.phone}
            </p>
          </div>

          {/* Editable Address & Type */}
          <div className="space-y-2 pt-4">
            <label className="block font-medium">Order Type:</label>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="Pickup">Pickup</option>
              <option value="Delivery">Delivery</option>
            </select>

            <>
              <label className="block font-medium mt-2">Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter your delivery address"
              />
            </>

            <button
              onClick={handleUpdateDetails}
              className="bg-[#133b3d] text-white px-4 py-2 rounded w-full mt-4 hover:bg-[#0f2f30]"
            >
              Update Order Details
            </button>
          </div>

          <button
            onClick={placedOrder}
            className="bg-green-600 text-white px-6 py-2 rounded w-full hover:bg-green-700 mt-4"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
