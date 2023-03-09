import HeaderImage from "../images/header-image.png";

const HomePage = () => {
  return (
    <div className="bg-[#E5E5E5] h-[100vh] flex flex-col items-center gap-y-0 pt-5">
      <h3 className="font-innerbody mb-[-5%] p-0">Your ultimate tech</h3>
      <h1 className=" font-heading text-[220px] text-mainColor mt-0">
        DESTINATION
      </h1>
      <img src={HeaderImage} alt="Header" className="m-[-13%] w-[400px]" />
      <button className="bg-[#fff] font-innerbody text-mainColor px-12 py-2 rounded">
        Shop Now
      </button>
    </div>
  );
};

export default HomePage;
