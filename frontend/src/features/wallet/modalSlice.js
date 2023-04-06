import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  window: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      console.log(state.window);
      state.window = action.payload;
    },
  },
});

export const modalWindow = (state) => state.fundWindow;

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
