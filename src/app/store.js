import { configureStore } from "@reduxjs/toolkit";
import autthReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: autthReducer,
  },
});

export default store;
