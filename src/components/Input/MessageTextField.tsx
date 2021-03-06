import { TextField } from "@mui/material";
import { VFC, ChangeEvent, RefObject, memo } from "react";

type Props = {
  text: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MessageTextField: VFC<Props> = memo(
  ({ text, inputRef, onChange }) => {
    return (
      <TextField
        variant="standard"
        fullWidth
        value={text}
        inputRef={inputRef}
        autoFocus
        onChange={onChange}
      />
    );
  }
);

MessageTextField.displayName = "MessageTextField";
