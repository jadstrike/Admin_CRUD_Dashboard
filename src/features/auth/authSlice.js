import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  userInfo: {}, //for user object
  userToken: null, //for storing JWT
  error: null,
  success: false, //for monitoring the registration process.
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
