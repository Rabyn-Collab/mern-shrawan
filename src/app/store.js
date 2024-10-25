import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../features/cocktail/cocktailApi";


export const store = configureStore({
  reducer: {

    [cocktailApi.reducerPath]: cocktailApi.reducer

  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    cocktailApi.middleware

  ])
});