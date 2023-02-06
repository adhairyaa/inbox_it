import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterType: "idle",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    favoritesFilter: (state) => {
      state.filterType = "FAVORITE";
    },
    readFilter: (state) => {
      state.filterType = "IS_READ";
    },
    unreadFilter: (state) => {
      state.filterType = "IS_UNREAD";
    },
  },
});
export default filterSlice.reducer;
export const { favoritesFilter, readFilter, unreadFilter } =
  filterSlice.actions;
