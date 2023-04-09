import { Link } from "react-router-dom";
import userPic from "../images/userpic.png";
import logo from "../images/byteMarketLogo.png";

const NavBar = () => {
  return (
    <div className="flex h-20 px-7 justify-between items-center bg-[#fff] w-full">
      <div>
        <Link to="/">
          <img alt="" src={logo} />
        </Link>
      </div>
      <input
        type="text"
        className="rounded-lg pl-5 bg-[#ECF0FF] 2xl:w-[500px] w-[700px] h-[40px]"
        placeholder="Search anything"
      />

      <div className="flex space-x-2 items-center">
        <p>The User Name</p>
        <img alt="" src={userPic} />
      </div>
    </div>
  );
};

export default NavBar;
