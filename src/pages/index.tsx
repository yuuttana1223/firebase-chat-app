import { styled } from "@mui/system";
import { VFC } from "react";
import { MessageForm } from "src/components/Form/MessageForm";
import { MessageList } from "src/components/Model/Message/MessageList";

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
