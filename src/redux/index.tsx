import {
  AnyAction,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import React from "react";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { createLogger } from "redux-logger";
import localNowApi from "./local-now/local-now.api";
import localNowSlice from "./local-now/local-now.slice";
import navigationSlice from "./navigation/navigation.slice";

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    // SLICE
    [navigationSlice.name]: navigationSlice.reducer,
    [localNowSlice.name]: localNowSlice.reducer,
    // API
    [localNowApi.reducerPath]: localNowApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();
    if (import.meta.env.DEV) {
      middleware.push(logger);
    }
    return [...middleware, localNowApi.middleware];
  },
});

export type GlobalState = ReturnType<typeof store.getState>;

export type ThunkResult<R> = ThunkAction<R, GlobalState, undefined, AnyAction>;

export type ReduxDispatch = ThunkDispatch<GlobalState, unknown, AnyAction>;

export const useGlobalState: TypedUseSelectorHook<GlobalState> = useSelector;

export const useThunkDispatch = (): ReduxDispatch =>
  useDispatch<ReduxDispatch>();

// eslint-disable-next-line react/prop-types
export const GlobalStateProvider: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export { default as localNowApi } from "./local-now/local-now.api";
export { navigationActions } from "./navigation/navigation.slice";
