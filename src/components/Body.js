import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Body
const Body = () => {
  // Local state variable - super powerful variable

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState("");

  // whenever a state variable update, react triggers a reconciliation cycle / rerendering the component

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5704758&lng=88.3258622&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    console.log(json?.data?.cards.slice(-12));

    setListOfRestaurant(json?.data?.cards.slice(-13));
    setFilteredRestaurant(json?.data?.cards.slice(-13));
  };

  // conditional rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer />
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
          />

          {/* search restaurant */}
          <button
            className="search-btn"
            onClick={() => {
              // filter the restaurant cards and updated the ui
              // search
              console.log("button clicked")
              const filteredRestaurant = listOfRestaurant.filter((res)=>{
                return res.card.card.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              })
              setFilteredRestaurant(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>

        {/* top rated rastaurant */}
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurant.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );

            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* restaurant card */}
        {filteredRestaurant.map((restaurent) => (
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


