import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseApi from "../../api/baseApi";

export const fetchDistrict = createAsyncThunk(
  "district/fetchDistrict",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await baseApi.get(
        `/districts?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const districtSlice = createSlice({
  name: "district",
  initialState: {
    districts: [],
    loading: false,
    error: "",
    currentPage: 1,
    totalPages: 1,
    next: null,
    prev: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDistrict.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDistrict.fulfilled, (state, action) => {
        state.districts = action.payload.districts;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.loading = false;
      })
      .addCase(fetchDistrict.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default districtSlice.reducer;
