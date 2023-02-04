import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isEmailActive: false,
  emailBody: null,
};
export const getEmails = createAsyncThunk("emailList/getEmails", async () => {
  const res = await axios.get("https://flipkart-email-mock.vercel.app/");
  return res.data.list;
});

export const activeEmailSlice = createSlice({
  name: "activeEmail",
  initialState,
  reducers: {
    handleEmailClick: (state) => {
      state.isEmailActive === false
        ? (state.isEmailActive = true)
        : (state.isEmailActive = false);
    },
  },
});

export const { handleEmailClick } = activeEmailSlice.actions;
export default activeEmailSlice.reducer;
