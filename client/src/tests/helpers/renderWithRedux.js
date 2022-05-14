import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createReduxStore, persistCreator } from "../../store";
import initialState from "../../store/initial-state";

const store = createReduxStore(initialState);
const persist = persistCreator(store);

export const renderWithRedux = (component, initialState = initialState) => {
  const store = createReduxStore(initialState);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        {component}
      </PersistGate>
    </Provider>
  );
};
