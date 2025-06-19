import React, { useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { Link, useNavigate } from "react-router-dom";

const sampleMenu = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Creamy tomato-based curry with cottage cheese",
    price: 249,
    image: "/menu/paneerDish1.jpg",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice with spiced chicken",
    price: 299,
    image: "/menu/chickenBiryani1.jpg",
  },
  {
    id: 3,
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato",
    price: 149,
    image: "/menu/masalaDosa1.jpg",
  },
  {
    id: 4,
    name: "Tandoori Roti (2 pcs)",
    description: "Traditional clay oven-baked flatbread",
    price: 59,
    image: "/menu/TandooriRoti.jpeg",
  },
];

const OrderingPage = () => {
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

    alert(`${item.name} added to order`);
  };

  const handleReviewOrder = () => {
    if (!order.items || order.items.length === 0) {
      alert("Please add at least one item.");
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

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleMenu.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-[#ddd]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#133b3d]">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-md text-[#091b1e] font-medium mb-2">
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
                  className="w-16 p-1 border border-gray-300 rounded"
                />
              </div>
              <button
                onClick={() => handleAddToOrder(item)}
                className="bg-[#133b3d] text-white w-full py-2 rounded hover:bg-[#0f2f30] transition"
              >
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderingPage;
