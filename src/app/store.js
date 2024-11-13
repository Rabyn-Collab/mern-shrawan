import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {


  },
  //caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([



  ])
});