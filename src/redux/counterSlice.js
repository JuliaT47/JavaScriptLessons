import { createSlice } from "@reduxjs/toolkit";
import {
  decrementAction,
  incrementAction,
  incrementByAmountAction,
} from "./counterAction";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: incrementAction,
    decrement: decrementAction,
    incrementByAmount: incrementByAmountAction,
  }, 
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
