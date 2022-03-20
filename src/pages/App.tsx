import { useAppSelector } from "app/hooks";
import { selectName } from "slices/userSlice";
import { MainPage } from "pages";
import { RegistrationForm } from "components/Form/RegistrationForm";

export const App = () => {
  const name = useAppSelector(selectName);

  if (!name) {
    return <RegistrationForm />;
  }

  return <MainPage />;
};
