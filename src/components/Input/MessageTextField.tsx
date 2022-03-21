import { Avatar, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useAppSelector } from "app/hooks";
import { VFC } from "react";
import { selectName } from "slices/userSlice";
import { getGravatarUrl } from "utils/gravatar";

const Wrapper = styled("div")({
  gridRow: "2",
  margin: "26px",
});

export const MessageTextField: VFC = () => {
  const name = useAppSelector(selectName);
  const avatarUrl = getGravatarUrl(name);

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarUrl} />
        </Grid>
        <Grid item xs={10}>
          入力
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </Wrapper>
  );
};
