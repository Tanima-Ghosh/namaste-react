
import { CDN_URL } from "../utils/constants";

// RestaurantCard 

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {cloudinaryImageId, name, cuisines, avgRating, sla:{deliveryTime, lastMileTravelString}, costForTwo} = resData?.card?.card?.info

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={ CDN_URL+cloudinaryImageId }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Starts</h4>
      <h5>{deliveryTime} Minutes</h5>
      <h5>{costForTwo} for Two</h5>
      <h6>{lastMileTravelString}</h6>
    </div>
  );
};



export default RestaurantCard;