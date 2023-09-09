import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

type Product = {
  description: string;
  favorite: boolean;
  image: string;
  name: string;
  price: number;
  seller: string;
  stock: number;
  slug: string;
  __v: 0;
  _id: string;
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], null>({
      query: () => "/products",
    }),
    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/products/${slug}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductBySlugQuery } = productsApi;
