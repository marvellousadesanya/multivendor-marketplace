import laptopImage from "../images/laptop.png";

const Category = ({ categoryTitle }) => {
  return (
    <div className="rounded cursor-pointer overflow-hidden w-[250px] flex justify-center shadow">
      <div className="">
        <img
          className="transition-all ease-in hover:scale-110"
          src={laptopImage}
          alt=""
        />
        <h3 className="text-center font-semibold">{categoryTitle}</h3>
      </div>
    </div>
  );
};

export default Category;
