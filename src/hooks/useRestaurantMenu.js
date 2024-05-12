import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(`${SWIGGY_MENU_URL}/${resId}`);
    const jsonData = await data.json();
    setResInfo(jsonData?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  // fetch data
  return resInfo;
};

export default useRestaurantMenu;
