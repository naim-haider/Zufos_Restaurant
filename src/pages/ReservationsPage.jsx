import React from "react";
import { Link } from "react-router-dom";

const ReservationsPage = () => {
  return (
    <div className=" overflow-y-hidden h-screen">
      {/* Header  */}
      <div className="flex flex-wrap">
        <section className="mx-auto">
          <nav
            className={`flex justify-between items-center text-white w-screen transition-colors duration-300 bg-[#091b1e]
            }`}
          >
            <Link to={"/"}>
              <div className="px-5 xl:px-12 py-6">
                <div
                  className={`font-lavish transition-all duration-500 ease-in-out text-5xl
                    }`}
                >
                  Zufos
                </div>
              </div>
            </Link>
            <div className="px-5  py-6 font-serif cursor-pointer text-xl text-[#ebdfd4] border-[#ebdfd4] p-4 border-[1px] mr-5 w-[30%] flex justify-center items-center">
              <div className="flex w-screen text-center">
                <div className="w-1/2 border-r border-[#ebdfd4] flex justify-center items-center">
                  <Link to={"/order"}>Order Online</Link>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Link to={"/reservation"}>
                    <p>Reservations</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
      {/* OrderPage  */}
      <div className="min-h-screen w-screen flex  justify-between  bg-white">
        <section className="py-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase font-serif mb-4">
            Welcome to Zufos
          </h1>
          <p className="text-lg md:text-xl text-gray-500 uppercase font-semibold mb-8">
            Let’s Reserve Your Seat
          </p>

          <div className="flex flex-col flex-wrap gap-4 justify-center">
            <Link
              to="#"
              className="bg-[#133b3d] text-white px-6 py-3 rounded text-lg uppercase font-serif hover:bg-[#0f2f30]"
            >
              Breakfast
            </Link>
            <Link
              to="#"
              className="bg-[#133b3d] text-white px-6 py-3 rounded text-lg uppercase font-serif hover:bg-[#0f2f30]"
            >
              Lunch
            </Link>
            <Link
              to="#"
              className="bg-[#133b3d] text-white px-6 py-3 rounded text-lg uppercase font-serif hover:bg-[#0f2f30]"
            >
              Dinner
            </Link>
          </div>
        </section>
        <img
          className="h-[40%] w-[70%] mt-5"
          src="https://cdn7.bigcommerce.com/s-nu6nzn6ej0/product_images/uploaded_images/restaurant-complete-interior-solution-booth-seating-with-tables-and-chairs-made-in-usa-package-12-27-47771.1519141289.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default ReservationsPage;
