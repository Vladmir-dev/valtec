import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./AuthActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    token: null,
    refresh_token: null,
    isLoading: false,
    error: null,
    message: null,
  },

  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log("login token", action.payload);
      state.isLoading = false;
      state.token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      // console.log("token", state.token);
      window.location.href = "/dashboard";
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //sign up
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      window.location.href = "/otp";
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
