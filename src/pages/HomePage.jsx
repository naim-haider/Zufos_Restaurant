import React, { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { DragCards } from "../components/DragCard";
import Menu from "../components/Menu";

const HomePage = () => {
  const menuRef = useRef(null);
  return (
    <div className="font-body text-gray-800">
      <Header />
      <Hero menuRef={menuRef} />
      <DragCards />
      <Menu ref={menuRef} />
    </div>
  );
};

export default HomePage;
