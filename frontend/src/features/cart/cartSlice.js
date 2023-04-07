import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    moveToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { moveToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
