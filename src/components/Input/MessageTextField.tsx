import { Avatar, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { VFC } from "react";

const Wrapper = styled("div")({
  gridRow: "2",
  margin: "26px",
});

export const MessageTextField: VFC = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid xs={1}>
          <Avatar />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </Wrapper>
  );
};
