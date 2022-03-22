import { Avatar, Grid } from "@mui/material";
import { styled } from "@mui/system";
import {
  VFC,
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
  useRef,
} from "react";
import { useAppSelector } from "src/app/hooks";
import { getGravatarUrl } from "src/utils/gravatar";
import { MessageTextField } from "src/components/Input/MessageTextField";
import { selectName } from "src/slices/userSlice";
import { createMessageData } from "src/firebase/database";
import { SubmitButton } from "src/components/Button/SubmitButton";
import { memo } from "react";

const Form = styled("form")({
  gridRow: "2",
  margin: "26px",
});

export const MessageForm: VFC = memo(() => {
  const name = useAppSelector(selectName);
  const avatarUrl = getGravatarUrl(name);
  const [text, setText] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!text) {
        return;
      }
      createMessageData(text, name);
      setText("");
      inputEl.current?.focus();
    },
    [name, text]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarUrl} />
        </Grid>
        <Grid item xs={10}>
          <MessageTextField
            text={text}
            inputRef={inputEl}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}>
          <SubmitButton disabled={!text} />
        </Grid>
      </Grid>
    </Form>
  );
});

MessageForm.displayName = "MessageForm";
