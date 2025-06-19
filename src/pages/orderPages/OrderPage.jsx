import React from "react";
import { Link } from "react-router-dom";
import { Tabs } from "../../components/ShiftingDropDown";

const OrderPage = () => {
  return (
    <div className="h-screen w-full overflow-y-hidden">
      {/* Header */}
      <div className="flex flex-wrap">
        <section className="mx-auto w-full">
          <nav className="flex flex-col lg:flex-row justify-between items-center text-white w-full bg-[#091b1e]">
            <Link to="/">
              <div className="px-5 xl:px-12 py-4">
                <div className="font-lavish text-4xl lg:text-5xl text-[#ebdfd4] transition-all duration-500">
                  Zufos
                </div>
              </div>
            </Link>
            <div className="px-5 py-4 font-serif text-lg lg:text-xl text-[#ebdfd4] border border-[#ebdfd4] w-full lg:w-[30%] flex justify-center items-center">
              <div className="flex justify-evenly w-full items-center space-x-4 text-center">
                <Link to="/order">Order Online</Link>
                <div className="relative group">
                  <div className="text-2xl select-none"> & </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50">
                    <Tabs />
                  </div>
                </div>
                <Link to="/reservation">Reservations</Link>
              </div>
            </div>
          </nav>
        </section>
      </div>

      {/* Content Section */}
      <div className="flex flex-col xl:flex-row min-h-[calc(100vh-80px)] w-full">
        {/* Left side content */}
        <section
          className={`
            flex-1 flex flex-col justify-center items-center text-center px-6 py-12 
            xl:bg-none bg-[url('/orderPageImage.webp')] bg-cover bg-center relative
          `}
        >
          {/* Overlay for smaller screens */}
          <div className="absolute inset-0 bg-[#091b1ed9] xl:hidden z-0"></div>

          <div className="relative z-10 w-full max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold uppercase font-serif mb-4 text-[#ebdfd4] xl:text-[#133b3d]">
              Welcome to Zufos
            </h1>
            <p className="text-lg md:text-xl uppercase font-semibold mb-8 text-[#ebdfd4] xl:text-gray-600">
              Let’s get started
            </p>

            <div className="flex flex-col gap-4">
              <Link
                to="/serving-option"
                className="bg-[#133b3d] text-white px-8 py-3 rounded text-lg uppercase font-serif hover:bg-[#0f2f30]"
              >
                Start New Order
              </Link>
              <Link
                to="/order-review"
                className="bg-[#133b3d] text-white px-8 py-3 rounded text-lg uppercase font-serif hover:bg-[#0f2f30]"
              >
                View Orders
              </Link>
            </div>
          </div>
        </section>

        {/* Right side image (only visible in xl and above) */}
        <div className="hidden xl:block w-1/2">
          <img
            className="w-full h-full object-cover mt-5"
            src="/orderPageImage.webp"
            alt="Order Page Visual"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
