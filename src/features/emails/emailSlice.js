import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  emails: [],
  status: "idle",
};
export const getEmails = createAsyncThunk();

export const emailSlice = createSlice({
  name: "emailList",
  initialState,
  reducers: {},
  extraReducers: {
    [getEmails.pending]: (state) => {
      state.status = "loading";
    },
    [getEmails.fulfilled]: (state, action) => {
      state.emails = action.payload;
      state.status = "fulfilled";
    },
    [getEmails.rejected]: (state) => {
      state.status = "error";
    },
  },
});
