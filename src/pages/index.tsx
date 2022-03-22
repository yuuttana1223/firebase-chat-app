import { styled } from "@mui/system";
import { VFC } from "react";
import { useAppSelector } from "src/app/hooks";
import { MessageForm } from "src/components/Form/MessageForm";
import { RegistrationForm } from "src/components/Form/RegistrationForm";
import { MessageList } from "src/components/Model/Message/MessageList";
import { selectName } from "src/slices/userSlice";

const Container = styled("div")({
  display: "grid",
  height: "100vh",
  gridTemplateRows: "1fr auto",
});

export const MainPage: VFC = () => {
  const name = useAppSelector(selectName);

  if (!name) {
    return <RegistrationForm />;
  }

  return (
    <Container>
      <MessageList />
      <MessageForm />
    </Container>
  );
};
