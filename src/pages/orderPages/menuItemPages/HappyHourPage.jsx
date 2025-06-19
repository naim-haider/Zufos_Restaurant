import React, { useState } from "react";
import { useOrder } from "../../../context/OrderContext";
import { Link, useNavigate } from "react-router-dom";
import TiltCard from "../../../components/titledCard";
import toast from "react-hot-toast";

const happyHourMenu = [
  {
    id: 1,
    name: "Loaded Nachos",
    description: "Crispy nachos topped with cheese, jalapeños & salsa.",
    price: 199,
    image: "/dishes/happyHour/LoadedNachos.jpg",
  },
  {
    id: 2,
    name: "Chicken Wings",
    description: "Spicy, tangy wings glazed with hot sauce.",
    price: 229,
    image: "/dishes/happyHour/ChickenWings.jpg",
  },
  {
    id: 3,
    name: "Cheese Garlic Bread",
    description: "Toasted bread smothered with garlic butter & cheese.",
    price: 149,
    image: "/dishes/happyHour/GarlicBread.jpg",
  },
  {
    id: 4,
    name: "Veg Spring Rolls",
    description: "Crispy rolls filled with mixed veggies & served with dip.",
    price: 159,
    image: "/dishes/happyHour/SringRoll.jpeg",
  },
  {
    id: 5,
    name: "Fish Fingers",
    description: "Golden fried fish sticks served with tartar sauce.",
    price: 249,
    image: "/dishes/happyHour/FishFinger.jpeg",
  },
  {
    id: 6,
    name: "Onion Rings",
    description: "Crunchy battered onion rings with zesty dip.",
    price: 139,
    image: "/dishes/happyHour/OnionRings.jpg",
  },
  {
    id: 7,
    name: "Tandoori Momos",
    description: "Char-grilled dumplings with spicy tandoori flavor.",
    price: 179,
    image: "/dishes/happyHour/TandooriMomos.webp",
  },
  {
    id: 8,
    name: "Mini Paneer Tikka",
    description: "Bite-sized marinated cottage cheese grilled to perfection.",
    price: 199,
    image: "/dishes/happyHour/PaneerTikka.jpeg",
  },
];

const HappyHourPage = () => {
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
        {happyHourMenu.map((item, index) => (
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

export default HappyHourPage;
