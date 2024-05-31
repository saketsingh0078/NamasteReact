import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="food-logo" src={LOGO_URL} />
      </div>

      <div className="nav">
        <div className="home">Home</div>
        <div className="about">about</div>
        <div className="cart">cart</div>
        <div className="login">Login</div>
      </div>
    </div>
  );
};

export default Header;
