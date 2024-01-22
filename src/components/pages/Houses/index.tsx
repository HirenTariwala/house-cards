"use client";

import React from "react";
import { useHousesHook } from "./Hooks/useHousesHook";
import HouseCard from "./HouseCard";

const Houses = () => {
  const { housesData } = useHousesHook();

  return (
    <div className="flex flex-col items-center gap-5 pt-20">
      {housesData?.length &&
        housesData?.map((item) => <HouseCard key={item.id} {...item} />)}
    </div>
  );
};

export default Houses;
