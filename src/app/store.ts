import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "src/slices/userSlice";
import { messageReducer } from "src/slices/messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
