import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import randomSlice from "../slices/randomSlice";
import themeSlice from "../slices/themeSlice";
import modeViewSlice from "../slices/modeViewSlice";
import sideBarSlice from "../slices/sideBarSlice";
import languageSlice from "../slices/languageSlice";
import userSlice from "../slices/userSlice";
import loginSlice from "../slices/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    random: randomSlice,
    theme: themeSlice,
    viewMode: modeViewSlice,
    sideBar: sideBarSlice,
    language: languageSlice,
    user: userSlice,
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
