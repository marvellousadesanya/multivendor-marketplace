import { Link } from "react-router-dom";

const ButtonWhite = ({ btnText }) => {
  return (
    <Link to="/inventory">
      <button className="w-[180px] text-center py-2 bg-[#fff] font-semibold font-innerbody rounded text-mainColor shadow-md">
        {btnText}
      </button>
    </Link>
  );
};

export default ButtonWhite;
