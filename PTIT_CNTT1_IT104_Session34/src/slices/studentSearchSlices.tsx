import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const studentSearchSlices = createSlice({
  name: "studentSearch",
  initialState,
  reducers: {
    searchStudent: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default studentSearchSlices.reducer;

export const { searchStudent } = studentSearchSlices.actions;
