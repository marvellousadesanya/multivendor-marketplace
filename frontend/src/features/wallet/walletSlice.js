import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  balance: 50,
  transactions: [
    {
      amount: 20,
      transactionID: "1",
      description: "initial deposit",
      funded: true,
    },
  ],
  error: false,
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
        state.error = false;
      },
      prepare(amountToAdd, description) {
        return {
          payload: {
            amount: amountToAdd,
            transactionID: nanoid(),
            description,
            funded: true,
          },
        };
      },
    },
    buyItem: {
      reducer(state, action) {
        if (state.balance >= action.payload.amount) {
          state.balance -= action.payload.amount;
          console.log(action.payload);
          state.transactions.push(action.payload);
        }
        state.error = true;
      },
      prepare(amountToDeduct, purchaseDescription) {
        return {
          payload: {
            amount: amountToDeduct,
            transactionID: nanoid(),
            description: `Ordered a product: ${purchaseDescription}`,
            funded: false,
            // error: true,
          },
        };
      },
    },
  },
});

export const walletBalance = (state) => state.wallet;

export const { fundWallet, buyItem } = walletSlice.actions;

export default walletSlice.reducer;
