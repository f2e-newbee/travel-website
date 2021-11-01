import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from './slice/loading'

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
