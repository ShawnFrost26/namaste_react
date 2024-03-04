import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" placeholder="Search here" />
      </div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
