import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Card = () => {
  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems);

  return (
    <div className="w-full flex flex-col items-center pl-[6vw] pr-[6vw]">
      <div className="font-bold text-xl"> card</div>

      <div>
        <ItemList items={cartitems} />
      </div>
    </div>
  );
};

export default Card;
