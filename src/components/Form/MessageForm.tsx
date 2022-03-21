import { Avatar, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { VFC, useState, useCallback, ChangeEvent, FormEvent } from "react";
import { useAppSelector } from "src/app/hooks";
import { getGravatarUrl } from "src/utils/gravatar";
import { MessageTextField } from "src/components/Input/MessageTextField";
import { writeMessageData } from "src/firebase/config";
import { selectName } from "src/slices/userSlice";

const Form = styled("form")({
  gridRow: "2",
  margin: "26px",
});

export const MessageForm: VFC = () => {
  const name = useAppSelector(selectName);
  const avatarUrl = getGravatarUrl(name);
  const [text, setText] = useState("");
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!text) {
        return;
      }
      writeMessageData(text, name);
      setText("");
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
          <MessageTextField text={text} onChange={handleChange} />
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </Form>
  );
};
