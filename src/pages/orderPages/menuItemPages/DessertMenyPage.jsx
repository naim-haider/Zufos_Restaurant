import React, { useState } from "react";
import { useOrder } from "../../../context/OrderContext";
import { Link, useNavigate } from "react-router-dom";
import TiltCard from "../../../components/titledCard";
import toast from "react-hot-toast";

const dessertMenu = [
  {
    id: 1,
    name: "Gulab Jamun",
    description:
      "Soft milk-solid dumplings soaked in fragrant rose‑cardamom syrup.",
    price: 149,
    image: "/dishes/dessert/GulabJamun.jpeg",
  },
  {
    id: 2,
    name: "Rasgulla",
    description: "Spongy cheese balls simmered in light sugar syrup.",
    price: 129,
    image: "/dishes/dessert/Rassgulla.jpeg",
  },
  {
    id: 3,
    name: "Gajar Ka Halwa",
    description: "Warm carrot pudding cooked with milk, ghee & nuts.",
    price: 199,
    image: "/dishes/dessert/GajarKaHalwa.jpeg",
  },
  {
    id: 4,
    name: "Kaju Katli",
    description: "Silky diamond-shaped cashew fudge, lightly sweetened.",
    price: 169,
    image: "/dishes/dessert/KajuKatli.jpg",
  },
  {
    id: 5,
    name: "Mysore Pak",
    description: "Rich, buttery gram‑flour fudge from Mysore.",
    price: 159,
    image: "/dishes/dessert/MysorePak.jpeg",
  },
  {
    id: 6,
    name: "Kalakand",
    description: "Soft cheese milk‑confection garnished with pistachios.",
    price: 179,
    image: "/dishes/dessert/Kalakand.jpg",
  },
  {
    id: 7,
    name: "Chhena Poda",
    description: "Baked cheesecake‑style dessert from Odisha.",
    price: 189,
    image: "/dishes/dessert/ChhenaPoda.jpg",
  },
  {
    id: 8,
    name: "Ras Malai",
    description: "Soft cheese patties soaked in saffron‑cardamom milk.",
    price: 159,
    image: "/dishes/dessert/RassMalai.jpeg",
  },
];

const DessertMenyPage = () => {
  const { order, setOrder } = useOrder();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, value),
    }));
  };

  const handleAddToOrder = (item) => {
    const qty = quantities[item.id] || 1;
    const newItem = {
      ...item,
      quantity: qty,
      totalPrice: item.price * qty,
    };

    const existing = order.items || [];
    const updatedItems = [...existing, newItem];

    setOrder((prev) => ({
      ...prev,
      items: updatedItems,
    }));

    toast.success(`${item.name} added to order`);
  };

  const handleReviewOrder = () => {
    if (!order.items || order.items.length === 0) {
      toast.error("Please add at least one item.");
      return;
    }
    navigate("/order-summary");
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2] font-serif">
      <header className="bg-[#091b1e] text-[#ebdfd4] flex justify-between items-center px-6 py-4">
        <Link to={"/"}>
          <h1 className="text-4xl font-lavish">Zufos</h1>
        </Link>
        <button
          onClick={handleReviewOrder}
          className="bg-[#133b3d] px-4 py-2 rounded hover:bg-[#0f2f30] text-white text-lg"
        >
          Review Order
        </button>
      </header>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dessertMenu.map((item, index) => (
          <TiltCard key={item.id} index={index}>
            <div className="rounded-xl bg-[#0f1f20] text-[#ebdfd4] border border-[#1f2f30] shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-[#133b3d] hover:scale-[1.02]">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-serif mb-1">{item.name}</h2>
                <p className="text-sm text-[#d6cdc2] italic mb-2">
                  {item.description}
                </p>
                <p className="text-lg font-semibold text-[#ebdfd4] mb-3">
                  ₹{item.price}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <label htmlFor={`qty-${item.id}`} className="text-sm">
                    Qty:
                  </label>
                  <input
                    id={`qty-${item.id}`}
                    type="number"
                    min="1"
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 p-1 bg-[#1c2c2e] border border-[#3a4b4d] text-[#ebdfd4] rounded text-center placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#133b3d]"
                  />
                </div>

                <button
                  onClick={() => handleAddToOrder(item)}
                  className="w-full bg-[#133b3d] hover:bg-[#0f2f30] text-[#ebdfd4] font-serif py-2 rounded-xl shadow-md transition-transform hover:scale-105"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default DessertMenyPage;
