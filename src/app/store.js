import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../features/cocktail/cocktailApi";
import { sportsApi } from "../features/sports/sportsApi";


export const store = configureStore({
  reducer: {

    [cocktailApi.reducerPath]: cocktailApi.reducer,
    [sportsApi.reducerPath]: sportsApi.reducer

  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    cocktailApi.middleware,
    sportsApi.middleware

  ])
});