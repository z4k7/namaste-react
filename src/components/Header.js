import { LOGO_LINK } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("rendered");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center px-3  shadow-lg mb-2 ">
      <div className="w-28">
        <img src={LOGO_LINK} alt="logo" />
      </div>

      <div className="nav-items">
        <ul className="flex gap-3">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <li className="font-bold">{loggedInUser}</li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
