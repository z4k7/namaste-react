import { useContext } from "react";
import { CDN_LINK } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {loggedInUser} = useContext(UserContext)

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="p-4 w-[250px] h-[500px]  rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg"
        src={CDN_LINK + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold text-lg py-2">{name}</h3>

      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser} </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-green-500 text-white rounded lg px-1.5 m-4">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
