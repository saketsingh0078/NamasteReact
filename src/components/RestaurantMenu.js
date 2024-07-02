import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (restMenu === null) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage } =
    restMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    restMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (elem) =>
        elem?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(restMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  console.log(categories);

  return (
    <div className="flex items-center flex-col">
      <h1 className="font-bold text-xl">{name}</h1>
      <h2 className="font-bold mb-4">
        {cuisines} - {costForTwoMessage}{" "}
      </h2>

      {categories.map((item, index) => {
        return (
          <div
            key={item.card.card.title}
            className="flex justify-center w-6/12"
          >
            {/* accordian */}
            <RestaurantCategory
              item={item}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
