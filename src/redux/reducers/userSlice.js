import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { publicRequest } from "../../util/apiCall";

const initialState = {
  currentUser: null,
  isLoading: false,
  isError: false,
};
export const login = createAsyncThunk("user", async (user, { dispatch }) => {
  console.log(user);

  const res = await publicRequest.post("auth/login", user);
  console.log(res);

  return res.data.data.user;
});
export const registerUser = createAsyncThunk(
  "user",
  async (user, { dispatch }) => {
    console.log(user);
    const res = await publicRequest.post("auth/signup", user);

    return res.data.data.user;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = state.payload;
      window.location.href = "/";
    },
    [login.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.isError = false;
      state.currentUser = payload;
      window.location.href = "/";
    },
    [login.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default userSlice.reducer;
