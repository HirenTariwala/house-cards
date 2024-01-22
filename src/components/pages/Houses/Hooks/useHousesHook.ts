import { getHousesData } from "@/services/getHouses";
import { useEffect, useState } from "react";
import { HouseDataType } from "../types";

export const useHousesHook = () => {
  const [housesData, setHousesData] = useState<HouseDataType[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const getHouseData = async () => {
    try {
      const data = await getHousesData();
      setHousesData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getHouseData();
  }, []);

  return {
    housesData,
    loading,
  };
};
