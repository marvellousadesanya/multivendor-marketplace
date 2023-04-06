import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Icon } from "../images/marketplaceIcon.svg";

const Menu = () => {
  const [fillColor, setFillColor] = useState("#000");

  const handleClick = () => {
    setFillColor("#fff");
  };

  return (
    <div className="sticky h-full w-[200px] font-innerbody bg-[#fff]  z-10 2xl:w-[360px]">
      <nav className="relative h-[70vh] mt-24">
        <p className="ml-8">MENU</p>

        <ul className="list-none font-semibold pt-5 ml-8 space-y-7">
          <div className="space-y-7">
            <div>
              <Link to="/inventory">
                <Icon
                  onClick={handleClick}
                  fill={fillColor}
                  style={{ cursor: "pointer" }}
                />
                <li>Marketplace</li>
              </Link>
            </div>

            <div>
              <Link to="/cart">
                <li>Cart</li>
              </Link>
            </div>

            <div>
              <Link to="/buyer-wallet">
                <li>Wallet</li>
              </Link>
            </div>

            <div>
              <Link>
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
