"use client";

import { usePathname } from "next/navigation";
import { useGetProductBySlugQuery } from "@/redux/services/productsApi";

export default function ProductDetail({ productName }: any) {
  const pathname = usePathname();

  const url = `${pathname}`;

  const parts = url.split("/");
  const productSlug = parts[parts.length - 1];
  console.log(productSlug);

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductBySlugQuery(productSlug);

  console.log(product);

  return (
    <div className="w-full">
      <h2>A Product</h2>
      <p>{productName}</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error occured</p>}
      {product && (
        <div>
          <p>{product.name}</p>
          {/* Render other product details here */}
        </div>
      )}
    </div>
  );
}
