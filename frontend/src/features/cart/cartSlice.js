import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    moveToCart: (state, action) => {
      state.items.push(action.payload);
      console.log(state);
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    removeAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { moveToCart, removeFromCart, removeAllItems } = cartSlice.actions;

export const getTotal = (state) => {
  return state.cart.items.reduce((total, item) => total + item.price, 0);
};

export default cartSlice.reducer;
