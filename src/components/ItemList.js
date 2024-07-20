import { useDispatch } from "react-redux";
import { FOOD_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (elem) => {
    dispatch(addItems(elem));
  };

  return (
    <div className="p-2">
      {items.map((elem) => {
        return (
          <div
            className="w-full flex justify-between border-b-2 border-gray-300 p-2 bg-slate-200 
          mb-2"
          >
            <div className="w-[80%] mb-2">
              <h1 className="font-bold text-md"> {elem.card.info.name} </h1>

              <h2> {elem.card.info.description} </h2>
            </div>

            <div className="w-[20%] p-2 relative">
              <img
                src={FOOD_URL + elem.card.info.imageId}
                alt=""
                className="w-full h-full"
              />
              <button
                className=" border-2  p-1 absolute top-[72%] left-12 text-center text-white tetx-lg font-bold bg-black"
                onClick={() => handleAdd(elem)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
