import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      console.log(json);

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  const filterTopRated = () => {
    const topRated = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurants(topRated);
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    searchData,
    setSearchData,
    handleSearch,
    filterTopRated,
  };
};

export default useRestaurants;
