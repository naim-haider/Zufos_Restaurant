import React from "react";
import AnimatedText from "../../components/AnimatedText";
import { Link, useNavigate } from "react-router-dom";

const OrderMenu = () => {
  const navigate = useNavigate();
  const MenuCards = [
    {
      name: "Happy Hour",
      description:
        "Experience vibrant evenings with our Happy Hour menu—featuring flavorful bites, handcrafted cocktails, and refreshing drinks at special prices. Perfect for relaxing, socializing, and savoring bold tastes in style.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-happy-hour-min.jpg",
      url: "/happyhour",
    },
    {
      name: "Drink Menu",
      description:
        "Sip handcrafted cocktails, premium spirits, and classic Indian beverages in style. From creative mixology to refreshing lassis and masala chai, each drink complements your dining experience with vibrant flavor.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-menu.jpg",
      url: "/drink-menu",
    },
    {
      name: "Dinning Menu",
      description:
        "Savor bold Indian flavors in a warm, inviting setting. From signature curries to expertly crafted tandoori dishes, each plate delivers an unforgettable culinary experience rooted in tradition and taste.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-dinner-menu-min.jpg",
      url: "/dinning-menu",
    },
    {
      name: "Dessert Menu",
      description:
        "Indulge in rich Indian sweets and modern twists on classics. From creamy kulfi to warm gulab jamun, each dessert offers a perfect ending to your flavorful dining experience.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-dessert-menu-min.jpg",
      url: "/dessert-menu",
    },
    {
      name: "Delivery Menu",
      description:
        "Delicious Indian food, delivered fast and fresh. Enjoy aromatic biryanis, spicy street snacks, and rich curries—all crafted with authentic ingredients and perfect for a cozy meal at home.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adach-delivery-min.jpg",
      url: "/delivery-menu",
    },
  ];

  return (
    <section
      data-aos="fade-right"
      className="min-h-screen bg-[#091b1e] text-[#ebdfd4] px-4 py-20"
    >
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate("/address-details")}
          className="bg-[#133b3d] text-[#ebdfd4] px-4 py-2 rounded hover:bg-[#0f2f30] transition"
        >
          ← Back
        </button>
      </div>
      {/* Title */}
      <div className="flex justify-center mb-12">
        <AnimatedText
          text="Explore Our Menu"
          tag="p"
          className="text-3xl md:text-6xl xl:text-8xl font-serif text-center"
        />
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-xl mx-auto">
        {MenuCards.map((card, index) => (
          <div
            key={card.img}
            href="#"
            className={`group flex justify-center transition-transform duration-500 ${
              index % 2 === 0
                ? "-translate-y-3 animate-float"
                : "translate-y-3 animate-float-delay"
            }`}
          >
            <div className="relative h-[450px] w-[90%] sm:w-64 md:h-[365px] md:w-60 lg:h-[600px] lg:w-64 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
                <img
                  className="object-cover w-full h-full"
                  src={card.img}
                  alt={card.name}
                />
                <div className="absolute bottom-20 z-10 left-0 right-0 text-center">
                  <p className="font-dmserif text-xl text-[#ebdfd4] font-serif">
                    {card.name}
                  </p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-blue/70 rounded-xl" />

              {/* Back */}
              <div className="absolute inset-0 rounded-xl bg-black/80 px-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold mb-4">{card.name}</h2>
                <p className="text-base mb-4">{card.description}</p>
                <p className="text-xl text-[#ebdfd4] font-serif border-b border-[#ebdfd4] hover:opacity-80 transition">
                  <Link to={card.url}>Explore</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-24 bg-[#021e20] text-[#ebdfd4] pt-16 pb-8">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="border-t border-gray-700 pt-6 text-center text-lg font-serif mt-8 space-y-2">
            <p>
              Sunday - Thursday: 11:30am - 11pm | Friday - Saturday: 11:30am -
              12am
            </p>
            <p>Christmas Eve: 11:30am - 4pm</p>
            <p>Christmas Day: Closed | New Year's Day: Closed</p>
            <p>© 2025 Zufos</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default OrderMenu;
