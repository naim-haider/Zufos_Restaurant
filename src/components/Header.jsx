import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect for scroll behaviour
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-wrap">
      <section className="fixed z-50 mx-auto">
        <nav
          className={`flex justify-between items-center text-white w-[100vw] transition-colors duration-300 ${
            isScrolled ? "bg-[#091b1e]" : "bg-transparent"
          }`}
        >
          <div className="px-5 xl:px-12 py-6">
            <div
              className={`font-lavish transition-all duration-500 ease-in-out ${
                isScrolled ? "text-5xl" : "text-8xl text-[#ebdfd4]"
              }`}
            >
              Zufos
            </div>
          </div>
          <div className="px-5 xl:px-12 py-6 font-serif cursor-pointer text-xl text-[#ebdfd4] border-[#ebdfd4] p-4 mb-4 border-[1px] mr-5 w-[30%] flex justify-center items-center">
            <div className="flex w-full text-center">
              <div className="w-1/2 border-r border-[#ebdfd4] flex justify-center items-center">
                <p>Order Online</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <p>Reservations</p>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
