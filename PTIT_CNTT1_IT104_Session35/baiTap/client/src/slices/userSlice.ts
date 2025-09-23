import { createSlice } from "@reduxjs/toolkit";

type User = { id: number; name: string; favorite: boolean };

const initialState: User[] = [
  { id: 1, name: "Nguyễn Văn A", favorite: true },
  { id: 2, name: "Nguyễn Văn B", favorite: false },
  { id: 3, name: "Nguyễn Văn C", favorite: true },
  { id: 4, name: "Nguyễn Văn D", favorite: true },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateFavorite(state, action) {
      return state.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              favorite: !user.favorite,
            }
          : user
      );
    },
  },
});

export default userSlice.reducer;
export const { updateFavorite } = userSlice.actions;
