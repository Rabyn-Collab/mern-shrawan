import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../data/apis";



export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    userLogin: builder.mutation({

      query: (query) => ({
        url: '/users/login',
        body: query,
        method: 'POST'
      })

    }),

    userSignUp: builder.mutation({

      query: (query) => ({
        url: '/users/signup',
        body: query,
        method: 'POST'
      })

    }),

    userProfile: builder.query({
      query: (token) => ({
        url: '/users/profile',
        headers: {
          Authorization: token
        },
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    updateUserProfile: builder.mutation({
      query: (q) => ({
        url: '/users/update',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'PATCH'
      }),
      invalidatesTags: ['User']
    })

  })
});


export const { useUserLoginMutation, useUserSignUpMutation, useUserProfileQuery, useUpdateUserProfileMutation } = authApi;