import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  // subscribing the cart using the selectors
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="w-full h-16 flex justify-between content-center">
      <div>
        <img className="w-16" src={LOGO_URL} />
      </div>

      <div className=" flex justify-between items-center gap-5 text-lg">
        <div>onlineStatus : {onlineStatus ? "✅" : "🔴"}</div>

        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="font-bold">
          <Link to="/cart">Cart - ({cartItems.length} items)</Link>
        </div>
        <div>
          <Link to="/grocery">Grocery</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
