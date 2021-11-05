import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./slice/fetch";

export const store = configureStore({
  reducer: {
    fetch: fetchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
