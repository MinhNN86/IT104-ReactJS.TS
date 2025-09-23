import { createSlice } from "@reduxjs/toolkit";

type UserForm = {
  id: string;
  userName: string;
  email: string;
  password: string;
};

const initialState: UserForm = {
  id: "",
  userName: "",
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logOut(state) {
      state.id = "";
      state.userName = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { login, logOut } = loginSlice.actions;
export default loginSlice.reducer;
