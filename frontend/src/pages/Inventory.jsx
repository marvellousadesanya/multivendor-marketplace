import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAllProducts,
  getProductsStatus,
  getProductsError,
  fetchProducts,
} from "../features/products/productsSlice";

import Product from "../components/Product";
import Menu from "../components/Menu";
import Filter from "../components/Filter";
import NavBar from "../components/NavBar";

const Inventory = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);

  const status = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    console.log("loading");
  } else if (status === "failed") {
    console.log(error);
  } else {
    console.log(products.products[1]);
  }

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
              {/* <p>{products[0]["title"]}</p> */}
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
