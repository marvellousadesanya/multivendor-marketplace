import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";

// const cartItems = useSelector((state) => state.cart.items);

const initialState = {
  orders: [],
  successful: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderedProduct(state) {
      state.successful = true;
    },
    newOrders(state, action) {
      state.orders.push(state.cart.items);
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(cartItems, (state) => {
  //       return (state.orders = cartItems);
  //     });
  //   },
});

export const { orderedProduct } = ordersSlice.actions;

export default ordersSlice.reducer;
