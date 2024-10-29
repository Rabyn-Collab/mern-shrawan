import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const sportsApi = createApi({
  reducerPath: 'sportsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://671da51609103098807d7ae6.mockapi.io' }),
  endpoints: (builder) => ({

    addGames: builder.mutation({
      query: (q) => ({
        url: '/games',
        body: q,
        method: 'POST'
      })

    })


  })

})


export const { useAddGamesMutation } = sportsApi;