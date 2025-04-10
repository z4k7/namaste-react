import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      {cartItems.length != 0 && (
        <button
          className="bg-black text-white px-2 py-1 rounded-lg"
          onClick={handleCart}
        >
          Clear Cart
        </button>
      )}

      <div className="w-xl mx-auto">
        {cartItems.length === 0 && (
          <h1>Cart is empty. Please add some items!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
