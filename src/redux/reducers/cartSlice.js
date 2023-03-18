import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { publicRequest } from "../../util/apiCall";

const initialState = {
  carts: [],
  isLoading: false,
  isError: false,
};

export const getMyCarts = createAsyncThunk(
  "cart",
  async (params, { dispatch }) => {
    const res = await publicRequest.get("/cart/me/" + params);
    return res.data.data.data;
  }
);
export const deleteMyCart = createAsyncThunk(
  "cart",
  async (params, { dispatch }) => {
    await publicRequest.delete("/cart/me/" + params.id);
    dispatch(getMyCarts(params.userId));
  }
);
export const deleteAllCart = createAsyncThunk(
  "cart",
  async (params, { dispatch }) => {
    console.log(params);
    await publicRequest.delete("/cart/me/all/" + params);
    dispatch(getMyCarts(params));
  }
);
export const createACart = createAsyncThunk(
  "cart",
  async (params, { dispatch }) => {
    await publicRequest.post("/cart", {
      userId: params.userId,
      product: params.productId,
    });
    dispatch(getMyCarts(params.userId));
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getMyCarts.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getMyCarts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.carts = payload;
    },
  },
});

export default cartSlice.reducer;
