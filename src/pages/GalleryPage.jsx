import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

const images = [
  "https://adachirestaurant.com/wp-content/uploads/2020/11/kojisteak-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-drinks-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/hamachi-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/Cropped-026A9713-copy-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-smoke-martini-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/Cropped-026A9742-copy-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/Cropped-026A9766-copy-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/adachi-drink-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/Cropped-026A9816-copy-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/Cropped-026A9838-copy-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/patio-sushi-min.jpg",
  "https://adachirestaurant.com/wp-content/uploads/2020/11/Cropped-026A9902-copy-min.jpg",
];

const GalleryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefcf9] via-[#f8f5f2] to-[#f0eae2] text-[#091b1e] font-serif">
      {/* Header */}
      <header className="bg-[#091b1e] text-[#ebdfd4] px-6 py-4 flex justify-between items-center shadow-md">
        <Link to={"/"}>
          <h1 className="text-4xl font-lavish tracking-wider">Zufos</h1>
        </Link>
        <button
          onClick={() => navigate("/")}
          className="bg-[#133b3d] px-4 py-2 rounded-xl hover:bg-[#0f2f30] text-white text-lg transition-all duration-300 shadow-sm"
        >
          Home
        </button>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#133b3d] tracking-tight">
          ✨ Our Signature Dishes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => {
            const thumb = src.replace(".jpg", "-414x500.jpg");
            const delay = 100 + (idx % 4) * 100;
            return (
              <div
                key={idx}
                className="relative group transform transition duration-300 hover:scale-105"
                style={{ animationDelay: `${delay}ms` }}
              >
                <a href={src} data-fancybox="gallery">
                  <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={thumb}
                      alt={`gallery-${idx}`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
