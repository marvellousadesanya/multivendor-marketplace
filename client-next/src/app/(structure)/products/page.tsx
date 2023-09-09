"use client";

import { useGetProductsQuery } from "@/redux/services/productsApi";
// import { useAppDispatch } from "@/redux/hooks";
import Product from "@/components/products/singleproduct";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductsPage = () => {
  // const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    data: products,
    isLoading,
    isSuccess,
    // isError,
    error,
  } = useGetProductsQuery(null);

  let content;
  if (isLoading) {
    content = (
      <div className="h-[90vh] w-[80vw] flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  } else if (isSuccess) {
    content = products.map((product) => (
      <div
        key={product._id}
        onClick={() => router.push(`products/${product.slug}`)}>
        <Product
          key={product._id}
          productName={product.name}
          productImage={product.image}
          productPrice={product.price}
          productSlug={product.slug}
          // id={product._id}
        />
      </div>
    ));
  } else if (error) {
    content = <p>An error occured</p>;
  }
  return (
    <main className="w-full bg-[#ECF0FF] flex justify-center">
      <div>
        <h1>Products page</h1>

        <div className="grid grid-cols-4  2xl:grid-cols-5  gap-4 2xl:gap-8">
          {content}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
