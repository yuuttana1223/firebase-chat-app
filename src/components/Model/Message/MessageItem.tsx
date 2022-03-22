import { VFC } from "react";
import { Message } from "src/types/message";

type Props = {
  message: Message;
};

export const MessageItem: VFC<Props> = ({ message }) => {
  return (
    <div>
      {message.body}({message.username})
    </div>
  );
};
