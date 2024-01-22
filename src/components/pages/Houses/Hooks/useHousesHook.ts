import { getHousesData } from "@/services/getHouses";
import { useEffect, useState } from "react";
import { HouseDataType } from "../types";

export const useHousesHook = () => {
  const [housesData, setHousesData] = useState<HouseDataType[]>();

  const getHouseData = async () => {
    const data = await getHousesData();
    setHousesData(data);
  };
  useEffect(() => {
    getHouseData();
  }, []);

  return {
    housesData,
  };
};
