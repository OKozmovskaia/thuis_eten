import { Provider } from "react-redux";
import { Page } from "./pages/main-page/component";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};
