import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restMenu = useRestaurantMenu(resId);

  if (restMenu === null) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage } =
    restMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines.join(" ,")} - {costForTwoMessage}
      </h4>

      {itemCards.map((elem) => {
        return (
          <li id={elem.card.info.id}>
            {elem.card.info.name} - {"rs "}
            {elem.card.info.price / 100 || elem.card.info.defaultPrice / 100}
          </li>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
