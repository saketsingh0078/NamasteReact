import RestCard from "./Restcard";
import { useState, useEffect } from "react";
import { URL } from "../utils/constants";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filterRest, setfilterRest] = useState([]);
  const [searchText, setsearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(URL);
    const json = await data.json();

    setlistofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilterRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div>
      <div>
        <div className="search-container">
          <input
            className="search "
            type="text"
            value={searchText}
            onChange={(e) => {
              console.log(searchText);
              setsearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              const searchRestaurant = listofRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase());
                }
              );
              setfilterRest(searchRestaurant);
              console.log(searchText);
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
          return <RestCard key={restaurant.id} restsData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
