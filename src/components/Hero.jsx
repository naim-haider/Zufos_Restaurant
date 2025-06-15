import React from "react";
import AnimatedText from "./AnimatedText";

const Hero = ({ menuRef }) => {
  const scrollToMenu = () => {
    menuRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section
        data-aos="fade-right"
        className="relative h-[150vh] w-full bg-black text-white"
      >
        <img
          src="https://adachirestaurant.com/wp-content/uploads/2020/11/home-hero-scaled.jpg"
          alt="Adachi Restaurant"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="relative text-[#ebdfd4] z-10 flex items-start justify-start h-full px-6 md:px-20">
          <div className="mt-32 md:mt-48 max-w-[75%]">
            <AnimatedText
              text="A HARMONY OF SPICE AND SIMPLICITY"
              tag="p"
              className="text-2xl md:text-4xl uppercase font-thin mb-4 font-serif"
            />
            <AnimatedText
              text="Cuisine from the Heaven"
              tag="h1"
              className="text-4xl md:text-6xl xl:text-9xl font-bold uppercase font-serif"
              delay={0.4}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-0"></div>
      </section>
      <section
        data-aos="fade-right"
        className="relative -top-96 bg-[#021e20] h-screen text-[#ebdfd4] max-w-[85%] px-6 py-20 md:px-20 md:py-32 "
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-12 items-start relative z-10">
          <div>
            <AnimatedText
              text="Our Mission"
              tag="p"
              className="text-3xl md:text-8xl font-serif font-bold mb-6 -ml-20"
            />
            <div className="text-base md:text-lg font-light leading-relaxed flex gap-5 ml-32">
              <div className="flex flex-col gap-5">
                <p>
                  Looking for the finest Indian dining experience in Birmingham,
                  Michigan? Look no further than Zufos, nestled in the historic
                  Victorian Peabody Mansion. Our Executive Chef brings years of
                  culinary mastery and passion, crafting an array of vibrant,
                  spice-rich dishes that celebrate the diverse flavors of India.
                </p>
                <p>
                  At Zufos, we offer a thoughtfully curated menu of small and
                  large plates, handcrafted cocktails, and a selection of
                  regional Indian specialties—from rich curries to sizzling
                  tandoori and fragrant biryanis. We source the freshest
                  ingredients from both local farms and premium international
                  suppliers to deliver an authentic yet modern take on Indian
                  cuisine.
                </p>
              </div>
              <div className="flex flex-col gap-5 ml-28">
                <p>
                  Zufos stands apart by embracing the social spirit of Indian
                  dining and combining it with a vibe-driven, upscale
                  atmosphere. Our warm ambiance and contemporary decor across
                  the dining room, lounge, and cocktail bar create a welcoming
                  and stylish setting.
                </p>
                <p>
                  Join us for dinner, drinks, private events, or special
                  occasions. Zufos delivers world-class hospitality with heart,
                  making every visit an unforgettable celebration of Indian
                  flavor and culture.
                </p>
              </div>
            </div>

            <div className="mt-8 text-right">
              <a
                onClick={scrollToMenu}
                className="text-[#ebdfd4] cursor-pointer border-b border-[#ebdfd4] text-lg hover:opacity-80 transition font-serif"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="w-full h-full relative top-20 left-20"
        >
          <img
            src="https://adachirestaurant.com/wp-content/uploads/2020/11/home-pic-scaled.jpg"
            alt="Our Mission"
            className="shadow-xl object-cover w-full h-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
