import { createSlice } from "@reduxjs/toolkit";

type ViewMode = "list" | "grid";
interface ViewModeState {
  viewMode: ViewMode;
}

const initialState: ViewModeState = {
  viewMode: "list",
};

const modeViewSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    changeViewMode(state) {
      state.viewMode = state.viewMode === "list" ? "grid" : "list";
    },
  },
});

export default modeViewSlice.reducer;
export const { changeViewMode } = modeViewSlice.actions;
