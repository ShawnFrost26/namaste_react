import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log("data:::", data);

    const restaurants =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(restaurants);
    setFilteredRes(restaurants);
  };

  const handleTopRatedRes = () => {
    const filteredList = listOfRes.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRes(filteredList);
  };

  const handleSearch = () => {
    setFilteredRes(
      listOfRes.filter((res) =>
        res.info.name.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  };

  const handleClear = () => {
    setSearchWord("");
    setFilteredRes(listOfRes);
  };

  const handleSearchInputChange = (e) => {
    setSearchWord(e.target.value);
  };
  if (filteredRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          placeholder="Search here"
          value={searchWord}
          onChange={handleSearchInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedRes}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {console.log("filteredRes inside return:", filteredRes)} */}
        {filteredRes.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRes.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
