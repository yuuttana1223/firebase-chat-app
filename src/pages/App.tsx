import { Provider } from "react-redux";
import { store } from "src/app/store";
import { MainPage } from "src/pages";

export const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};
