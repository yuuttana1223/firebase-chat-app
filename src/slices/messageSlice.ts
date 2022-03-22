import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { Message } from "src/types/message";

export type MessageState = {
  key: string;
  message: Message;
};

export type MessagesState = {
  messages: MessageState[];
};

export const messageSlice = createSlice({
  name: "message",
  initialState: {} as MessagesState,
  reducers: {
    setMessages: (state, action: PayloadAction<MessagesState>) => {
      state.messages = action.payload.messages;
    },
  },
});

export const { setMessages } = messageSlice.actions;

export const selectMessages = (state: RootState) => state.message.messages;

export const messageReducer = messageSlice.reducer;
