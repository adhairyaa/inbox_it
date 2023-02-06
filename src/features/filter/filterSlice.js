import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterType: "idle",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filterType = action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;
