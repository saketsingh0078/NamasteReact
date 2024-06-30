import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <img className="food-logo" src={LOGO_URL} />
      </div>

      <div className="nav">
        <div className="onlineStatus">
          onlineStatus : {onlineStatus ? "✅" : "🔴"}
        </div>

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

        <div className="login">Login</div>
      </div>
    </div>
  );
};

export default Header;
