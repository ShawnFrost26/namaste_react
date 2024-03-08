import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resObj);
  const [searchWord, setSearchWord] = useState("");

  const handleTopRatedRes = () => {
    filteredList = listOfRes.filter((res) => res.info.avgRating > 4.5);
    setListOfRes(filteredList);
  };

  const handleSearch = (e) => {
    const inputText = e.target.value;
    setSearchWord(inputText);

    if (!inputText || inputText.trim() == "") {
      // If the search bar is empty, reset the list to the original data
      setListOfRes(resObj);
    } else {
      const searchList = resObj.filter((res) =>
        res.info.name.toLowerCase().includes(inputText.toLowerCase())
      );
      setListOfRes(searchList);
    }
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          placeholder="Search here"
          value={searchWord}
          onChange={handleSearch}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedRes}>
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
