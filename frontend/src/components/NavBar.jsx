import marketplaceLogo from "../images/MarketPlace.png";
import userPic from "../images/userpic.png";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-[#fff] w-full">
      <div>
        <img src={marketplaceLogo} alt="marketplace" />
      </div>
      <input
        type="text"
        className="rounded-lg bg-[#ECF0FF] 2xl:w-[500px] w-[400px] h-[40px]"
        placeholder="Search"
      />

      <div className="flex space-x-2 items-center">
        <p>The User Name</p>
        <img alt="" src={userPic} />
      </div>
    </div>
  );
};

export default NavBar;
