import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  amount: 300000,
  transactionID: "1",
  description: "initial deposit",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    fundWallet: {
      reducer(state, action) {
        state.amount += action.payload.amount;
        console.log(action.payload);
      },
      prepare(amountToAdd, description) {
        return {
          payload: {
            amount: amountToAdd,
            transactionID: nanoid(),
            description,
          },
        };
      },
    },
  },
});

export const walletBalance = (state) => state.wallet;

export const { fundWallet } = walletSlice.actions;

export default walletSlice.reducer;
