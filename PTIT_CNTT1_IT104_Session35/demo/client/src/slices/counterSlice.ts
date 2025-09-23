import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Đây là nơi xử lý state (là những tác vụ đồng bộ)
    increase(state) {
      state.value += 1;
    },
  },
});

export default counterSlice.reducer;

export const { increase } = counterSlice.actions;
