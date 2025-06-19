import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#091b1e] font-serif">
      {/* Header */}
      <header className="bg-[#091b1e] text-[#ebdfd4] px-6 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-4xl font-lavish">Zufos</h1>
        </Link>
        <button
          onClick={() => navigate("/")}
          className="bg-[#133b3d] px-4 py-2 rounded hover:bg-[#0f2f30] text-white text-lg"
        >
          Home
        </button>
      </header>

      {/* About Content */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <h2 className="text-5xl font-bold text-center mb-4">About Zufos</h2>
        <p className="text-lg leading-relaxed text-center text-gray-700 max-w-3xl mx-auto">
          At <span className="text-[#133b3d] font-semibold">Zufos</span>, we
          believe dining is more than just food — it’s about atmosphere,
          comfort, and creating memories. Nestled in the heart of the city,
          Zufos brings together soulful flavors, elegant design, and heartfelt
          hospitality.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://cdn7.bigcommerce.com/s-nu6nzn6ej0/product_images/uploaded_images/restaurant-complete-interior-solution-booth-seating-with-tables-and-chairs-made-in-usa-package-12-27-47771.1519141289.jpg"
            alt="Restaurant interior"
            className="rounded-xl shadow-lg"
          />

          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-[#133b3d]">Our Story</h3>
            <p className="text-gray-700">
              Zufos was founded with a simple vision: to craft an experience
              where modern elegance meets traditional taste. Our chefs blend
              regional inspiration with a global palate, creating dishes that
              are both familiar and uniquely refined.
            </p>
            <p className="text-gray-700">
              Whether you’re here for a quiet dinner, a family celebration, or a
              weekend brunch, our space is designed to make every moment
              special. With booth seating, soft lighting, and warm tones, Zufos
              feels like home — only better.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#dcd4c8] rounded-xl p-8 shadow-md text-center space-y-4 mt-10">
          <h4 className="text-2xl font-semibold text-[#133b3d]">Join Us</h4>
          <p className="text-gray-700">
            Make a reservation or order online — we’d love to serve you.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/reservation")}
              className="bg-[#133b3d] text-white px-6 py-2 rounded hover:bg-[#0f2f30]"
            >
              Book a Table
            </button>
            <button
              onClick={() => navigate("/order")}
              className="border border-[#133b3d] text-[#133b3d] px-6 py-2 rounded hover:bg-[#133b3d] hover:text-white"
            >
              Order Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
