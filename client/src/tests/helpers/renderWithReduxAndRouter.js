import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createReduxStore, persistCreator } from "../../store";
import AppRouter from "../../router/app-router";
import { MemoryRouter } from "react-router-dom";
import initialState from "../../store/initial-state";

const store = createReduxStore(initialState);
const persist = persistCreator(store);

export const renderWithReduxAndRouter = (component, options) => {
  const store = createReduxStore(options?.initialState);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <MemoryRouter initialEntries={[options?.route]}>
          <AppRouter />
          {component}
        </MemoryRouter>
      </PersistGate>
    </Provider>
  );
};
