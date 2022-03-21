import { styled } from "@mui/system";
import { MessageForm } from "components/Form/MessageForm";
import { MessageList } from "components/Model/Message/MessageList";
import { VFC } from "react";

const Container = styled("div")({
  display: "grid",
  height: "100vh",
  gridTemplateRows: "1fr auto",
});

export const MainPage: VFC = () => {
  return (
    <Container>
      <MessageList />
      <MessageForm />
    </Container>
  );
};
