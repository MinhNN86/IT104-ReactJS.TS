import { createSlice } from "@reduxjs/toolkit";
import type { Student } from "../interfaces/student.interface";

const initialState: Student[] = [
  { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
  { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
];

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    removeStudent: (state, action) => {
      return state.filter((s) => s.id !== action.payload.id);
    },
    updateStudent: (state, action) => {
      const index = state.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export default studentSlice.reducer;

export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;
