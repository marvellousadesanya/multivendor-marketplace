import laptopImage from "../images/laptop.png";

const Category = ({ categoryTitle }) => {
  return (
    <div className="border rounded cursor-pointer hover:border-mainColor border-[#000]">
      <img src={laptopImage} alt="" />
      <h3 className="text-center font-semibold">{categoryTitle}</h3>
    </div>
  );
};

export default Category;
