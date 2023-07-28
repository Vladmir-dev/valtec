import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../datatablesource";

const Config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const get_jobs = createAsyncThunk(
  "job/get_jobs",
  async (token, { getState, rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${BASE_URL}/job/jobs/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const get_users = createAsyncThunk(
  "job/get_users",
  async (token, { getState, rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${BASE_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("action users", response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const create_user = createAsyncThunk(
  "job/create_user",
  async ({ token, formData }, { getState, rejectWithValue, dispatch }) => {
    console.log("token", token);
    console.log("formdata ===>", formData);
    try {
      const response = await axios.post(`${BASE_URL}/register/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("response ==>", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const create_job = createAsyncThunk(
  "job/create_job",
  async ({ token, formData }, { getState, rejectWithValue, dispatch }) => {
    console.log("token", token);
    console.log("formdata ===>", formData);
    try {
      const response = await axios.post(
        `${BASE_URL}/job/create_job/`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("response ==>", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
