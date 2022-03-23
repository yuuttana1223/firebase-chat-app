import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { VFC, memo, useRef, useEffect } from "react";
import { Message } from "src/types/message";
import { getGravatarUrl } from "src/utils/gravatar";

type Props = {
  message: Message;
  isLastItem: boolean;
};

export const MessageItem: VFC<Props> = memo(({ message, isLastItem }) => {
  const ref = useRef<HTMLLIElement>(null);
  const avatarUrl = getGravatarUrl(message.username);

  useEffect(() => {
    if (isLastItem && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <ListItem divider alignItems="flex-start" ref={ref}>
      <ListItemAvatar>
        <Avatar alt="avatar" src={avatarUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={message.username}
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {message.body}
          </Typography>
        }
      />
    </ListItem>
  );
});

MessageItem.displayName = "MessageItem";
