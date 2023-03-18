import Product from "../components/Product";
import Menu from "../components/Menu";
import Filter from "../components/Filter";
import NavBar from "../components/NavBar";

const Inventory = () => {
  return (
    <div className="bg-[#ECF0FF] h-[100vh] flex flex-auto overflow-x-hidden">
      <div className="">
        <Menu />
      </div>
      <div className="w-full">
        <NavBar />
        <div className="flex  justify-between">
          <div className="flex justify-center flex-1">
            <div className=" grid grid-cols-5 gap-x-7 gap-y-10 p-5">
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
          </div>

          <div className="w-[250px] flex-initial">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
