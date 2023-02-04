import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  emails: [],
  status: "idle",
};
export const getEmails = createAsyncThunk("emailList/getEmails", async () => {
  const res = await axios.get("https://flipkart-email-mock.vercel.app/");
  return res.data;
});

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
export default emailSlice.reducer;
