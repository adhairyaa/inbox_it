import { configureStore } from "@reduxjs/toolkit";
import activeEmailReducer from "../features/activeEmail/activeEmailSlice";
import emailReducer from "../features/emails/emailSlice";

export const store = configureStore({
  reducer: {
    emails: emailReducer,
    activeEmail: activeEmailReducer,
  },
});
