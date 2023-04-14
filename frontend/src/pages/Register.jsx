import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/byteMarketLogo.png";
import registerPic from "../images/registerPic.png";

const Register = () => {
  const [color, setColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  const accountTypeHandler = () => {
    setColor("bg-[#003049]");
    setSecondColor("");
  };

  const accountTypeHandler2 = () => {
    setSecondColor("bg-[#003049]");
    setColor("");
  };

  return (
    <div className=" h-full">
      <div className="flex">
        <div className="bg-[#DDE4FE]  h-screen flex justify-center">
          <div className="text-center space-y-7 w-[600px]">
            <div className="flex justify-center mb-20 pt-7">
              <img src={logo} alt="" />
            </div>

            <div className="flex justify-center ">
              <img src={registerPic} className="w-[350px]" alt="" />
            </div>

            <p className="text-bodyColor font-innerbody">Shop tech with</p>
            <h3 className="text-mainColor font-innerbody font-semibold text-5xl">
              ByteMarket
            </h3>
            <p className="text-bodyColor font-innerbody">
              Your go to online store for gadgets
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen w-[900px] bg-[#fff]">
          <form className="text-bodyColor font-innerbody w-[650px] ">
            <div>
              <h3 className="font-bold text-4xl mb-5">Register</h3>
              <div className="flex flex-col ">
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Password</label>
                <input type="password" />
                <label>Confirm Password</label>
                <input type="password" />
                <div className="flex rounded-xl w-[600px] border border-[#8A8A8A] h-10 mt-5">
                  <div
                    className={`hover:bg-[#003049] text-[#B8B8B8] ${color} hover:text-[#fff] text-center w-full cursor-pointer rounded-xl`}
                    onClick={accountTypeHandler}
                  >
                    Seller
                  </div>
                  <div
                    className={`hover:bg-[#003049] ${secondColor} active:bg-[#003049] text-[#B8B8B8] hover:text-[#fff] text-center w-full cursor-pointer rounded-xl`}
                    onClick={accountTypeHandler2}
                  >
                    Buyer
                  </div>
                </div>
                <input type="checkbox" />
                <span className={`text-[#B8B8B8]`}>
                  I agree with the terms and conditions
                </span>
                <button
                  className="rounded-xl w-[600px] bg-mainColor text-[#fff] h-10"
                  onClick={(e) => e.preventDefault()}
                >
                  Register
                </button>
                <p className="text-[#B8B8B8]">
                  Already have an account?
                  <span className="font-bold text-bodyColor">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
