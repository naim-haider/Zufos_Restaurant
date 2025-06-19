import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useOrder } from "../../context/OrderContext";
import { Tabs } from "../../components/ShiftingDropDown";

const ServingOptionPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { setOrder } = useOrder();

  useEffect(() => {
    if (!user) {
      navigate("/account");
    }
  }, [user, navigate]);

  const handleSelect = (selectedType) => {
    setOrder((prev) => ({
      ...prev,
      type: selectedType,
    }));
    navigate("/address-details");
  };

  return (
    <div className="h-screen w-full overflow-y-hidden">
      {/* Header */}
      <div className="flex flex-wrap">
        <section className="mx-auto w-full">
          <nav className="flex flex-col lg:flex-row justify-between items-center text-white w-full bg-[#091b1e]">
            <div className="px-5 xl:px-12 py-4">
              <div className="font-lavish text-4xl lg:text-5xl text-[#ebdfd4]">
                <Link to={"/"}>Zufos</Link>
              </div>
            </div>
            <div className="px-5 py-4 font-serif text-lg lg:text-xl text-[#ebdfd4] border border-[#ebdfd4] w-full lg:w-[30%] flex justify-center items-center">
              <div className="flex justify-evenly w-full items-center space-x-4 text-center">
                <Link to="/order">Order Online</Link>
                <div className="relative group">
                  {/* Trigger button styled like & */}
                  <div className="text-2xl select-none"> & </div>

                  {/* Dropdown appears on hover */}
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

      {/* Content */}
      <div className="flex flex-col xl:flex-row min-h-[calc(100vh-80px)]">
        {/* Text and buttons */}
        <section
          className={`
            flex-1 flex flex-col justify-center items-center 
            text-center px-6 py-12
            ${/* Below xl: show background */ ""}
            xl:bg-none bg-[url('/orderPageImage.webp')] bg-cover bg-center relative
          `}
        >
          {/* Overlay for readability below xl */}
          <div className="absolute inset-0 bg-[#091b1ecf] xl:hidden"></div>

          <div className="relative z-10 w-full max-w-md">
            <p className="text-xl md:text-2xl xl:text-[#133b3d] text-[#ebdfd4] font-serif uppercase font-semibold mb-8">
              How would you like to get your order?
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleSelect("Pickup")}
                className="bg-[#133b3d] text-white px-8 py-3 rounded text-lg uppercase font-serif hover:bg-[#0f2f30]"
              >
                Pickup
              </button>
              <button
                onClick={() => handleSelect("Delivery")}
                className="bg-[#133b3d] text-white px-8 py-3 rounded text-lg uppercase font-serif hover:bg-[#0f2f30]"
              >
                Delivery
              </button>
            </div>
          </div>
        </section>

        {/* Image section visible only on xl+ */}
        <div className="hidden xl:block w-1/2">
          <img
            src="/orderPageImage.webp"
            alt="Order"
            className="w-full h-full object-cover mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ServingOptionPage;
