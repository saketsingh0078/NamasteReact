const RestaurantCard = ({ restaurtant }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName, locality } =
    restaurtant.info;

  const { deliveryTime } = restaurtant.info.sla;
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {avgRating} - {}
      </h3>
    </div>
  );
};
