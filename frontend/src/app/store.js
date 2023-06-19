import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import walletSlice from "../features/wallet/walletSlice";
import modalSlice from "../features/wallet/modalSlice";
import cartSlice from "../features/cart/cartSlice";
import ordersSlice from "../features/orders/ordersSlice";
import { apiSlice } from "../features/api/productApi";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  products: productsSlice,
  wallet: walletSlice,
  fundWindow: modalSlice,
  cart: cartSlice,
  orders: ordersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
