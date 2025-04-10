import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between gap-2 m-2 p-2 border-gray-200 border-b-2 text-left"
        >
          <div className="w-9/12">
            <div className="flex flex-col mb-2  ">
              <span>{item.card.info.name}</span>
              <span>₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute  ">
              <button
                className="bg-black font-semibold text-xs text-white cursor-pointer  rounded-lg p-2 mt-18 mx-12"
                onClick={() => handleCart(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="rounded-lg w-full h-auto"
              src={CDN_LINK + item.card.info.imageId}
              alt="res-logo"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
