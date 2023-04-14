import { Link } from "react-router-dom";
import logo from "../images/byteMarketLogo.png";
import registerPic from "../images/registerPic.png";

const Login = () => {
  return (
    <div className="bg-[#DDE4FE]">
      <div className="h-screen flex ">
        <div className="bg-[#DDE4FE] flex justify-center">
          <div className="text-center space-y-7 min-w-[450px]">
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

        <div className="h-screen bg-[#DDE4FE]">
          <div className="flex justify-center items-center h-screen w-[900px] bg-[#fff]">
            <form className="text-bodyColor font-innerbody w-[650px] ">
              <div>
                <h3 className="font-bold text-4xl">Login</h3>
                <div className="flex flex-col ">
                  <label>Name</label>
                  <input type="text" />

                  <label>Email</label>
                  <input type="email" />

                  <label>Password</label>
                  <input type="password" />

                  <button className="rounded-xl w-[600px] bg-mainColor text-[#fff] h-10 mt-2">
                    Login
                  </button>
                  <p className="text-[#B8B8B8]">
                    Don't have an account?
                    <span className="font-bold text-bodyColor">
                      <Link to="/register">Register</Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
