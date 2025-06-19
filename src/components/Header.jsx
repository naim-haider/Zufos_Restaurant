import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "./ShiftingDropDown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap">
      <section className="fixed z-50 w-full">
        {/* XL and above layout */}
        <nav
          className={`hidden xl:flex justify-between items-center w-full transition-colors duration-300 ${
            isScrolled ? "bg-[#091b1e]" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="px-5 xl:px-12 py-6">
            <div
              className={`font-lavish transition-all duration-500 ease-in-out text-[#ebdfd4] ${
                isScrolled ? "text-5xl" : "text-8xl"
              }`}
            >
              Zufos
            </div>
          </div>

          {/* Navigation */}
          <div className="px-5 py-6 font-serif cursor-pointer w-full xl:w-[30%] text-xl text-[#ebdfd4] border-[#ebdfd4] p-4 border mr-5 flex justify-evenly items-center space-x-6">
            <Link to="/order">Order Online</Link>
            <div className="relative group">
              <div className="text-2xl select-none"> & </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50">
                <Tabs />
              </div>
            </div>
            <Link to="/reservation">Reservations</Link>
          </div>
        </nav>

        {/* LG and below layout */}
        <nav className="flex xl:hidden flex-col lg:flex-row justify-between items-center text-white w-full bg-[#091b1e]">
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
  );
};

export default Header;
