import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./apiSlice";


export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },
  
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;