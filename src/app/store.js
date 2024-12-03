import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { userSlice } from "../features/auth/userSlice";
import { productApi } from "../features/product/productApi";
import { cartSlice } from "../features/cart/cartSlice";
import { orderApi } from "../features/order/orderApi";
import { appApi } from "./appApi";

export const store = configureStore({
  reducer: {

    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [appApi.reducerPath]: appApi.reducer,

  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    appApi.middleware
  ])
});