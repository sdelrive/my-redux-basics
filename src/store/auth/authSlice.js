import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "template",
  initialState: {
    status: "not-authenticated", //not-authenticated','authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
