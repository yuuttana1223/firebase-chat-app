import { useAppSelector } from "app/hooks";
import { Registration } from "components/Registration";
import { selectName } from "slices/userSlice";
import { Main } from "components/Main";

export const App = () => {
  const name = useAppSelector(selectName);

  if (!name) {
    return <Registration />;
  }

  return <Main />;
};
