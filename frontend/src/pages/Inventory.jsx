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
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = "Loading...";
    console.log("loading");
  } else if (status === "failed") {
    content = <p>Error</p>;
    console.log(error);
  } else if (status === "succeeded") {
    console.log(products);
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
              {products.map((product) => (
                <Product
                  key={product.id}
                  productName={product["title"]}
                  productImage={product.images[2]}
                  productPrice={product.price}
                  id={product.id}
                />
              ))}
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
