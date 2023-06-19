import { useGetProductsQuery } from "../features/api/apiSlice";
import { useState } from "react";

const ProductPageSample = () => {
  const [newProduct, setNewProduct] = useState("");

  const {
    data: work,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = JSON.stringify(work);
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return (
    <div>
      <h1>Products</h1>
      {content}
    </div>
  );
};

export default ProductPageSample;
