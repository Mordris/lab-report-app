import { createSlice } from '@reduxjs/toolkit';
import { reportsApi } from './reportsApi';

const reportsSlice = createSlice({
  name: 'reports',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(reportsApi.endpoints.getReports.matchFulfilled, (state, action) => {
        return action.payload;
      })
      .addMatcher(reportsApi.endpoints.createReport.matchFulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addMatcher(reportsApi.endpoints.updateReport.matchFulfilled, (state, action) => {
        const index = state.findIndex((report) => report._id === action.payload._id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addMatcher(reportsApi.endpoints.deleteReport.matchFulfilled, (state, action) => {
        return state.filter((report) => report._id !== action.payload._id);
      });
  },
});

export default reportsSlice.reducer;
