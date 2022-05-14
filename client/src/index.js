import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createReduxStore, persistCreator } from "./store";

import App from "./components/app";
import ErrorBoundary from "./containers/error-boundry";
import initialState from "./store/initial-state";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const store = createReduxStore(initialState);
const persist = persistCreator(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
