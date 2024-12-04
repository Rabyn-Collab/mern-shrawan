import { authApi } from "../auth/authApi";


export const orderApi = authApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: (token) => ({
        url: '/orders',
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    getUserOrders: builder.query({
      query: (token) => ({
        url: '/orders/users',
        method: 'GET'
      }),
      providesTags: ['Order']
    }),


    getOrderDetail: builder.query({
      query: (q) => ({
        url: `/orders/users/${q.id}`,
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    addOrder: builder.mutation({
      query: (q) => ({
        url: '/orders',
        body: q.body,
        method: 'POST'
      }),
      invalidatesTags: ['Order']
    }),





  })

});


export const {
  useAddOrderMutation,
  useGetAllOrdersQuery,
  useGetUserOrdersQuery,
  useGetOrderDetailQuery
} = orderApi;