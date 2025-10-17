import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// Body
const Body = () => {

  // Local state variable - super powerful variable

  const [listOfRestaurant, setListOfRestaurant] = useState(resList)


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurant.filter(res => res.card.card.info.avgRating > 4.5)

            setListOfRestaurant(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* restaurant card */}
        {listOfRestaurant.map((restaurent) => (
          <RestaurantCard
            key={restaurent.card.card.info.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};


export default Body;
