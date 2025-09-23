import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import taskSlice from "../slices/taskSlice";

// Nơi lưu trữ dữ liệu tập trung cho toàn bộ dự án
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    task: taskSlice,
  },
});

// Định ngĩa type cho toàn bộ State
export type RootState = ReturnType<typeof store.getState>;

// Định nghĩa type cho dispatch
export type AppDispatch = typeof store.dispatch;
