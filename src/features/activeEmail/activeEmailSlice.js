import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isEmailActive: false,
  emailBody: null,
  activeEmailData: null,
  status: "idle",
};
export const getActiveEmailBody = createAsyncThunk(
  "activeEmail/getActiveEmailBody",
  async (id) => {
    const res = await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`);
    return res.data;
  }
);

export const activeEmailSlice = createSlice({
  name: "activeEmail",
  initialState,
  reducers: {
    openEmail: (state, action) => {
      state.isEmailActive = true;
      state.activeEmailData = action.payload;
      console.log("open email");
    },
    closeEmail: (state) => {
      state.isEmailActive = false;
    },
  },
  extraReducers: {
    [getActiveEmailBody.pending]: (state) => {
      state.status = "loading";
    },
    [getActiveEmailBody.fulfilled]: (state, action) => {
      state.emailBody = action.payload;
      state.status = "fulfilled";
    },
    [getActiveEmailBody.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { openEmail, closeEmail } = activeEmailSlice.actions;
export default activeEmailSlice.reducer;
