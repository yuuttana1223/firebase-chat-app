import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type UserState = {
  name: string;
};

const initialState: UserState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export const selectName = (state: RootState) => state.user.name;

export const userReducer = userSlice.reducer;
