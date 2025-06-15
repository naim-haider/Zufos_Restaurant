import React from "react";

const AnimatedText = ({ text, tag = "p", delay = 0, className = "" }) => {
  const Tag = tag;

  return (
    <Tag className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${delay + i * 0.04}s`,
            animationFillMode: "forwards",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
