import { List } from "@mui/material";
import { styled } from "@mui/system";
import { onValue } from "firebase/database";
import { memo, useEffect } from "react";
import { VFC } from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { MessageItem } from "src/components/Model/Message/MessageItem";
import { messagesQuery } from "src/firebase/database";
import { Message } from "src/types/message";
import { setMessages, selectMessages } from "src/slices/messageSlice";

const Wrapper = styled("div")({
  gridRow: "1",
});

export const MessageList: VFC = memo(() => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  useEffect(() => {
    onValue(messagesQuery, (snapshot) => {
      const messages: { [key: string]: Message } = snapshot.val();
      if (!messages) {
        return;
      }
      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, message] = entry;
        return {
          key,
          message,
        };
      });
      dispatch(setMessages({ messages: newMessages }));
    });
  }, [dispatch]);

  return (
    <Wrapper>
      <List>
        {messages?.map(({ key, message }) => (
          <MessageItem key={key} message={message} />
        ))}
      </List>
    </Wrapper>
  );
});

MessageList.displayName = "MessageList";
