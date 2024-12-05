import { appApi } from "../../app/appApi";



export const authApi = appApi.injectEndpoints({
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
        method: 'PATCH'
      }),
      invalidatesTags: ['User']
    }),

    userLogOut: builder.mutation({
      query: (q) => ({
        url: '/users/logout',
        method: 'POST'
      }),
      invalidatesTags: ['User']
    })

  })
});


export const { useUserLoginMutation, useUserSignUpMutation, useUserProfileQuery, useUpdateUserProfileMutation, useUserLogOutMutation } = authApi;