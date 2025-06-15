import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import AnimatedText from "./AnimatedText";

export const DragCards = () => {
  return (
    <motion.section
      className="relative grid min-h-screen place-content-center overflow-hidden bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AnimatedText
        text={`Stylish and  `}
        tag="p"
        className="text-3xl text-[#ebdfd4] md:text-[10rem] font-serif font-normal mb-6 relative -top-72 -left-96"
      />
      <AnimatedText
        text={`Flavorful`}
        tag="p"
        className="text-3xl text-[#ebdfd4] md:text-[10rem] font-serif font-normal mb-6 relative -top-52 -left-96 "
      />
      <AnimatedText
        text={`Components`}
        tag="p"
        className="text-3xl text-[#ebdfd4] md:text-[10rem] font-serif font-normal mb-6 relative -top-32 -left-96 "
      />
      <Cards />
    </motion.section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
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
        "drag-elements absolute w-48 bg-none p-1 pb-4 rounded-lg  cursor-grab active:cursor-grabbing",
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

// Cards data
const cardData = [
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-1.png",
    alt: "Card 1",
    rotate: "6deg",
    top: "20%",
    left: "25%",
    className: "w-36 md:w-56",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-2.png",
    alt: "Card 2",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-24 md:w-48",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-3.png",
    alt: "Card 3",
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-52 md:w-80",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-5.png",
    alt: "Card 4",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-48 md:w-72",
  },
  {
    src: "https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-4.png",
    alt: "Card 5",
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-40 md:w-64",
  },
  {
    src: "/OIP.png",
    alt: "Card 6",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-24 md:w-72",
  },
];
