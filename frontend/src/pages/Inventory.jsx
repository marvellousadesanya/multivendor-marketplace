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

  console.log(products);

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
    <div className="bg-[#ECF0FF] ">
      <NavBar />
      <div className="flex">
        <Menu />
        <div>
          <div className="grid grid-cols-5 gap-x-5 gap-y-10 m-5">
            {products.map((product) => (
              <div key={product.id}>
                <Product
                  key={product.id}
                  productName={product["title"]}
                  productImage={product.images[2]}
                  productPrice={product.price}
                  id={product.id}
                />
              </div>
            ))}
          </div>
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default Inventory;
