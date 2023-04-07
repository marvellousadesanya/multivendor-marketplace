import { useState } from "react";
import { Link } from "react-router-dom";

import CartIcon from "../images/svg-icons/newCartIcon.jsx";
import MarketplaceI from "../images/svg-icons/marketplaceIcon.jsx";
import WalletIcon from "../images/svg-icons/WalletIcon.jsx";
import AccountIcon from "../images/svg-icons/AccountIcon.jsx";

// import { ReactComponent as Icon } from "../images/marketplaceIcon.svg";

const Menu = () => {
  const [fillColor, setFillColor] = useState("#003049");

  const changeColor = () => {
    setFillColor("#F77F00");
  };

  return (
    <div className="sticky h-full w-[200px] font-innerbody bg-[#fff]  z-10 2xl:w-[360px]">
      <nav className="relative h-[70vh] mt-24">
        <p className="ml-8">MENU</p>

        <ul className="list-none font-semibold pt-5 ml-8 space-y-7">
          <div className="space-y-12">
            <div
              className="hover:pl-2 transition-all ease-in"
              onClick={changeColor}
            >
              <Link className="flex space-x-3" to="/inventory">
                <MarketplaceI fill={fillColor} />
                <li>Marketplace</li>
              </Link>
            </div>

            <div className="hover:pl-2 transition-all ease-in">
              <Link className="flex space-x-3" to="/cart">
                <CartIcon />
                <li>Cart</li>
              </Link>
            </div>

            <div className="hover:pl-2 transition-all ease-in">
              <Link className="flex space-x-3" to="/buyer-wallet">
                <WalletIcon />
                <li>Wallet</li>
              </Link>
            </div>

            <div className="hover:pl-2 transition-all ease-in">
              <Link className="flex space-x-3">
                <AccountIcon />
                <li>Account</li>
              </Link>
            </div>
          </div>
        </ul>

        <p className="absolute bottom-0 ml-8">Log out</p>
      </nav>
    </div>
  );
};

export default Menu;
