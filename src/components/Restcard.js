import resList from "../utils/mockData";
import { FOOD_URL } from "../utils/constants";

const RestCard = ({ restsData }) => {
  const { name, cuisines, avgRating } = restsData?.info;
  const { deliveryTime } = restsData?.info.sla;

  return (
    <div className="res-card">
      <div>
        <img
          className="res-food-img"
          alt="res-logo"
          src={FOOD_URL + restsData.info.cloudinaryImageId}
        />
      </div>
      <div>{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating}</div>
      <div>{deliveryTime}minutes</div>
    </div>
  );
};

export default RestCard;
