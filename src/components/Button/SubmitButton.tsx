import { VFC, memo } from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type Props = {
  disabled: boolean;
};

export const SubmitButton: VFC<Props> = memo(({ disabled }) => {
  return (
    <IconButton type="submit" disabled={disabled}>
      <SendIcon />
    </IconButton>
  );
});

SubmitButton.displayName = "SubmitButton";
