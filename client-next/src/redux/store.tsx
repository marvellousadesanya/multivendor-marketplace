import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "./services/productsApi";

export const store = configureStore({
  reducer: {
    counterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
