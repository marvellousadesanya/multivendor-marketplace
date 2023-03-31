import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  balance: 2000000,
  transactions: [
    {
      amount: 200000,
      transactionID: "1",
      description: "initial deposit",
    },
  ],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    fundWallet: {
      reducer(state, action) {
        state.balance += action.payload.amount;
        console.log(action.payload);
        state.transactions.push(action.payload);
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
    buyItem: {
      reducer(state, action) {
        state.balance -= action.payload.amount;
        console.log(action.payload);
        state.transactions.push(action.payload);
      },
      prepare(amountToDeduct, purchaseDescription) {
        return {
          payload: {
            amount: amountToDeduct,
            transactionID: nanoid(),
            description: `Ordered a product: ${purchaseDescription}`,
          },
        };
      },
    },
  },
});

export const walletBalance = (state) => state.wallet;

export const { fundWallet, buyItem } = walletSlice.actions;

export default walletSlice.reducer;
