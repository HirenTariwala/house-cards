import React from "react";
import { HouseDataType } from "../types";
import { checkValidCssColor } from "@/utils";

const HouseCard = (props: HouseDataType) => {
  const { animal, name, founder, houseColours } = props;
  const [firstColor, secondColor] = houseColours.split("and");

  const gradientStyle = {
    background: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
  };

  return (
    <div className="flex flex-col gap-2 bg-white text-black w-[350px] rounded-md p-4 border shadow-md">
      <div className="flex justify-between">
        <strong className="text-xl">{name}</strong>
        <p className="text-sm">{animal}</p>
      </div>
      {checkValidCssColor(firstColor) && checkValidCssColor(secondColor) ? (
        <div className="w-full h-4 rounded" style={gradientStyle}></div>
      ) : (
        <div className="bg-gradient-to-r from-white via-gray-400 to-black w-full h-4 rounded"></div>
      )}
      <div className="flex items-center gap-1">
        <p className="text-sm">Founder:</p>
        <strong className="text-sm">{founder}</strong>
      </div>
    </div>
  );
};

export default HouseCard;
