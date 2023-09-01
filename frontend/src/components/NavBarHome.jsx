import Logo from "../images/byteMarketLogo.png";

const NavBarHome = () => {
  return (
    <nav className="w-full h-14 flex items-center justify-between px-12 bg-[#E5E5E5]">
      <div>
        <img src={Logo} className="w-32" alt="" />
      </div>

      <div className="flex gap-7 font-innerbody text-base font-semibold">
        <p>Account</p>
        <p>Shop</p>
        <p>Wallet</p>
      </div>
    </nav>
  );
};

export default NavBarHome;
