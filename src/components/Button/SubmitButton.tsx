import { VFC } from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type Props = {
  disabled: boolean;
};

export const SubmitButton: VFC<Props> = ({ disabled }) => {
  return (
    <IconButton type="submit" disabled={disabled}>
      <SendIcon />
    </IconButton>
  );
};
