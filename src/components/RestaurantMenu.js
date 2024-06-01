import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restMenu, setrestMenu] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  };

  return <div></div>;
};

export default RestaurantMenu;
