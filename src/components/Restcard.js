import resList from "../utils/mockData";
import { FOOD_URL } from "../utils/constants";

const RestCard = ({ restsData }) => {
  const { name, cuisines, avgRating } = restsData?.info;
  const { deliveryTime } = restsData?.info.sla;

  console.log(restsData);

  return (
    <div className="w-64 h-[320px] border-2 border-black-500 shadow-md rounded-md p-1 hover:bg-gray-200 bg-slate-100">
      <div>
        <img
          className="w-64 h-40"
          alt="res-logo"
          src={FOOD_URL + restsData.info.cloudinaryImageId}
        />
      </div>
      <div>{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating}</div>
      <div>{deliveryTime} minutes</div>
    </div>
  );
};

//higher order components

export const withPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute border-2 border-black bg-black text-white p-1 ">
          Promoted
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
