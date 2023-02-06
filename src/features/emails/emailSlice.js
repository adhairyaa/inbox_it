import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  emails: [],
  status: "idle",
};
export const getEmails = createAsyncThunk("emailList/getEmails", async () => {
  const res = await axios.get("https://flipkart-email-mock.vercel.app/");
  return res.data.list;
});

export const emailSlice = createSlice({
  name: "emailList",
  initialState,
  reducers: {
    markAsFavorite: (state, action) => {
      let updatedEmail = state.emails.map((email) =>
        email.id === action.payload
          ? { ...email, isFavorite: !email.isFavorite }
          : email
      );
      state.emails = updatedEmail;
    },
    markAsRead: (state, action) => {
      let isReadUpdatedEmail = state.emails.map((email) =>
        email.id === action.payload ? { ...email, isRead: true } : email
      );
      state.emails = isReadUpdatedEmail;
    },
  },

  extraReducers: {
    [getEmails.pending]: (state) => {
      state.status = "loading";
    },
    [getEmails.fulfilled]: (state, action) => {
      let updatedEmail = action.payload.map((email) => ({
        ...email,
        isRead: false,
        isFavorite: false,
      }));
      state.emails = updatedEmail;
      state.status = "fulfilled";
    },
    [getEmails.rejected]: (state) => {
      state.status = "error";
    },
  },
});
export default emailSlice.reducer;
export const { markAsRead, markAsFavorite } = emailSlice.actions;
