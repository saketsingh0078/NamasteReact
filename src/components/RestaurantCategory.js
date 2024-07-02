import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ item, showItems, setShowIndex }) => {
  function handleClick() {
    setShowIndex();
  }

  return (
    <div className="w-full mb-4 border-2 border-gray-300 shadow-md bg-gray-100">
      {/* header */}
      <div
        className="bg-gray-300 text-lg p-1 border-b-2 flex justify-between font-bold cursor-pointer"
        onClick={handleClick}
      >
        {item.card.card.title} - ({item.card.card.itemCards.length})
        <span>⬇️</span>
      </div>

      {/* description */}

      {showItems && <ItemList items={item.card.card.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
