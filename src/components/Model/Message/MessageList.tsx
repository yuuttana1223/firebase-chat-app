import { List } from "@mui/material";
import { styled } from "@mui/system";
import { memo } from "react";
import { VFC } from "react";
import { MessageItem } from "src/components/Model/Message/MessageItem";
import { useMessages } from "src/hooks/useMessages";
import { MessageState } from "src/slices/messageSlice";

const ListWrapper = styled("div")({
  gridRow: "1",
  overflow: "auto",
});

export const MessageList: VFC = memo(() => {
  const { messages, isLoading, isError } = useMessages();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ListWrapper>
      <List>
        {messages?.map(({ key, message }: MessageState, index) => (
          <MessageItem
            key={key}
            message={message}
            isLastItem={messages.length - 1 === index}
          />
        ))}
      </List>
    </ListWrapper>
  );
});

MessageList.displayName = "MessageList";
