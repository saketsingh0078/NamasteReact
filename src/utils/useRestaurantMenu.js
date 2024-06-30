import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restMenu, setrestMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    // console.log(json.data.cards);
    setrestMenu(json.data);
  };

  return restMenu;
};

export default useRestaurantMenu;
