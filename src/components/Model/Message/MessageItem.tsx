import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { VFC } from "react";
import { Message } from "src/types/message";
import { getGravatarUrl } from "src/utils/gravatar";

type Props = {
  message: Message;
};

export const MessageItem: VFC<Props> = ({ message }) => {
  const avatarUrl = getGravatarUrl(message.username);

  return (
    <ListItem divider alignItems="flex-start">
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
};
