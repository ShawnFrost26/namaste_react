import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resObj);

  return (
    <div className="body">
      <div className="search">
        <input type="search" placeholder="Search here" />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRes.filter((res) => res.info.avgRating > 4.5);
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
