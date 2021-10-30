import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    showLoader: (state, action) => true,
    hideLoader: (state, action) => false,
  },
});

const { actions, reducer } = loadingSlice;

// Extract and export each action creator by name
export const { showLoader, hideLoader } = actions;

// Export the reducer, either as a default or named export
export default reducer;

// get state 
export const selectLoading = (state) => state.loading;
