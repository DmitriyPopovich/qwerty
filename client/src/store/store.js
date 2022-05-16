import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/auth-reducer";
import postsReducer from "./reducers/posts-reducer"

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "auth",
    "posts"
  ]
};
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  });
};
export const persistCreator = persistStore;
