import Product from "../components/Product";
import Menu from "../components/Menu";
import Filter from "../components/Filter";

const Inventory = () => {
  return (
    <div className="bg-[#ECF0FF] h-[100vh] flex flex-auto">
      <div className="">
        <Menu />
      </div>
      <div className=" grid grid-cols-4 gap-2">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="w-[220px] h-[100vh]">
        <Filter />
      </div>
    </div>
  );
};

export default Inventory;
