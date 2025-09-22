import { createSlice } from "@reduxjs/toolkit";
import type { Student } from "../interfaces/student.interface";

type StateType = {
  isEdit: boolean;
  studentInfo: Student | null;
};

const initialState: StateType = {
  isEdit: false,
  studentInfo: null,
};

const studentEditSlices = createSlice({
  name: "studentEdit",
  initialState,
  reducers: {
    editStudent: (state, action) => {
      return (state = {
        isEdit: true,
        studentInfo: action.payload,
      });
    },
  },
});

export default studentEditSlices.reducer;

export const { editStudent } = studentEditSlices.actions;
