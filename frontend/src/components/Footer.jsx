import Button from "./Button";
import byteMarketLogo from "../images/byteMarketLogo.png";

const Footer = () => {
  return (
    <footer className="px-[70px] bg-[#E5E5E5] pt-8 relative ">
      <div className="flex justify-between">
        <div>
          <img src={byteMarketLogo} alt="logo" />
        </div>
        <div>
          <p>New to ByteMarket? Join us now</p>
          <div className="flex flex-auto gap-5">
            <input
              type="text"
              className="w-[300px] rounded border-2 border-[#F77F00]"
              placeholder="Enter your email"
            />
            <Button btnText="Register Now" />
          </div>
        </div>
      </div>

      <div className="flex justify-between py-12 font-innerbody">
        <div className="">
          <h3 className="font-bold">HELP</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>How to shop</li>
            <li>Delivery timelines</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">ABOUT</h3>
          <ul>
            <li>About ByteMarket</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">EARN</h3>
          <ul>
            <li>Become a Seller</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
