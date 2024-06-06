import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listBaseURL } from "../utils/baseUrl";

const initialState = {
  loading: false,
  listInfo: {},
  error: "",
};

// * Fetch list
export const fetchList = createAsyncThunk("list/", async () => {
  const request = await axios.get(`${listBaseURL}/`);
  const response = await request.data;
  return response;
});

const listSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => {
          return (
            action.type === fetchList.pending.type ||
            action.type === fetchList.pending.type
          );
        },
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => {
          return (
            action.type === fetchList.fulfilled.type ||
            action.type === fetchList.fulfilled.type
          );
        },
        (state, action) => {
          state.loading = false;
          state.listInfo = action.payload;
        }
      )
      .addMatcher(
        (action) => {
          return action.type === fetchList.rejected.type;
        },
        (state, action) => {
          state.loading = false;
          state.listInfo = {};
          state.error = action.error.message;
        }
      );
  },
});

export default listSlice.reducer;
