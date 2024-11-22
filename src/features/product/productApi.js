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
      }),
      providesTags: ['Product']
    }),


    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      }),
      providesTags: ['Product']
    }),


    addProduct: builder.mutation({
      query: (q) => ({
        url: '/products',
        body: q.body,
        method: 'POST',
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Product']
    }),


    updateProduct: builder.mutation({
      query: (q) => ({
        url: '/products',
        body: q.body,
        method: 'POST',
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Product']
    }),


    // removeProduct: builder.query({
    //   query: () => ({
    //     url: '/products',
    //     method: 'GET'
    //   })
    // }),






  })

});


export const { useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation, useUpdateProductMutation } = productApi;