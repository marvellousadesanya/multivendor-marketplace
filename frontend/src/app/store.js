import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import walletSlice from "../features/wallet/walletSlice";
import modalSlice from "../features/wallet/modalSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    wallet: walletSlice,
    fundWindow: modalSlice,
    cart: cartSlice,
  },
});
