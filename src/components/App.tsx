import { store } from "app/store";
import { Registration } from "components/Registration";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <Registration />
    </Provider>
  );
};
