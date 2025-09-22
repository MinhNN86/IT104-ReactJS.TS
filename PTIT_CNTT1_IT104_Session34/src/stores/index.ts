import { configureStore } from "@reduxjs/toolkit";
import studentSlices from "../slices/studentSlices";
import studentEditSlices from "../slices/studentEditSlices";
import studentSearchSlices from "../slices/studentSearchSlices";
export const store = configureStore({
  reducer: {
    student: studentSlices,
    studentEdit: studentEditSlices,
    studentSearch: studentSearchSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
