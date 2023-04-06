// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/byteMarketLogo.png";
import { ReactComponent as Icon } from "../images/marketplaceIcon.svg";

const Menu = () => {
  //   const [color, setColor] = useState("#000000");

  //   function handleClick() {
  //     setColor("#003049");
  //   }

  return (
    <div className="w-[200px] font-innerbody bg-[#fff] h-full z-10 2xl:w-[360px]">
      <div>
        <img alt="" src={logo} />
      </div>
      <nav className="relative h-[70vh] mt-24">
        <p className="ml-8">MENU</p>
        <ul className="list-none font-semibold space-y-8 pt-5 ml-8">
          <Link to="/inventory">
            <li>Marketplace</li>
          </Link>
          <li>Cart</li>
          <li>Orders</li>
          <li>Saved</li>
          <Link to="/buyer-wallet">
            <li>Wallet</li>
          </Link>
          <li>Account</li>
        </ul>
        <p className="absolute bottom-0 ml-8">Log out</p>
      </nav>
    </div>
  );
};

export default Menu;
