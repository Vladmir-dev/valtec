import { createSlice } from "@reduxjs/toolkit";
import { get_jobs, get_users, create_user, create_job } from "./jobActions";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const jobSlice = createSlice({
  name: "job",
  initialState: {
    isLoading: false,
    error: null,
    jobs: [],
    users: [],
    message: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    //get jobs
    builder.addCase(get_jobs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_jobs.fulfilled, (state, action) => {
      console.log("slice job =>", action.payload);
      state.isLoading = false;
      state.jobs = action.payload;
    });

    builder.addCase(get_jobs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //get users
    builder.addCase(get_users.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(get_users.fulfilled, (state, action) => {
      console.log("slice job =>", action.payload);
      state.isLoading = false;
      state.users = action.payload;
    });

    builder.addCase(get_users.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //create users
    builder.addCase(create_user.pending, (state) => {
      state.message = null;
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(create_user.fulfilled, (state, action) => {
      console.log("slice job =>", action.payload);
      state.isLoading = false;
      state.message = "success";
    });

    builder.addCase(create_user.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //create job
    builder.addCase(create_job.pending, (state) => {
      state.message = null;
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(create_job.fulfilled, (state, action) => {
      console.log("slice job =>", action.payload);
      state.isLoading = false;
      state.message = "success";
    });

    builder.addCase(create_job.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default jobSlice.reducer;
