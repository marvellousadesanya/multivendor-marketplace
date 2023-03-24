import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import walletSlice from "../features/wallet/walletSlice";
import modalSlice from "../features/wallet/modalSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    wallet: walletSlice,
    fundWindow: modalSlice,
  },
});
