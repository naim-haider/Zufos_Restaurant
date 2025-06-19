import React, { useState } from "react";
import { useOrder } from "../../../context/OrderContext";
import { Link, useNavigate } from "react-router-dom";
import TiltCard from "../../../components/titledCard";
import toast from "react-hot-toast";

const drinkMenu = [
  {
    id: 1,
    name: "Masala Chai",
    description: "Spiced black tea brewed with milk and aromatic spices.",
    price: 79,
    image: "/dishes/drink/MasalaChai.jpeg",
  },
  {
    id: 2,
    name: "Mango Lassi",
    description:
      "Creamy yogurt smoothie with ripe mangoes—refreshing & fruity.",
    price: 119,
    image: "/dishes/drink/MangoLassi.jpg",
  },
  {
    id: 3,
    name: "Nimbu Paani",
    description: "Classic Indian lemonade with a hint of salt and spices.",
    price: 59,
    image: "/dishes/drink/NimbuPani.webp",
  },
  {
    id: 4,
    name: "Jaljeera",
    description: "Tangy cumin-mint drink—perfect summer thirst-quencher.",
    price: 69,
    image: "/dishes/drink/jaljeeraPani.jpg",
  },
  {
    id: 5,
    name: "Thandai",
    description: "Almond-spice milk drink, chilled with saffron & cardamom.",
    price: 99,
    image: "/dishes/drink/Thandai.avif",
  },
  {
    id: 6,
    name: "Rose Falooda",
    description:
      "Layered drink-dessert: rose milk, vermicelli, basil seeds, ice cream.",
    price: 129,
    image: "/dishes/drink/RoseFalooda.jpeg",
  },
  {
    id: 7,
    name: "Coconut Water",
    description: "Natural, hydrating pure coconut water.",
    price: 49,
    image: "/dishes/drink/CoconutWater.jpg",
  },
  {
    id: 8,
    name: "Sugarcane Juice",
    description: "Fresh-pressed sugarcane juice served chilled.",
    price: 89,
    image: "/dishes/drink/SugarcaneJuice.jpeg",
  },
];

const DrinkMenuPage = () => {
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
        {drinkMenu.map((item, index) => (
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

export default DrinkMenuPage;
