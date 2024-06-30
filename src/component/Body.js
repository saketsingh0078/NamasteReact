import RestCard from "./Restcard";
import { useState, useEffect } from "react";
import { URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filterRest, setfilterRest] = useState([]);
  const [searchText, setsearchText] = useState(" ");

  const onlineStatus = useOnlineStatus();

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
        <div className="search-container">
          <input
            className="search "
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          {console.log(searchText)}
          <button
            className="btn"
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
            className="top-restaurant"
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

      <div className="card">
        {filterRest.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestCard restsData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
