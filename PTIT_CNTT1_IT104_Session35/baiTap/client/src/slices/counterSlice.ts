import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
    reset() {
      return 0;
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease, reset } = counterSlice.actions;
