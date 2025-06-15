import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { DragCards } from "./components/DragCard";
import Menu from "./components/Menu";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation only happens once
    });
  }, []);

  return (
    <div className="font-body text-gray-800">
      <Header />
      <Hero />
      <DragCards />
      <Menu />
    </div>
  );
}

export default App;
