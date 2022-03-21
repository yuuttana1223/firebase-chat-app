import { TextField } from "@mui/material";
import { VFC, ChangeEvent } from "react";

type Props = {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MessageTextField: VFC<Props> = ({ text, onChange }) => {
  return (
    <TextField variant="standard" fullWidth value={text} onChange={onChange} />
  );
};
