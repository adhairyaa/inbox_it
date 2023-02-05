import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isEmailActive: false,
  emailBody: null,
  activeEmailData: null,
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
    handleEmailClick: (state, action) => {
      state.isEmailActive === false
        ? (state.isEmailActive = true)
        : (state.isEmailActive = false);
      state.activeEmailData = action.payload.payload;
    },
  },
});

export const { handleEmailClick } = activeEmailSlice.actions;
export default activeEmailSlice.reducer;
