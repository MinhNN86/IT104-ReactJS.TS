import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  language: "vi" | "en";
};

const initialState: StateType = {
  language: "vi",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state) {
      state.language = state.language === "en" ? "vi" : "en";
    },
  },
});

export default languageSlice.reducer;
export const { changeLanguage } = languageSlice.actions;
