import laptopImage from "../images/laptop.png";

const Category = ({ categoryTitle }) => {
  return (
    <div className="rounded cursor-pointer w-[250px] flex justify-center shadow">
      <div>
        <img src={laptopImage} alt="" />
        <h3 className="text-center font-semibold">{categoryTitle}</h3>
      </div>
    </div>
  );
};

export default Category;
