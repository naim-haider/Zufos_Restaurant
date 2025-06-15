import React from "react";

const Gallery = () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-full h-48 object-cover rounded-md"
        />
      ))}
    </div>
  );
};

export default Gallery;
