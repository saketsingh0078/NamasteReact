import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="w-full h-16 flex justify-between content-center">
      <div>
        <img className="w-16" src={LOGO_URL} />
      </div>

      <div className=" flex justify-between items-center gap-5 text-lg">
        <div className="">onlineStatus : {onlineStatus ? "✅" : "🔴"}</div>

        <div className="home">
          <Link to="/">Home</Link>
        </div>
        <div className="about">
          <Link to="/about">About Us</Link>
        </div>
        <div className="contact">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="cart">Cart</div>

        <div className="grocery">
          {" "}
          <Link to="/grocery">Grocery</Link>
        </div>

        <div className="login">
          Login <span className="font-semibold"> {loggedInUser}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
