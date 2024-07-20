import RestCard, { withPromotedLabel } from "./Restcard";
import { useState, useEffect } from "react";
import { URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filterRest, setfilterRest] = useState([]);
  const [searchText, setsearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(URL);
    const json = await data.json();

    //optional chain
    setlistofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilterRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(filterRest);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like your are offline. Please Check your internet connection !!
      </h1>
    );

  return filterRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <div className="w-full pl-5 m-4">
          <input
            className="w-30 text-xl p-1 border-2 border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="p-1  text-lg m-4 border-2"
            onClick={() => {
              const searchRestaurant = listofRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setfilterRest(searchRestaurant);
            }}
          >
            Search
          </button>
          <button
            className="p-1 border-2 text-lg"
            onClick={() => {
              const topRestaurant = listofRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setfilterRest(topRestaurant);
            }}
          >
            Top restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center">
        {filterRest.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted restsData={restaurant} />
              ) : (
                <RestCard restsData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
