import React from "react";
import logo from "../images/byteMarketLogo.png";
import registerPic from "../images/registerPic.png";

function LeftSidebar() {
  return (
    <div className="hidden bg-[#DDE4FE]  md:flex justify-center rounded-tr-[6rem] rounded-br-[6rem]">
      <div className="text-center space-y-7 w-[500px]">
        <div className="flex justify-center mb-20 pt-7">
          <img src={logo} alt="" />
        </div>

        <div className="flex justify-center ">
          <img src={registerPic} className="w-[350px]" alt="" />
        </div>

        <p className="text-[#00304] font-innerbody">Shop tech with</p>
        <h3 className="text-[#F77F00] font-innerbody font-semibold text-5xl">
          ByteMarket
        </h3>
        <p className="text-[#00304] font-innerbody">
          Your go to online store for gadgets
        </p>
      </div>
    </div>
  );
}

export default LeftSidebar;
