import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../data/apis";


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      })
    }),


    addProduct: builder.mutation({
      query: (q) => ({
        url: '/products',
        body: q,
        method: 'POST'
      })
    }),


    // updateProduct: builder.query({
    //   query: () => ({
    //     url: '/products',
    //     method: 'GET'
    //   })
    // }),


    // removeProduct: builder.query({
    //   query: () => ({
    //     url: '/products',
    //     method: 'GET'
    //   })
    // }),






  })

});


export const { useGetProductsQuery, useAddProductMutation } = productApi;