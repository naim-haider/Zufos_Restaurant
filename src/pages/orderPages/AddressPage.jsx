import React, { useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddressPage = () => {
  const [address, setAddress] = useState("");
  const { order, setOrder } = useOrder();
  const navigate = useNavigate();
  console.log(order);

  const handleContinue = () => {
    if (address.trim()) {
      setOrder((prev) => ({
        ...prev,
        address: address.trim(),
      }));
      navigate("/menu-selection");
    } else {
      toast.error("Please enter your address.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col xl:flex-row bg-[#021e20] text-[#ebdfd4] relative">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate("/serving-option")}
          className="bg-[#133b3d] text-[#ebdfd4] px-4 py-2 rounded hover:bg-[#0f2f30] transition"
        >
          ← Back
        </button>
      </div>

      {/* Address Form Area */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-16 md:py-24 xl:py-0 bg-gradient-to-br from-[#021e20] via-[#0f2f30] to-[#133b3d]">
        {order?.type === "Pickup" ? (
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center tracking-wide">
            Where should you pickup?
          </h2>
        ) : (
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center tracking-wide">
            Where should we deliver?
          </h2>
        )}

        <input
          type="text"
          placeholder="e.g., 123, MG Road, Kolkata"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full max-w-md px-5 py-3 mb-6 border border-[#ebdfd4] bg-transparent text-[#ebdfd4] placeholder:text-[#d4cfc6] rounded text-lg font-serif focus:outline-none focus:ring-2 focus:ring-[#ebdfd4]"
        />

        <button
          onClick={handleContinue}
          className="bg-[#ebdfd4] text-[#021e20] px-8 py-3 text-lg font-serif rounded hover:bg-[#d4cfc6] transition-all"
        >
          Continue to Menu
        </button>
      </div>

      {/* Image Section (visible on xl and up) */}
      <div className="hidden xl:block xl:flex-1">
        <img
          src="https://img.freepik.com/premium-photo/commercial-delivery-truck-city-landscape_371361-89.jpg"
          alt="Delivery"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AddressPage;
