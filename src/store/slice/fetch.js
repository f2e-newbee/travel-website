import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    loading: false,
    apiCount: 0,
    hasError: false,
  },
  reducers: {
    startFetch: (state, action) => {
      if (!state.loading) {
        state.loading = true;
      }
      state.apiCount++;
      return state;
    },
    endFetch: (state, action) => {
      state.apiCount--;
      if (state.apiCount === 0) {
        state.loading = false;
      }
      return state;
    },
  },
});

const { actions, reducer } = fetchSlice;

export default reducer;
// Extract and export each action creator by name
export const { startFetch, endFetch } = actions;
// get state
export const selectLoading = (state) => state.fetch.loading;
