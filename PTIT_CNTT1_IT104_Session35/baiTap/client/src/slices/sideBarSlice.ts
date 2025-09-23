import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  isSizeBarOpen: boolean;
};

const initialState: StateType = {
  isSizeBarOpen: true,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    changeStatus(state) {
      state.isSizeBarOpen = state.isSizeBarOpen ? false : true;
    },
  },
});

export default sideBarSlice.reducer;
export const { changeStatus } = sideBarSlice.actions;
