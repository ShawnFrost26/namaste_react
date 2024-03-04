import resObj from "../utils/mockData";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurant.info.cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{restaurant.info.name}</h3>
      <h3>{restaurant.info.locality}</h3>
      <h4>{restaurant.info.cuisines.join(", ")}</h4>
      <h4>{restaurant.info.avgRatingString + " stars"}</h4>
      <h4>{restaurant.info.sla.deliveryTime + " minutes"}</h4>
      <h4>{restaurant.info.costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
