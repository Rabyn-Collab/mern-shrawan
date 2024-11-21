import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { userSlice } from "../features/auth/userSlice";
import { productApi } from "../features/product/productApi";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer



  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    productApi.middleware


  ])
});