import { HeroCard } from "../1.Hero/HeroCard";
import Marquee from "react-fast-marquee";
import React from "react";

export const MarqueeLine = () => {
  const images = [
    "/Card1.png",
    "/Card2.png",
    "/Card3.png",
    "/Card4.png",
    "/Card5.png",
    "/Card6.png",
  ];
  return (
    <div className="flex justify-center items-center py-12">
      <Marquee autoFill gradient gradientColor="#1f1f1f">
        {images.map((item, index) => (
          <div key={index}>
            <HeroCard image={item} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
