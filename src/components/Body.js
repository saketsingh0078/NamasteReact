import RestCard from "./Restcard";
import resList from "../utils/mockData";

const restsList =
  resList.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>

      <div className="card">
        {restsList.map((restaurant) => {
          return <RestCard key={restaurant.id} restsData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
