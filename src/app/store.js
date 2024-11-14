import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer


  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware


  ])
});