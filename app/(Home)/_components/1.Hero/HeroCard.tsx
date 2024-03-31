import Image from "next/image";
import React from "react";
interface ICardProps {
  title?: string;
  image?: string;
}
export const HeroCard = ({ title, image }: ICardProps) => {
  return (
    <div className="flex w-full h-full">
      {title && (
        <div className="w-max bg-muted-foreground/30 px-4 py-3 rounded-lg backdrop-blur-3xl z-30">
          <h1 className="text-md">{title}</h1>
        </div>
      )}
      {image && (
        <div className="flex border border-white mr-4 border-dashed bg-[#1f1f1f]">
          <Image src={image} alt="" height={300} width={300}></Image>
        </div>
      )}
    </div>
  );
};
