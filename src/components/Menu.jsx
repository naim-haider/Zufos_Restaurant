import React, { forwardRef } from "react";
import AnimatedText from "./AnimatedText";
import { Link } from "react-router-dom";

const Menu = forwardRef((props, ref) => {
  const MenuCards = [
    {
      name: "Happy Hour",
      description:
        "Experience vibrant evenings with our Happy Hour menu—featuring flavorful bites, handcrafted cocktails, and refreshing drinks at special prices. Perfect for relaxing, socializing, and savoring bold tastes in style.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-happy-hour-min.jpg",
    },
    {
      name: "Drink Menu",
      description:
        "Sip handcrafted cocktails, premium spirits, and classic Indian beverages in style. From creative mixology to refreshing lassis and masala chai, each drink complements your dining experience with vibrant flavor.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-menu.jpg",
    },
    {
      name: "Dinning Menu",
      description:
        "Savor bold Indian flavors in a warm, inviting setting. From signature curries to expertly crafted tandoori dishes, each plate delivers an unforgettable culinary experience rooted in tradition and taste.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-dinner-menu-min.jpg",
    },
    {
      name: "Dessert Menu",
      description:
        "Indulge in rich Indian sweets and modern twists on classics. From creamy kulfi to warm gulab jamun, each dessert offers a perfect ending to your flavorful dining experience.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-dessert-menu-min.jpg",
    },
    {
      name: "Delivery Menu",
      description:
        "Delicious Indian food, delivered fast and fresh. Enjoy aromatic biryanis, spicy street snacks, and rich curries—all crafted with authentic ingredients and perfect for a cozy meal at home.",
      img: "https://adachirestaurant.com/wp-content/uploads/2020/11/adach-delivery-min.jpg",
    },
  ];

  const menuItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Gallery" },
    { href: "#", label: "Gift Cards", external: true },
    { href: "#", label: "Catering" },
    { href: "#", label: "Order", external: true },
    { href: "#", label: "Contact" },
  ];

  return (
    <section
      ref={ref}
      data-aos="fade-right"
      className="relative -top-38 h-screen text-[#ebdfd4]"
    >
      <div className="flex items-center justify-center relative z-10">
        <AnimatedText
          text="Explore Our Menu"
          tag="p"
          className="text-3xl md:text-8xl xl:text-[12rem] font-serif"
        />
      </div>

      <section data-aos="fade-right" className="lg:px-20 md:px-10 px-5">
        <div className="mx-auto flex justify-center object-center px-4 lg:max-w-screen">
          <div className="grid gap-5 pt-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {MenuCards.map((card, index) => (
              <a
                key={card.img}
                href="#"
                className={`group flex justify-center [perspective:1000px] 
                  transition-transform duration-500 ${
                    index % 2 === 0
                      ? "-translate-y-6 animate-float"
                      : "translate-y-6 animate-float-delay"
                  }`}
              >
                <div className="relative lg:h-[600px] lg:w-64 md:h-[365px] md:64 sm:h-[365px] sm:w-60 h-[450px] w-[300px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    <img
                      className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                      src={card.img}
                      alt={card.name}
                      width={250}
                      height={250}
                    />
                  </div>

                  <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-blue/70" />
                  <div className="absolute inset-0 top-[29rem] px-8 text-center">
                    <p className="font-dmserif text-xl text-[#ebdfd4] font-serif">
                      {card.name}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-xl font-bold mb-4">{card.name}</h2>
                      <p className="text-lg text-pretty text-center mb-4">
                        {card.description}
                      </p>
                      <p className="text-xl text-[#ebdfd4] font-serif border-b border-[#ebdfd4] hover:opacity-80 transition">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative bottom-72 bg-[#021e20] text-[#ebdfd4] -z-50 h-screen">
        <div className="container mx-auto px-4 py-12 text-center relative top-80">
          <div className="border-[1px] flex flex-col gap-12 border-[#ebdfd4] p-4 mb-4 py-16 mx-auto">
            <ul className="flex flex-wrap justify-evenly gap-4 mb-6">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="text-xl text-[#ebdfd4] font-serif uppercase"
                >
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mb-6 space-y-4 md:flex md:justify-around md:items-center md:space-x-6 md:space-y-0">
              <div className="font-serif text-xl">
                <span>5 Linking Road</span>
                <span className="mx-2">|</span>
                <span>Mumbai, Maharashtra 400050</span>
                <span className="mx-2">|</span>
                <span>© 2025</span>
              </div>

              <div className="space-x-4">
                <Link
                  to="/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent text-[#ebdfd4] px-24 py-4 border-[1px] border-[#ebdfd4] font-serif transition-all duration-300 ease-in-out hover:bg-[#ebdfd4] hover:text-[#021e20]"
                >
                  Order
                </Link>
                <Link
                  to="/reservation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent text-[#ebdfd4] px-24 py-4 border-[1px] border-[#ebdfd4] font-serif transition-all duration-300 ease-in-out hover:bg-[#ebdfd4] hover:text-[#021e20]"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-lg font-serif">
            <div className="space-y-1 mb-2">
              <span>Sunday - Thursday: 11:30am - 11pm</span> <span>|</span>{" "}
              <span>Friday - Saturday: 11:30am - 12am</span>
            </div>
            <div className="space-y-1 mb-2">
              <span>Christmas Eve: 11:30am - 4pm</span>
            </div>
            <div className="space-y-1 mb-2">
              <span>Christmas Day: Closed</span> <span>|</span>{" "}
              <span>New Year's Day: Closed</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
              <span>© 2025</span>
              <span>&</span>
              <span>Zufos</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
});

export default Menu;
