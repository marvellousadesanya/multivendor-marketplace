import Loader from "react-spinners/DotLoader";
import Product from "../components/Product";
import Menu from "../components/Menu";
import Filter from "../components/Filter";
import NavBar from "../components/NavBar";
import { useGetProductsQuery } from "../features/api/productApi";

const Inventory = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  console.log(products);

  let content;
  if (isLoading) {
    content = (
      <div className="h-[90vh] w-[80vw] flex justify-center items-center">
        <Loader color={"#F77F00"} cssOverride={override} size={100} />
      </div>
    );
  } else if (isSuccess) {
    content = products.products.map((product) => (
      <div key={product.id}>
        <Product
          key={product.id}
          productName={product["title"]}
          productImage={product.images[2]}
          productPrice={product.price}
          id={product.id}
        />
      </div>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="bg-[#ECF0FF] ">
      <NavBar />
      <div className="flex">
        <Menu />
        <div>
          <div className="grid grid-cols-5 gap-x-5 gap-y-10 m-5 w-[calc(100vw-500px)] relative ">
            {content}
          </div>
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default Inventory;
