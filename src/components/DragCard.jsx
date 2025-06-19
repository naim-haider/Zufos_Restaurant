import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import AnimatedText from "./AnimatedText";

export const DragCards = () => {
  return (
    <motion.section
      className="relative min-h-screen bg-white px-4 py-24 flex flex-col items-start justify-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mb-16 space-y-4 md:space-y-0 md:mb-32">
        <AnimatedText
          text={`Stylish and`}
          tag="p"
          className="text-3xl sm:text-5xl md:text-[8rem] text-[#ebdfd4] font-serif font-normal"
        />
        <AnimatedText
          text={`Flavorful`}
          tag="p"
          className="text-3xl sm:text-5xl md:text-[8rem] text-[#ebdfd4] font-serif font-normal"
        />
        <AnimatedText
          text={`Components`}
          tag="p"
          className="text-3xl sm:text-5xl md:text-[8rem] text-[#ebdfd4] font-serif font-normal"
        />
      </div>
      <Cards />
    </motion.section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      ref={containerRef}
    >
      {cardData.map((card, index) => (
        <Card key={index} containerRef={containerRef} {...card} />
      ))}
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZ = Math.max(
      ...Array.from(els).map((el) =>
        parseInt(window.getComputedStyle(el).zIndex || 0)
      )
    );
    setZIndex(maxZ + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={twMerge(
        "drag-elements absolute bg-none p-1 pb-4 rounded-lg cursor-grab active:cursor-grabbing pointer-events-auto",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

const cardData = [
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-1.png",
    alt: "Card 1",
    rotate: "6deg",
    top: "12%",
    left: "10%",
    className: "w-24 sm:w-36 md:w-56",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-2.png",
    alt: "Card 2",
    rotate: "12deg",
    top: "40%",
    left: "60%",
    className: "w-20 sm:w-32 md:w-48",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-3.png",
    alt: "Card 3",
    rotate: "-6deg",
    top: "20%",
    left: "45%",
    className: "w-28 sm:w-44 md:w-80",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-5.png",
    alt: "Card 4",
    rotate: "8deg",
    top: "55%",
    left: "30%",
    className: "w-28 sm:w-40 md:w-72",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-4.png",
    alt: "Card 5",
    rotate: "18deg",
    top: "15%",
    left: "70%",
    className: "w-24 sm:w-36 md:w-64",
  },
  {
    src: "/OIP.png",
    alt: "Card 6",
    rotate: "-3deg",
    top: "30%",
    left: "55%",
    className: "w-20 sm:w-32 md:w-72",
  },
];
