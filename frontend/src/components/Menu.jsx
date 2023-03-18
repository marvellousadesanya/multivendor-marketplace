import logo from "../images/byteMarketLogo.png";

const Menu = () => {
  return (
    <div className="w-[280px] font-innerbody">
      <div>
        <img alt="" src={logo} />
      </div>
      <nav className="relative h-[85vh] ">
        <p className="">MENU</p>
        <ul className="list-none font-bold space-y-8 pt-5">
          <li>Marketplace</li>
          <li>Cart</li>
          <li>Orders</li>
          <li>Saved</li>
          <li>Wallet</li>
          <li>Account</li>
        </ul>
        <p className="absolute bottom-0">Log out</p>
      </nav>
    </div>
  );
};

export default Menu;
