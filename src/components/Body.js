import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRetaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurants,
    searchData,
    setSearchData,
    handleSearch,
    filterTopRated,
  } = useRestaurants();

  const {loggedInUser, setUserName} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (onlineStatus === false) {
    return (
      <h1>
        OOPS! Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto">
      <div className="flex items-center gap-3 p-5 ">
        <div className="flex gap-2">
          <input
            className="border border-solid border-black rounded-lg py-1 "
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-300 rounded-lg cursor-pointer "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="px-4 py-1 bg-violet-300 rounded-lg cursor-pointer "
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div>
          <label>Username : </label>
          <input
            className="border border-black rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
