"use client";

import Spinner from "@/components/Common/Spinner";
import React from "react";
import { useHousesHook } from "./Hooks/useHousesHook";
import HouseCard from "./HouseCard";

const Houses = () => {
  const { housesData, loading } = useHousesHook();

  return (
    <div className="flex flex-col h-full overflow-auto justify-center items-center gap-5 pt-20">
      {loading && <Spinner />}
      {!loading &&
        housesData?.length &&
        housesData?.map((item) => <HouseCard key={item.id} {...item} />)}
    </div>
  );
};

export default Houses;
