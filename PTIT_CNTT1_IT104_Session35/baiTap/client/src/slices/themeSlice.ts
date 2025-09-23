import { createSlice } from "@reduxjs/toolkit";

type Themes = "dark" | "light";
interface ThemeState {
  theme: Themes;
}
const initialState: ThemeState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
