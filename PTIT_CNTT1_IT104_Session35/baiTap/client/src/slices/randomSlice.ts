import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    random(state) {
      state.push(Math.ceil(Math.random() * 10));
    },
  },
});

export default randomSlice.reducer;
export const { random } = randomSlice.actions;
