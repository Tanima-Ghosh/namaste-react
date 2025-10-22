import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Body
const Body = () => {

  // Local state variable - super powerful variable

  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    fetchData()
  }, [])


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5704758&lng=88.3258622&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

    const json = await data.json()

    console.log(json?.data?.cards.slice(-2))

    setListOfRestaurant(json?.data?.cards.slice(-2));
  }


  // conditional rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer />
  // }
  
  return listOfRestaurant.length === 0 ? (<Shimmer />) :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="search-btn" onClick={() => {
            // filter the restaurant cards and updated the ui
            // search

          }}>Search</button>
        </div>
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
