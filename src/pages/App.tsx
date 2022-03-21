import { useAppSelector } from "src/app/hooks";
import { RegistrationForm } from "src/components/Form/RegistrationForm";
import { MainPage } from "src/pages";
import { selectName } from "src/slices/userSlice";

export const App = () => {
  const name = useAppSelector(selectName);

  if (!name) {
    return <RegistrationForm />;
  }

  return <MainPage />;
};
